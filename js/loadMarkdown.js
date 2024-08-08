const loadMarkdownFile = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to load ${url}`);
        }
        return await response.text();
    } catch (error) {
        console.error('Error loading markdown file:', error);
        return null;
    }
};

const processMarkdown = async (markdown) => {
    const lines = markdown.split('\n');
    const processedLines = [];

    for (const line of lines) {
        if (line.trim().startsWith('FILE:')) {
            const fileName = line.trim().split('FILE:')[1].trim();
            const fileContent = await loadMarkdownFile(fileName);
            if (fileContent) {
                processedLines.push(await processMarkdown(fileContent));
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
    
    const rawMarkdown = await loadMarkdownFile(markdownFile);
    if (!rawMarkdown) return;

    const processedMarkdown = await processMarkdown(rawMarkdown);
    
    // Split into vertical slides
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
