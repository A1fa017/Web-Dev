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
        checked : false
    }

    toDoList.push(newTodo);
    displayMessages();
    localStorage.setItem('todo', JSON.stringify(toDoList))
});


function displayMessages() {

    let displayMessage = ``;

    toDoList.forEach(function(item, i){

        displayMessage += `
        <li>
            <input type="checkbox" class="check" id=item_${i} ${item.checked ? 'checked':''}>
            <span class="close">x</span>
            <label class="message" for=item_${i}>${item.toDo}</label> 
        </li>
        `;
        toDo.innerHTML = displayMessage;
    }
    );
}

toDo.addEventListener('change', function(event){

    let idInput = event.target.getAttribute('id');
    let valueLabel = toDo.querySelector('[for='+idInput+']').innerHTML;

    toDoList.forEach(function(item) {

        if(item.toDo === valueLabel) {
            item.checked = !item.checked;
            localStorage.setItem('todo', JSON.stringify(toDoList));
        }

    });

})
