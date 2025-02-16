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
        
        const projectDetails = document.createElement('div');
        projectDetails.classList.add('card-details');
        
        const projectTitle = document.createElement('h3');
        projectTitle.classList.add('text-title');
        projectTitle.textContent = project.title;
        
        const projectDescription = document.createElement('p');
        projectDescription.classList.add('text-body');
        projectDescription.textContent = project.description;
        
        const projectButton = document.createElement('a');
        projectButton.classList.add('card-button');
        projectButton.href = project.link.github;
        projectButton.textContent = 'View on GitHub';
        
        projectDetails.appendChild(projectTitle);
        projectDetails.appendChild(projectDescription);
        projectCard.appendChild(projectImage);
        projectCard.appendChild(projectDetails);
        projectCard.appendChild(projectButton);
        
        projectsContainer.appendChild(projectCard);
    });
});
