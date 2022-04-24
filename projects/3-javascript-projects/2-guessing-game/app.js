let numberToGuess = Math.ceil(Math.random() * 100);
console.log(numberToGuess)

let turns = document.getElementById('turns');
let message = document.getElementById('message')
let category = document.getElementById('select-category');

let button = document.getElementById('check-button')
button.disabled = true;

let onCategorySelect = () => {
    
    let categoryVal = category.value;
    // console.log(typeof categoryVal)

    button.disabled = false;


    if(categoryVal === "easy"){
        turns.textContent = 7;

    } else if(categoryVal == "medium"){
        turns.textContent = 5;

    } else if( categoryVal === "hard"){
        turns.textContent = 3;

    } else {
        turns.textContent = "";
        button.disabled = true;
    }
}
category.onchange = onCategorySelect;


let showMessage = (value) => {
    let enteredNumber = value;

    if(enteredNumber == numberToGuess){
        message.innerHTML = "You are correct !!! you win";
        message.style.color = 'green';

    } else if( enteredNumber > numberToGuess){
        message.innerHTML = "wrong..!!! you are ahead, please comes down";
        message.style.color = 'red';

    } else if(enteredNumber < numberToGuess){
        message.innerHTML = "wrong..!!! you are below, please goes up";
        message.style.color = 'red';

    } else {
        message.innerHTML = "You entered invalid number";
        message.style.color = 'gray';
    }
}


let decrementTurn = () => {
    turns.textContent--;

    if(turns.textContent == 0){
        message.innerHTML = "No turns left..!! <span class='lost' style='color:red'>Your Lost</span>";
        message.style.color = '#F7B217';
        button.disabled = true;
    }

    
}

button.onclick = function () {
    let inputNumber = document.getElementById('input').value;

    showMessage(inputNumber)
    decrementTurn()
    document.getElementById('input').value ='';
}
