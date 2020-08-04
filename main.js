const portfolioItems = document.querySelectorAll('.portfolio-item')

portfolioItems.forEach(item => {
item.addEventListener('mouseover', () => {
        let selectedPortfolioInfo = item.querySelector('.portfolio-info');
        let selectedIcon = item.querySelector('.links');
        let selectedPortfolio = item.querySelector('.portfolio-overlay');
        selectedPortfolio.style.opacity = '1';
        selectedIcon.style.opacity = '1';
        selectedPortfolioInfo.style.opacity = '1';
    });
    item.addEventListener('mouseout', () => {
        let selectedIcon = item.querySelector('.links');
        let selectedPortfolio = item.querySelector('.portfolio-overlay');
        selectedPortfolio.style.opacity = '0';
        selectedPortfolio.style.transition = 'ease-in-out 1s';
        selectedIcon.style.opacity = '0';
        selectedPortfolioInfo.style.opacity = '0';
    });
});
