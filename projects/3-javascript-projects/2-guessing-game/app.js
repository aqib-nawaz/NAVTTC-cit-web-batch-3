let numberToGuess = Math.ceil(Math.random() * 100);
let turn = document.getElementById('turns');
let category = document.getElementById('select-category');

let button = document.getElementById('check-button')
button.disabled = true;

let onCategorySelect = () => {
    
    let categoryVal = category.value;
    // console.log(typeof categoryVal)

    button.disabled = false;


    if(categoryVal === "easy"){
        turn.textContent = 7;
    } else if(categoryVal == "medium"){
        turn.textContent = 5;
    } else if( categoryVal === "hard"){
        turn.textContent = 3;
    } else {
        turn.textContent = "";
        button.disabled = true;
    }
}
category.onchange = onCategorySelect;