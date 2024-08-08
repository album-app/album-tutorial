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
    const script = document.createElement('script');
    script.setAttribute('type', 'text/template');
    script.textContent = content;
    section.appendChild(script);
    return section;
};

const initMarkdown = async () => {
    const markdownSection = document.getElementById('markdown-section');
    if (!markdownSection) {
        console.error('Could not find #markdown-section element');
        return;
    }
    const markdownFile = markdownSection.getAttribute('markdown');
    
    const rawMarkdown = await loadMarkdownFile(markdownFile, { initialDir: '.' });
    if (!rawMarkdown) return;

    const processedMarkdown = await processMarkdown(rawMarkdown, { initialDir: '.' });

    // Clear existing content
    markdownSection.innerHTML = '';

    // Split into vertical sections
    const verticalSections = processedMarkdown.split(/^---$/m);
    
    verticalSections.forEach(verticalSection => {
        const horizontalSlides = verticalSection.split(/^--$/m);
        const verticalSlideSection = document.createElement('section');
        
        horizontalSlides.forEach(slideContent => {
            verticalSlideSection.appendChild(createSlideSection(slideContent.trim()));
        });
        
        markdownSection.appendChild(verticalSlideSection);
    });

    Reveal.initialize({
        plugins: [RevealMarkdown, RevealHighlight, RevealNotes],
        markdown: {
            smartypants: true
        }
    });
};

document.addEventListener('DOMContentLoaded', initMarkdown);
