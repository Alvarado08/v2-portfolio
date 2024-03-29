//DOM Elements
const projectsGrid = document.querySelector("#projects-grid");
const navBar = document.querySelector("#nav-bar");
const menuBtn = document.querySelector("#menu-btn");
const menuItems = document.querySelector("#menu-items");
const menuLinks = document.querySelectorAll(".items");
//For Theme
const logo = document.querySelector("#logo");
const themeIcon = document.querySelectorAll("#theme-icon");
const blackBody = document.querySelector("body");
const honeyDew = document.querySelectorAll(".honey");
const hello = document.querySelector(".hello");
const desc = document.querySelectorAll(".desc");
const jellyBlue = document.querySelectorAll(".jelly");
const jellyBlueDecoration = document.querySelectorAll(".jelly-decoration");
const spaceCadet = document.querySelector(".cadet");
const blackFormLabels = document.querySelectorAll(".form-labels");
const heroIcons = document.querySelectorAll(".hero-social");
const toolIcons = document.querySelectorAll(".tool-icon");
const footer = document.querySelector(".footer");
const black = document.querySelector(".black");
const footerIcons = document.querySelectorAll(".footer-icon");
const inputs = document.querySelectorAll(".input");
const formBtn = document.querySelector(".form-btn");

//Animations
const timeline = gsap.timeline({defaults: {duration: 1}});
timeline.from("#logo", {opacity: 0})
    .from(".items", {opacity: 0, stagger: .5})
    .from("#hero-info",{opacity: 0, stagger: .5}, "<.5")
    .from("#headshot",{x: "100vw", ease: "sine.out"}, "<1.5");
        
//Theme 
function navBarCadet(){
    if(navBar.classList.contains("bg-white")){
        navBar.classList.remove("bg-white");
        navBar.classList.add("bg-spaceCadet");
    }else{
        navBar.classList.remove("bg-spaceCadet");
        navBar.classList.add("bg-white");
    }
}
function menuItemsCadet(){
    if(menuItems.classList.contains("bg-white")){
        menuItems.classList.remove("bg-white");
        menuItems.classList.add("bg-spaceCadet");
    }else{
        menuItems.classList.remove("bg-spaceCadet");
        menuItems.classList.add("bg-white");
    }
}
function menuItemsWhite(){
    if(menuItems.classList.contains("bg-spaceCadet")){
        menuItems.classList.remove("bg-spaceCadet");
        menuItems.classList.add("bg-White");
    }
}
function menuBtnWhite(){
    if(menuBtn.getAttribute("src") === "src/svg/menu.svg"){
        menuBtn.classList.remove("light");
        menuBtn.setAttribute("src", "src/svg/menu-white.svg");
    }else{
        menuBtn.classList.add("light");
        menuBtn.setAttribute("src", "src/svg/menu.svg");
    }
}

function menuCloseBtnWhite(){
    if(menuBtn.getAttribute("src") === "src/svg/close.svg" && !menuBtn.classList.contains("closed")){
        menuBtn.classList.remove("light");
        menuBtn.setAttribute("src", "src/svg/close-white.svg");
    }else{
        menuBtn.classList.add("light");
        menuBtn.setAttribute("src", "src/svg/close.svg");
    }
}

function menuToggleWhite(){
    if(menuBtn.setAttribute("src","src/svg/menu-white.svg") || menuBtn.classList.contains("closed")){
        menuBtn.classList.remove("closed");
        menuBtn.setAttribute("src","src/svg/close-white.svg");
        menuItems.classList.remove("opacity-0");
        menuItems.classList.add("top-[80px]","opacity-100");
    }else{
        menuBtn.classList.add("closed");
        menuBtn.setAttribute("src","src/svg/menu-white.svg");
        menuItems.classList.remove("top-[80px]","opacity-100");
        menuItems.classList.add("opacity-0");
    }
}

function menuToggleBlack(){
    if(menuBtn.setAttribute("src","src/svg/menu.svg") || menuBtn.classList.contains("closed")){
        menuBtn.classList.remove("closed");
        menuBtn.setAttribute("src","src/svg/close.svg");
        menuItems.classList.remove("opacity-0");
        menuItems.classList.add("top-[80px]","opacity-100");
    }else{
        menuBtn.classList.add("closed");
        menuBtn.setAttribute("src","src/svg/menu.svg");
        menuItems.classList.remove("top-[80px]","opacity-100");
        menuItems.classList.add("opacity-0");
    }
}

function toBlack(){
    if(blackBody.classList.contains("bg-honeyDew")){
        blackBody.classList.remove("light");
        blackBody.classList.remove("bg-honeyDew");
        blackBody.classList.add("bg-black");
    }else{
        blackBody.classList.add("light");
        blackBody.classList.remove("bg-black");
        blackBody.classList.add("bg-honeyDew");
    }
    
    if(black.classList.contains("text-honeyDew")){
        black.classList.remove("text-honeyDew");
        black.classList.remove("text-black");
    }else{
        black.classList.remove("text-black");
        black.classList.add("text-honeyDew");
    }
}

function activeLinksToJelly(elem){
    if(elem.classList.contains("active")){
        elem.classList.remove("active");
        elem.classList.add("active2");
    }else{
        elem.classList.remove("active2");
        elem.classList.add("active");
    }
}

function getLogo(){
    if(logo.getAttribute("src") === "src/img/FullLogo_Transparent_NoBuffer.png"){
        logo.setAttribute("src", "src/img/white-logo.png");
    }else{
        logo.setAttribute("src", "src/img/FullLogo_Transparent_NoBuffer.png");
    }
}

function getThemeIconColor(icon){
    if(icon.getAttribute("src") === "src/svg/moon.svg"){
        icon.setAttribute("src", "src/svg/sun-white.svg");
    }else{
        icon.setAttribute("src", "src/svg/moon.svg");
    }
}

function fromSpaceCadetPink(){
    if(hello.classList.contains("text-spaceCadet")){
        hello.classList.remove("text-spaceCadet");
        hello.classList.add("text-desirePink");
    }else{
        hello.classList.remove("text-desirePink");
        hello.classList.add("text-spaceCadet");
    }
}

function fromSpaceCadetHoney(elem){
    if(elem.classList.contains("text-spaceCadet")){
        elem.classList.remove("text-spaceCadet");
        elem.classList.add("text-honeyDew");
    }else{
        elem.classList.remove("text-honeyDew");
        elem.classList.add("text-spaceCadet");
    }
}

function fromJellyBlueText(elem){
    if(elem.classList.contains("text-jellyBlue")){
        elem.classList.remove("text-jellyBlue");
        elem.classList.add("text-desirePink");
    }else{
        elem.classList.remove("text-desirePink");
        elem.classList.add("text-jellyBlue");
    }
}

function toJellyBlueDeco(elem){
    if(elem.classList.contains("decoration-desirePink")){
        elem.classList.remove("decoration-desirePink");
        elem.classList.add("decoration-jellyBlue");
    }else{
        elem.classList.remove("decoration-jellyBlue");
        elem.classList.add("decoration-desirePink");
    }
}

function heroIconsPink(elem){
    if(elem.getAttribute("stroke") === "currentColor"){
        elem.setAttribute("stroke", "#E63946");
    }else{
        elem.setAttribute("stroke", "currentColor");
    }
}

function toolIconsHoney(elem){
    if(elem.getAttribute("stroke") === "currentColor"){
        elem.setAttribute("stroke", "#F1FAEE");
    }else{
        elem.setAttribute("stroke", "currentColor");
    }
}

function footerToWhite(){
    if(footer.classList.contains("bg-spaceCadet")){
        footer.classList.remove("bg-spaceCadet");
        footer.classList.add("bg-honeyDew");
    }else{
        footer.classList.remove("bg-honeyDew");
        footer.classList.add("bg-spaceCadet");
    }
}

function footerIconsWhite(elem){
    if(elem.getAttribute("stroke") === "#F1FAEE"){
        elem.setAttribute("stroke", "currentColor");
    }else{
        elem.setAttribute("stroke", "#F1FAEE");
    }
}

function inputOutlineHoney(elem){
    if(elem.classList.contains("border-gray-300")){
        elem.classList.remove("border-gray-300","bg-gray-50","text-gray-900","focus:ring-blue-500","focus:border-blue-500");
        elem.classList.add("border-[#F1FAEE]","bg-black","text-honeyDew","focus:ring-[#F1FAEE]","focus:border-[#F1FAEE]","placeholder-[#F1FAEE]");
    }else{
        elem.classList.remove("border-[#F1FAEE]","bg-black","text-honeyDew","focus:ring-[#F1FAEE]","focus:border-[#F1FAEE]","placeholder-[#F1FAEE]");
        elem.classList.add("border-gray-300","bg-gray-50","text-gray-900","focus:ring-blue-500","focus:border-blue-500");
    }
}

function btnSpaceCadet(){
    if(formBtn.classList.contains("bg-jellyBlue")){
        formBtn.classList.remove("bg-jellyBlue","hover:bg-spaceCadet");
        formBtn.classList.add("bg-spaceCadet","hover:bg-jellyBlue");
    }else{
        formBtn.classList.remove("bg-spaceCadet","hover:bg-jellyBlue");
        formBtn.classList.add("bg-jellyBlue","hover:bg-spaceCadet");
    }
}

//Click event for dark mode
themeIcon.forEach(icon => {
    const viewPort = window.innerWidth;
    icon.addEventListener("click", () => {
        getLogo();
        navBarCadet();
        menuItemsCadet();
        //menuBtnWhite();
        if (menuBtn.classList.contains("closed")) {
            menuBtnWhite();
        } else {
            menuCloseBtnWhite();
          }
        toBlack();
        getThemeIconColor(icon);
        honeyDew.forEach(item => {
        item.classList.toggle("text-honeyDew");
      })
    //   menuLinks.forEach(item => {
    //     activeLinksToJelly(item);
    //   })
      jellyBlueDecoration.forEach(item => {
        toJellyBlueDeco(item);
      })
      fromSpaceCadetPink();  
      desc.forEach(item => {
        fromSpaceCadetHoney(item);
      })
      heroIcons.forEach(item => {
        heroIconsPink(item);
      })
      jellyBlue.forEach(item => {
        fromJellyBlueText(item);
      })
      toolIcons.forEach(item => {
        toolIconsHoney(item);
      })
      blackFormLabels.forEach(item => {
        item.classList.toggle("text-desirePink");
      })
      footerToWhite();
      footerIcons.forEach(item => {
        footerIconsWhite(item);
      })
      inputs.forEach(item => {
        inputOutlineHoney(item);
      })
      btnSpaceCadet();
    })
})

//Mobile Menu
menuBtn.addEventListener("click", () => {
    if (menuBtn.classList.contains("light")) {
        menuToggleBlack();
    }else {
        menuToggleWhite();
    }
    // if(menuBtn.getAttribute("src") === "src/svg/menu-white.svg"){
    //     menuBtn.setAttribute("src","src/svg/close-white.svg");
    // }else{
    //     menuBtn.setAttribute("src","src/svg/menu-white.svg");
    // }

    // if(menuBtn.classList.contains("menu")){
    //     menuBtn.classList.remove("menu");
    //     menuItems.classList.remove("opacity-0");
    //     menuItems.classList.add("top-[80px]","opacity-100");
    // }else{
    //     menuBtn.classList.add("menu");
    //     menuBtn.setAttribute("src","src/svg/menu.svg");
    //     menuItems.classList.remove("top-[80px]","opacity-100");
    //     menuItems.classList.add("opacity-0","top-[-400px]");
    // }
})

//Navbar behavior according to scroll, mobile views and theme
// function scrollBehavior(){
//     const currentScrollPos = window.pageYOffset;
//     const viewPort = window.innerWidth;

//     if(currentScrollPos > 0){
//         if(!blackBody.classList.contains("light")){
//             navBar.classList.add("bg-spaceCadet");
//             navBar.classList.add("bg-spaceCadet");
//         }else if(viewPort <= 767 && blackBody.classList.contains("light")){
//             navBar.classList.add("bg-white");
//             menuItems.classList.add("bg-white");
//         }
//         else{
//             navBar.classList.add("bg-white");
//         }
//     }else{
//         navBar.classList.remove("bg-spaceCadet","bg-white");
//         menuItems.classList.remove("bg-white");
//     }
// }
// window.addEventListener("scroll", scrollBehavior);


//Responsive active navbar links
function updateNavigation(){
    const sections = document.querySelectorAll(".main-section");
    const navLinks = document.querySelectorAll("#menu-items a");

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(window.pageYOffset >= sectionTop - sectionHeight / 2){
            const sectionId = section.getAttribute("id");

            navLinks.forEach(link => {
                if(link.getAttribute("href") === `#${sectionId}`){
                    link.classList.add("active");
                    link.classList.remove("notactive");
                }else{
                    link.classList.remove("active");
                    link.classList.add("notactive");
                }
            })

            // Scroll to the top when clicking on the home link
            if (sectionId === "hero") {
            const homeLink = document.querySelector('a[href="#hero"]');
            homeLink.addEventListener('click', function(event) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            });
          }
        }
    })
}

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
        img: "src/img/projects/dios-proveera.png",
        title: "Iglesia Bautista Dios Proveera",
        desc: `
            Iglesia Bautista Dios Proveera local church website with a blog focus and a functional contact form.
        `,
        tools: ["Astro","Tailwind"],
        tag: "Freelance",
        links: [
            {
                a: `
                <a href="https://github.com/Alvarado08/dios-proveera" target="_blank" title="Github">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="30" height="30" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                </svg>
                </a>
                `
            },
            {
                a: `
                <a href="https://iglesiadiosproveera.com" target="_blank" title="Live"">
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
        tools: ["Wordpress"],
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
        desc: "A classic and dynamic rating system with a stylish and responsive UI.",
        tools: ["Tailwind","JS"],
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
        img: "src/img/projects/lonchi.png",
        title: "Salsas Lonchi",
        desc: `
            PWA that works as a profit manager for a day's sales for Salsas Lonchi local habanero sauce family business.
        `,
        tools: ["CSS","JS"],
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
        tools: ["Tailwind","JS"],
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
    <article class="bg-white w-full max-w-xs rounded shadow-lg p-5 transition hover:delay-150 duration-700 ease-in-out hover:scale-105 hover:cursor-pointer">
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
    // const currentScrollPos = window.pageYOffset;
    // const viewPort = window.innerWidth;

    // if(currentScrollPos > 0 || viewPort <= 767){

    // }

    // if(currentScrollPos > 0 || viewPort <= 767) {
    //     if(blackBody.classList.contains("bg-black")){
    //         navBar.classList.add("bg-spaceCadet", "shadow");
    //     }else{
    //         navBar.classList.add("bg-white", "shadow");
    //     }
    //     if(viewPort <= 767){
    //         menuItems.classList.add("bg-white");
    //     }
    // }else{
    //     navBar.classList.remove("bg-white", "bg-spaceCadet", "shadow");
    //     menuItems.classList.remove("bg-white");
    // }
})

window.addEventListener("scroll", updateNavigation);