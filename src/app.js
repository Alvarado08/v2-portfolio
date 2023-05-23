//DOM Elements
const projectsGrid = document.querySelector("#projects-grid");
const navBar = document.querySelector("#nav-bar");
const menuBtn = document.querySelector("#menu-btn");
const menuItems = document.querySelector("#menu-items");

//Responsive menu sections
let prevScrollPos = window.pageYOffset;
function updateNavigation(){
    const sections = document.querySelectorAll(".main-section");
    const navLinks= document.querySelectorAll("#menu-items a");

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(window.pageYOffset >= sectionTop - sectionHeight / 2){
            const sectionId = section.getAttribute("id");
            // navBar.classList.add("bg-white", "shadow");

            navLinks.forEach(link => {
                if(link.getAttribute("href") === `#${sectionId}`){
                    link.classList.add("active");
                }else{
                    link.classList.remove("active");
                }
            })

        }
    })
}

//Mobile Menu
menuBtn.addEventListener("click", () => {
    if(menuBtn.classList.contains("menu")){
        menuBtn.classList.remove("menu");
        menuBtn.setAttribute("src","src/svg/close.svg");
        menuItems.classList.remove("opacity-0");
        menuItems.classList.add("top-[80px]","opacity-100");
    }else{
        menuBtn.classList.add("menu");
        menuBtn.setAttribute("src","src/svg/menu.svg");
        menuItems.classList.remove("top-[80px]","opacity-100");
        menuItems.classList.add("opacity-0","top-[-400px]");
    }
})

//Theme

//Projects Array
const projects = [
    {
        img: "src/img/projects/scc.png",
        title: "Complementary Credits System",
        desc: `
            SCC is focused to automate proccesses and reduce time for admins to
            manage student's status regarding their complementary credits. Students can consult
            their status with their ids.
        `,
        tools: ["Yii2", "Bootstrap", "Php", "MySql"],
        tag: "Grad Project",
        links: [
            {
                a: `
                <a href="http://creditoscomplementarios.valladolid.tecnm.mx" target="_blank" title="Live"">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="30" height="30" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                    <path d="M11 13l9 -9"></path>
                    <path d="M15 4h5v5"></path>
                </svg>
                </a>
                `
            }
        ]
    },
    {
        img: "src/img/projects/rayados.png",
        title: "Rayados Waller",
        desc: `
            Website for non-profit Rayados Waller Academy soccer league. Users can create an account, upload 
            required documents for registration and register players with online payment.
        `,
        tools: ["Wordpress","CSS"],
        tag: "Freelance",
        links: [
            {
                a: `
                <a href="https://rayadoswaller.org" target="_blank" title="Live"">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="30" height="30" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                    <path d="M11 13l9 -9"></path>
                    <path d="M15 4h5v5"></path>
                </svg>
                </a>
                `
            }
        ]
    },
    {
        img: "src/img/projects/meeting-feed.png",
        title: "Meeting Feedback",
        desc: "A dynamic rating system with a stylish and responsive UI that can be easily integrated with any project.",
        tools: ["HTML","Tailwind","JS"],
        tag: "ICodeThis",
        links: [
            {
                a: `
                <a href="https://www.icodethis.com/submissions/8690" target="_blank" title="Meeting Feedback"">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="30" height="30" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                    <path d="M11 13l9 -9"></path>
                    <path d="M15 4h5v5"></path>
                </svg>
                </a>
                `
            }
        ]
    },
    {
        img: "src/img/projects/personcard.png",
        title: "User Card",
        desc: `
            Population of 
            card contents with random image, name and greeting depending on the person's gender.
        `,
        tools: ["HTML","Tailwind","JS"],
        tag: "Personal",
        links: [
            {
                a: `
                <a href="https://github.com/Alvarado08/person-card-generator" target="_blank" title="Github">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="30" height="30" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                </svg>
                </a>
                `
            },
            {
                a: `
                <a href="https://alvarado08.github.io/person-card-generator/" target="_blank" title="Live"">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="30" height="30" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                    <path d="M11 13l9 -9"></path>
                    <path d="M15 4h5v5"></path>
                </svg>
                </a>
                `
            }
        ]
    },
    {
        img: "src/img/projects/lonchi.png",
        title: "Salsas Lonchi",
        desc: `
            PWA that works as a profit manager for a day's sales for a local habanero sauce family business.
        `,
        tools: ["HTML","CSS","JS"],
        tag: "Personal",
        links: [
            {
                a: `
                <a href="https://github.com/Alvarado08/salsas-lonchi-ventas" target="_blank" title="Github">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="30" height="30" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                </svg>
                </a>
                `
            },
            {
                a: `
                <a href="https://salsas-lonchi-ventas.netlify.app" target="_blank" title="Live"">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="30" height="30" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                    <path d="M11 13l9 -9"></path>
                    <path d="M15 4h5v5"></path>
                </svg>
                </a>
                `
            }
        ]
    },
    {
        img: "src/img/projects/pending-invites.png",
        title: "Pending Invites",
        desc: "A modern and responsive UI mockup with dynamic options for joining or declining an invitation.",
        tools: ["HTML","Tailwind","JS"],
        tag: "ICodeThis",
        links: [
            {
                a: `
                <a href="https://www.icodethis.com/submissions/11580" target="_blank" title="Live"">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="30" height="30" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                    <path d="M11 13l9 -9"></path>
                    <path d="M15 4h5v5"></path>
                </svg>
                </a>
                `
            }
        ]
    }
];


function createCard(project){
    const card = document.createElement("article");
    card.innerHTML = `
    <article class="w-full max-w-xs rounded shadow-lg p-5 transition hover:delay-150 duration-700 ease-in-out hover:scale-105 hover:cursor-pointer">
        <div class="w-full h-40 overflow-hidden rounded">
            <img src="${project.img}" alt="${project.title}" class="object-cover w-full h-40">
        </div>
        <h3 class="text-lg font-bold font-firaSans mt-2">${project.title}</h3>
        <p class="font-barlow leading-[1.2rem]">
            ${project.desc}
        </p>
        <section class="space-x-2 font-firaSans text-jellyBlue text-sm uppercase mt-2 w-16">
            ${project.tools.map(tool => `<span>${tool}</span>`).join("")}
        </section>
        <span class="font-bold text-xs uppercase text-desirePink">${project.tag}</span>
        <section class="flex items-center space-x-1 mt-2">
            ${project["links"].map(link => link.a).join("")}
        </section>
    </article>
    
    `
    projectsGrid.appendChild(card);
}

function showProjects(){
    projects.forEach(project => {
        createCard(project);
    })
}

showProjects();
window.addEventListener("scroll", () => {
    const currentScrollPos = window.pageYOffset;

    if(currentScrollPos > 0) {
        navBar.classList.add("bg-white", "shadow");
    }else{
        navBar.classList.remove("bg-white", "shadow");
    }
      prevScrollPos = currentScrollPos;
})
window.addEventListener("scroll", updateNavigation);