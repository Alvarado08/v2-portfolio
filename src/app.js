//DOM Elements
const projectsGrid = document.querySelector("#projects-grid");

//Project Card Constructor
// function Project(image,title,desc,tools){
//     this.image = image;
//     this.title = title;
//     this.desc = desc;
//     this.tools = tools;
// }

//Projects Array
const projects = [
    {
        "img": "src/img/projects/rps.jpg",
        "title": "SCC",
        "desc": "Loremsum",
        "tools": ["Yii2", "Bootstrap", "Php", "MySql"],
        "tag": "Grad Project",
    },
    {
        "img": "src/img/projects/etch.jpg",
        "title": "Rayados Waller",
        "desc": "Loremsum",
        "tools": ["Wordpress","CSS"],
        "tag": "Freelance",
    },
    {
        "img": "src/img/projects/personcard.png",
        "title": "Ratings",
        "desc": "Loremsum",
        "tools": ["HTML","Tailwind","JS"],
        "tag": "ICodeThis",
    },
    {
        "img": "src/img/projects/personcard.png",
        "title": "User Card",
        "desc": "Loremsum",
        "tools": ["HTML","Tailwind","JS"],
        "tag": "Personal",
    },
    {
        "img": "src/img/projects/rps.jpg",
        "title": "Salsas Lonchi",
        "desc": "Loremsum",
        "tools": ["HTML","CSS","JS"],
        "tag": "Personal",
    },
    {
        "img": "src/img/projects/etch.jpg",
        "title": "Pricing",
        "desc": "Loremsum",
        "tools": ["HTML","Tailwind","JS"],
        "tag": "ICodeThis",
    }
];


function createCard(project){
    const card = document.createElement("article");
    card.innerHTML = `
    <article class="w-80 rounded shadow-lg p-5 transition hover:delay-150 duration-700 ease-in-out hover:scale-105 hover:cursor-pointer">
        <div class="w-full h-40 overflow-hidden rounded">
            <img src="${project.img}" alt="Rock Paper Scissors" class="object-cover w-full h-40">
        </div>
        <h3 class="font-bold font-firaSans mt-2">${project.title}</h3>
        <p class="font-barlow">
            ${project.desc}
        </p>
        <section class="space-x-2 font-firaSans text-jellyBlue text-sm uppercase mt-2 w-16">
            ${project.tools.map(tool => `<span>${tool}</span>`).join("")}
        </section>
        <span class="font-bold text-xs uppercase text-desirePink">${project.tag}</span>
        <section class="flex items-center space-x-1 mt-2">
            <a href="#" target="_blank" title="Github">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="30" height="30" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                </svg>
            </a>
            <a href="#" target="_blank" title="Demo">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="30" height="30" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                    <path d="M11 13l9 -9"></path>
                    <path d="M15 4h5v5"></path>
                </svg>
            </a>
        </section>
    </article>
    
    `
    projectsGrid.appendChild(card);
}

function showProjects(){
    const projectsGrid = document.querySelector("#projects-grid");
    projects.forEach(project => {
        // const card = createCard(project);
        // projectsGrid.appendChild(card);
        createCard(project);
    })
}

showProjects();