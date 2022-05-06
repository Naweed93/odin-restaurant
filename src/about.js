export function aboutContent(){
    const aboutContainer = document.createElement('div');
    const aboutText = document.createElement('p');

    aboutContainer.classList.add('about-container');
    aboutContainer.appendChild(aboutText);

    aboutText.innerText = "Under Construction!";

    return aboutContainer;
}