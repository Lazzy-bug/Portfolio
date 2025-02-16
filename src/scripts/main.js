import projects from './projects.js';

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-menu');
    const menu = document.getElementById('menu');

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    }

    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('expanded');
        });
    });

    // Fetch and display projects
    const projectsContainer = document.getElementById('projects-container');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('card');
        
        const projectImage = document.createElement('img');
        projectImage.src = project.image;
        projectImage.alt = project.title;
        
        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.title;
        
        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;
        
        projectCard.appendChild(projectImage);
        projectCard.appendChild(projectTitle);
        projectCard.appendChild(projectDescription);
        
        projectsContainer.appendChild(projectCard);
    });
});
