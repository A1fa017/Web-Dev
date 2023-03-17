let addButton = document.querySelector('.add'), 
addMessage = document.querySelector('.myInput'),
toDo = document.querySelector('.toDo ')

let toDoList = [];

if(localStorage.getItem('todo')) {
    toDoList = JSON.parse(localStorage.getItem('todo'));
    displayMessages();
}

addButton.addEventListener('click', function(event) {
    if(!addMessage.value) return;

    let newTodo = {
        toDo : addMessage.value,
        checked : false,
        class : 'message'
    }

    toDoList.push(newTodo);
    displayMessages();
    localStorage.setItem('todo', JSON.stringify(toDoList))
});


function displayMessages() {

    let displayMessage = ``;
    toDoList.forEach(function(item, i){
        displayMessage += `
        <li id='${i}'>
            <input type="checkbox" class="check" id='${i}' ${item.checked ? 'checked':''}>
            <button class="close" id='item_${i}'>x</button>
            <label class="${item.class}" for=item_${i}>${item.toDo}</label> 
        </li>
        `;
    }
    );
    toDo.innerHTML = displayMessage;
}

toDo.addEventListener('click', function(event){

    let target = event.target;
    console.log(target)
    let idInput = target.getAttribute('id');

    if(target.tagName === 'INPUT') {
        toDoList[idInput].checked = !toDoList[idInput].checked;
        if(toDoList[idInput].checked) toDoList[idInput].class = 'checked';
        else toDoList[idInput].class = 'message';
    }else if(target.tagName === 'BUTTON'){
        // console.log(toDoList[idInput].addMessage)
        toDoList.splice(idInput, 1);
    }

    localStorage.setItem('todo', JSON.stringify(toDoList));
    displayMessages();
})