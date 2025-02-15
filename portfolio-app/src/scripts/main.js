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

function changeLanguage() {
    const languageSelect = document.getElementById('language-select');
    const selectedLanguage = languageSelect.value;

    // Add logic to change the language of the content
    if (selectedLanguage === 'kan') {
        document.getElementById('home-title').textContent = 'ಪ್ರಾಜೆಕ್ಟ್ಸ್';
        document.getElementById('home-content').textContent = 'ನನ್ನ ಪೋರ್ಟ್ಫೋಲಿಯೊಗೆ ಸ್ವಾಗತ! ಇಲ್ಲಿ ನೀವು ನನ್ನ ಪ್ರಾಜೆಕ್ಟ್ಗಳನ್ನು ಕಂಡುಹಿಡಿಯಬಹುದು ಮತ್ತು ನನ್ನ ಬಗ್ಗೆ ಹೆಚ್ಚು ತಿಳಿಯಬಹುದು.';
        document.getElementById('works-title').textContent = 'ಕೌಶಲಗಳು';
        document.getElementById('works-content').textContent = 'ಇಲ್ಲಿ ನಾನು ಕೆಲಸ ಮಾಡಿದ ಕೆಲವು ಪ್ರಾಜೆಕ್ಟ್ಗಳಿವೆ:';
        document.getElementById('about-title').textContent = 'ನನ್ನ ಬಗ್ಗೆ';
        document.getElementById('about-content').textContent = 'ನನ್ನ ಬಗ್ಗೆ ಮತ್ತು ನನ್ನ ಪ್ರಯಾಣದ ಬಗ್ಗೆ ಹೆಚ್ಚು ತಿಳಿಯಿರಿ.';
        document.getElementById('contact-title').textContent = 'ಸಂಪರ್ಕ';
        document.getElementById('contact-content').textContent = 'ನೀವು ಸಂಪರ್ಕಿಸಲು ಬಯಸಿದರೆ, ದಯವಿಟ್ಟು ಇಮೇಲ್ ಮೂಲಕ ತಲುಪಿರಿ.';
    } else {
        document.getElementById('home-title').textContent = 'Projects';
        document.getElementById('home-content').textContent = 'Welcome to my portfolio! Here you can find my projects and learn more about me.';
        document.getElementById('works-title').textContent = 'Skills';
        document.getElementById('works-content').textContent = 'Here are some of the projects I\'ve worked on:';
        document.getElementById('about-title').textContent = 'About Me';
        document.getElementById('about-content').textContent = 'Learn more about me and my journey.';
        document.getElementById('contact-title').textContent = 'Contact';
        document.getElementById('contact-content').textContent = 'If you\'d like to get in touch, please reach out via email.';
    }
}