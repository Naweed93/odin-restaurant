export function foodContent(){
    const foodContainer = document.createElement('div');
    const food = [];
    for (let i = 0; i<4; i++){
        food[i] = document.createElement('div');
        const foodData = document.createElement('div');
        const foodImage = document.createElement('span');
        const foodTitle = document.createElement('h2');
        const foodDescription = document.createElement('p');
        const foodPrice = document.createElement('p');

        food[i].classList.add(`food-${i}`);
        foodData.classList.add('food-data');
        foodPrice.classList.add('price');
        foodDescription.classList.add('description');

        if(i%2){
            food[i].appendChild(foodImage);
            food[i].appendChild(foodData);
        }
        else{
            food[i].appendChild(foodData);
            food[i].appendChild(foodImage);
        }

        foodTitle.innerText = "Pizza";
        foodDescription.innerText = "Pizza is made by blah blah blah and its so healthy! \n Try to eat a pizza every day if u wanna live +100 years."
        foodPrice.innerHTML = "10.<span>88</span> $"

        foodData.appendChild(foodTitle);
        foodData.appendChild(foodDescription);
        foodData.appendChild(foodPrice);
        foodContainer.appendChild(food[i]);
    }

    foodContainer.classList.add('foodContainer');
    return foodContainer;
}