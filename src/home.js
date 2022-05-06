export function homeContent(){
    const contentContainer = document.createElement('div');
    const staff = document.createElement('div');
    const address = document.createElement('div');
    const testimonial = document.createElement('div');
    const staffText = document.createElement('p');
    const addressText = document.createElement('p');
    const staffTitle = document.createElement('h2');
    const addressTitle = document.createElement('h2');
    const testimonialTitle = document.createElement('h2');
    const staffContainer = document.createElement('div');
    const addressContainer = document.createElement('div');
    const testimonialContainer = document.createElement('div');

    contentContainer.classList.add('homeContainer');
    staff.classList.add('staff');
    address.classList.add('address');
    testimonial.classList.add('testimonial');

    contentContainer.appendChild(staff);
    contentContainer.appendChild(address);
    contentContainer.appendChild(testimonial);
    staff.appendChild(staffTitle);
    staff.appendChild(staffContainer)
    staffContainer.appendChild(document.createElement('span'));
    staffContainer.appendChild(staffText);
    address.appendChild(addressTitle);
    address.appendChild(addressContainer)
    addressContainer.appendChild(addressText);
    addressContainer.appendChild(document.createElement('span'));
    testimonial.appendChild(testimonialTitle);
    testimonial.appendChild(testimonialContainer);
    for(let i = 0 ; i<4; i++){
        const people = document.createElement('div');
        const peopleName = document.createElement('h3');
        const peopleText = document.createElement('p');

        people.appendChild(document.createElement('span'));
        people.appendChild(peopleName);
        people.appendChild(peopleText)
        testimonialContainer.appendChild(people);

        peopleName.innerText = "Naweed";
        peopleText.innerText= "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...";
    }

    staffTitle.innerText = "Staff";
    addressTitle.innerText = "Address";
    testimonialTitle.innerText = "Testimonial";
    staffText.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    addressText.innerHTML = "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
    return contentContainer;
}