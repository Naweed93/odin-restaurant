import {navComponent} from './navbar.js'
import { homeContent } from './home.js';
import { foodContent } from './foods.js';
import { aboutContent } from './about.js';

const contentContainer =document.createElement('div');
contentContainer.classList.add('contentContainer');

document.body.appendChild(navComponent());
document.body.appendChild(contentContainer);
contentContainer.appendChild(homeContent());

const home = document.querySelectorAll('.home')[0];
const foods = document.querySelectorAll('.foods')[0];
const about = document.querySelectorAll('.about')[0];

home.addEventListener('click', ()=>{
    contentContainer.removeChild(contentContainer.childNodes[0]);
    contentContainer.appendChild(homeContent());
});
foods.addEventListener('click', ()=>{
    contentContainer.removeChild(contentContainer.childNodes[0]);
    contentContainer.appendChild(foodContent());
});
about.addEventListener('click', ()=>{
    contentContainer.removeChild(contentContainer.childNodes[0]);
    contentContainer.appendChild(aboutContent());
});