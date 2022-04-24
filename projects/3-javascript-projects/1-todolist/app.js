let creatElement = (inputVal) => {
    let todoList = document.getElementById("todoList")

    let div = document.createElement('div');
    div.setAttribute("id", "todoItem")

    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox')
    checkBox.setAttribute('id', "checkbox")

    let li = document.createElement('li');
    li.innerHTML = inputVal;

    div.appendChild(checkBox);
    div.appendChild(li);
    todoList.appendChild(div)


}


document.getElementById('add').onclick = function () { 
    let inputVal = document.getElementById("input").value;

    creatElement(inputVal)
}