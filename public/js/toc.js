// Generate TOC dynamically based on page headings
    function generateTableOfContents() {
        const tocList = document.getElementById('dynamic-toc');
        const tocDropdown = document.getElementById('toc-dropdown');
        
        if (!tocList) return;
        
        // Find all h2 and h3 elements in the main content or container
        const headings = document.querySelectorAll('main h2[id], main h3[id], .container h2[id], .container h3[id]');
        
        // Hide TOC if no headings found
        if (headings.length === 0) {
            if (tocDropdown) tocDropdown.style.display = 'none';
            return;
        }
        
        // Show TOC dropdown
        if (tocDropdown) tocDropdown.style.display = '';
        
        // Clear existing content
        tocList.innerHTML = '';
        
        // Create TOC items
        headings.forEach(heading => {
            const level = heading.tagName.toLowerCase();
            const id = heading.id;
            const text = heading.textContent || '';
            
            const li = document.createElement('li');
            li.className = `toc-item toc-${level}`;
            
            const a = document.createElement('a');
            a.href = `#${id}`;
            a.textContent = text;
            
            li.appendChild(a);
            tocList.appendChild(li);
        });
    }
    
    // Generate TOC multiple times to handle async content rendering
    function initTOC() {
        generateTableOfContents();
        
        // Regenerate after a short delay to catch dynamically rendered content
        setTimeout(generateTableOfContents, 100);
        
        // Also regenerate after MathJax finishes (if present)
        if (window.MathJax) {
            window.MathJax.startup = window.MathJax.startup || {};
            window.MathJax.startup.promise = (window.MathJax.startup.promise || Promise.resolve()).then(() => {
                generateTableOfContents();
            });
        }
    }
    
    // Generate TOC when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTOC);
    } else {
        initTOC();
    }