document.addEventListener('DOMContentLoaded', function() {
    // Toggle bookmark button
    const bookmarkButtons = document.querySelectorAll('.bookmark-btn');
    
    bookmarkButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Toggle the bookmark icon between filled and outline
            const icon = this.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                this.classList.add('active');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                this.classList.remove('active');
            }
        });
    });

    // Category selector functionality
    const categoryLinks = document.querySelectorAll('.category-selector a');
    
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            categoryLinks.forEach(item => {
                item.parentElement.classList.remove('active');
            });
            
            // Add active class to clicked link
            this.parentElement.classList.add('active');
            
            // Here you would typically fetch new articles based on the selected category
            // For demo purposes, we'll just show a message
            console.log(`Category selected: ${this.textContent}`);
        });
    });
});