const portfolioItems = document.querySelectorAll('.portfolio-item')

portfolioItems.forEach(item => {
item.addEventListener('click', () => {
        let selected = item.querySelector('.portfolio-overlay');
        selected.style.opacity = '1';
    });
});
