const loadAndProcessMarkdown = async (url) => {
    try {
        console.log('Attempting to load markdown from:', url);
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to load ${url}`);
        }
        let markdown = await response.text();
        console.log('Markdown content loaded:', markdown.substring(0, 100) + '...');
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
        
        // Initialize Reveal.js after setting the content
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
    } else {
        console.error('No markdown content loaded');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded event fired');
    initMarkdown();
});
