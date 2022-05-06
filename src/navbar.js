export function navComponent(){
    const nav = document.createElement('div');
    const navContainer = document.createElement('div');
    const logo = document.createElement('div');
    const menu = document.createElement('div');
    const homeMenu = document.createElement('div');
    const foodsMenu = document.createElement('div');
    const aboutMenu = document.createElement('div');

    nav.classList.add('nav');
    navContainer.classList.add('navContainer');
    menu.classList.add('menu');
    homeMenu.classList.add('home');
    foodsMenu.classList.add('foods');
    aboutMenu.classList.add('about');
    
    nav.appendChild(navContainer);
    navContainer.appendChild(logo);
    navContainer.appendChild(menu);
    menu.appendChild(homeMenu);
    menu.appendChild(foodsMenu);
    menu.appendChild(aboutMenu);

    logo.innerText = "Odin Restaurant";
    homeMenu.innerText = "home";
    foodsMenu.innerText = "menu";
    aboutMenu.innerText = "about";

    return nav;
}