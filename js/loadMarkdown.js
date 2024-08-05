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

const loadAndProcessMarkdown = async (url, options) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to load ${url}`);
        }
        let markdown = await response.text();
        markdown = await preprocess(markdown, options);
        return markdown;
    } catch (error) {
        console.error('Error loading and processing markdown:', error);
    }
};

const initMarkdown = async () => {
    const markdownContent = await loadAndProcessMarkdown('index.md', { initialDir: '.' });
    const section = document.getElementById('markdown-section');
    section.setAttribute('data-markdown', '');
    section.innerHTML = markdownContent;

    // Initialize Reveal.js after setting the content
    Reveal.initialize({
        plugins: [ RevealMarkdown ],
        markdown: {
            smartypants: true
        }
    });
};

document.addEventListener('DOMContentLoaded', initMarkdown);
