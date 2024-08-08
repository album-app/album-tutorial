const FILE_REF_REGEX = /^FILE: (.+)$/;
const isFileReference = (line) => FILE_REF_REGEX.test(line);

const loadFileContent = async (filePath) => {
    const response = await fetch(filePath);
    if (!response.ok) {
        throw new Error(`Failed to load ${filePath}`);
    }
    return await response.text();
};

const preprocess = async (markdown, options) => {
    const lines = markdown.split('\n');
    const processedLines = await Promise.all(lines.map(async (line) => {
        if (isFileReference(line)) {
            const filePath = line.match(FILE_REF_REGEX)[1];
            return await loadFileContent(`${options.initialDir}/${filePath}`);
        }
        return line;
    }));
    return processedLines.join('\n');
};

const loadMarkdownFile = async (url, options) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to load ${url}`);
        }
        let markdown = await response.text();
        markdown = await preprocess(markdown, options);
        return markdown;
    } catch (error) {
        console.error('Error loading markdown file:', error);
        return null;
    }
};

const processMarkdown = async (markdown, options) => {
    const lines = markdown.split('\n');
    const processedLines = [];

    for (const line of lines) {
        if (line.trim().startsWith('FILE:')) {
            const fileName = line.trim().split('FILE:')[1].trim();
            const fileContent = await loadMarkdownFile(fileName, options);
            if (fileContent) {
                processedLines.push(await processMarkdown(fileContent, options));
            }
        } else {
            processedLines.push(line);
        }
    }

    return processedLines.join('\n');
};

const createSlideSection = (content) => {
    const section = document.createElement('section');
    section.setAttribute('data-markdown', '');
    const textarea = document.createElement('textarea');
    textarea.setAttribute('data-template', '');
    textarea.style.display = 'none';
    textarea.textContent = content || 'Default Slide Content';
    section.appendChild(textarea);
    return section;
};

const initMarkdown = async (markdownFile) => {
    const markdownSection = document.getElementById('markdown-section');
    if (!markdownSection) {
        console.error('Could not find #markdown-section element');
        return;
    }
    
    console.log('Loading markdown file:', markdownFile);
    const rawMarkdown = await loadMarkdownFile(markdownFile, { initialDir: '.' });
    if (!rawMarkdown) {
        console.error('Failed to load markdown file');
        return;
    }

    console.log('Processing markdown');
    const processedMarkdown = await processMarkdown(rawMarkdown, { initialDir: '.' });

    console.log('Clearing existing content');
    markdownSection.innerHTML = '';

    console.log('Splitting into vertical sections');
    const verticalSections = processedMarkdown.split(/^---$/m);
    console.log('Number of vertical sections:', verticalSections.length);
    
    verticalSections.forEach((verticalSection, index) => {
        console.log(`Processing vertical section ${index + 1}`);
        const verticalSlideSection = document.createElement('section');
        verticalSlideSection.appendChild(createSlideSection(verticalSection.trim()));
        markdownSection.appendChild(verticalSlideSection);
    });

    console.log('Initializing Reveal.js');
    Reveal.initialize({
        plugins: [RevealMarkdown, RevealHighlight, RevealNotes],
        markdown: {
            smartypants: true
        },
        width: '100%',
        height: '100%',
        margin: 0,
        minScale: 1,
        maxScale: 1
    }).then(() => {
        Reveal.layout();
        console.log('Reveal.js initialization complete');
    }).catch(error => {
        console.error('Error during Reveal.js initialization:', error);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const markdownFile = urlParams.get('markdown') || 'index.md';
    initMarkdown(markdownFile);
});
