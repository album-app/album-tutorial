const loadAndProcessMarkdown = async (url) => {
    try {
        console.log('Attempting to load markdown from:', url);
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to load ${url}`);
        }
        let markdown = await response.text();
        console.log('Markdown content loaded:', markdown.substring(0, 100) + '...');

        // Process FILE: references
        const lines = markdown.split('\n');
        for (let i = 0; i < lines.length; i++) {
            if (lines[i].trim().startsWith('FILE:')) {
                const fileName = lines[i].trim().split('FILE:')[1].trim();
                const fileContent = await loadAndProcessMarkdown(fileName);
                lines[i] = fileContent;
            }
        }
        markdown = lines.join('\n');

        return markdown;
    } catch (error) {
        console.error('Error loading and processing markdown:', error);
    }
};

const initMarkdown = async () => {
    console.log('initMarkdown function called');
    const markdownSection = document.getElementById('markdown-section');
    if (!markdownSection) {
        console.error('Could not find #markdown-section element');
        return;
    }
    const markdownFile = markdownSection.getAttribute('markdown');
    console.log('Markdown file to load:', markdownFile);
    
    const markdownContent = await loadAndProcessMarkdown(markdownFile);
    if (markdownContent) {
        markdownSection.innerHTML = markdownContent;
        console.log('Markdown content set to innerHTML');
        
        // Use setTimeout to delay Reveal.js initialization
        setTimeout(() => {
            Reveal.initialize({
                plugins: [ RevealMarkdown, RevealHighlight, RevealNotes ],
                markdown: {
                    smartypants: true
                }
            }).then(() => {
                console.log('Reveal.js initialized');
            }).catch(error => {
                console.error('Error initializing Reveal.js:', error);
            });
        }, 100); // Small delay to ensure DOM is updated
    } else {
        console.error('No markdown content loaded');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded event fired');
    initMarkdown();
});
