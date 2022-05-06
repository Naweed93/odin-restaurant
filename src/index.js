import {navComponent} from './navbar.js'
import { homeContent } from './home.js';
import { foodContent } from './foods.js';

const contentContainer =document.createElement('div');
contentContainer.classList.add('contentContainer');

document.body.appendChild(navComponent());
document.body.appendChild(contentContainer);
contentContainer.appendChild(foodContent());