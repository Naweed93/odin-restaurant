import {navComponent} from './navbar.js'


const contentContainer =document.createElement('div');
contentContainer.classList.add('contentContainer');

document.body.appendChild(navComponent());
document.body.appendChild(contentContainer);