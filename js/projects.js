// Function to load projects from JSON file
async function loadProjects() {
    try {
        const response = await fetch('projects.json');
        const data = await response.json();
        return {
            indexProjects: data.index_projects,
            workProjects: data.work_projects
        };
    } catch (error) {
        console.error('Error loading projects:', error);
        return {
            indexProjects: [],
            workProjects: []
        };
    }
}

// Function to render projects in index.html format
function renderIndexProjects(projects) {
    const projectContainer = document.querySelector('.project-flex');
    if (!projectContainer) return;

    projectContainer.innerHTML = projects.map(project => `
        <div role="listitem" class="w-dyn-item">
            <a href="${project.url}" target="_blank" class="work-wrapper w-inline-block">
                <div data-w-id="6319eb54-4678-f1c2-df90-4c7184478370" class="image-wrap">
                    <img loading="lazy" src="${project.image}" alt="${project.title} Project" 
                        sizes="(max-width: 1919px) 94vw, 1440px"
                        srcset="${project.image} 500w, ${project.image} 800w, ${project.image} 1080w, ${project.image} 2000w"
                        class="paralax-image" />
                    <div class="link-icon-wrapper">
                        <div class="link-icon w-embed">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="title-wrapper">
                    <h2 class="work-title">${project.title}</h2>
                </div>
            </a>
        </div>
    `).join('');
}

// Function to render projects in work.html format
function renderWorkProjects(projects) {
    const projectContainer = document.querySelector('.project-flex.add-grid');
    if (!projectContainer) return;

    projectContainer.innerHTML = projects.map(project => `
        <div role="listitem" class="w-dyn-item">
            <a href="${project.url}" target="_blank" class="work-wrapper w-inline-block">
                <div data-w-id="19975c81-abd3-232d-e509-ff64436408dd" class="image-wrap auto with-ratio">
                    <img loading="lazy" src="${project.image}" alt="${project.title} Project" 
                        sizes="(max-width: 991px) 94vw, (max-width: 1919px) 46vw, 712px"
                        class="paralax-image" />
                </div>
                <div class="title-wrapper">
                    <h2 class="work-title">${project.title}</h2>
                    <div class="button-flex _20px">
                        <div class="button-3d">
                            <div class="button-inner">
                                <div class="button-face static">
                                    <div>Visit Site</div>
                                </div>
                                <div class="button-face hover">
                                    <div>Visit Site</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="work-overlay"></div>
                <div class="top-part">
                    <p class="top-text">${project.category}</p>
                    <p class="top-text">${project.year}</p>
                </div>
            </a>
        </div>
    `).join('');
}

// Initialize projects when the page loads
document.addEventListener('DOMContentLoaded', async () => {
    const { indexProjects, workProjects } = await loadProjects();
    
    // Check which page we're on and render accordingly
    if (document.querySelector('.project-flex.add-grid')) {
        renderWorkProjects(workProjects);
    } else if (document.querySelector('.project-flex')) {
        renderIndexProjects(indexProjects);
    }
}); 