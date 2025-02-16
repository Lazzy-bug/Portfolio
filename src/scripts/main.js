import projects from '../data/projects.js';

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
        const projectBox = document.createElement('div');
        projectBox.classList.add('project-box');

        const projectImage = document.createElement('img');
        projectImage.src = project.image;
        projectImage.alt = 'Project Image';

        const projectName = document.createElement('h3');
        projectName.textContent = project.name;

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;

        projectBox.appendChild(projectImage);
        projectBox.appendChild(projectName);
        projectBox.appendChild(projectDescription);

        projectsContainer.appendChild(projectBox);
    });
});
