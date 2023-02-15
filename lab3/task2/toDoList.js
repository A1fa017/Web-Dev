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
            <button class="close" id='item_${i}'>x</button>
            <label class="message" for=item_${i}>${item.toDo}</label> 
        </li>
        `;
    }
    );
    toDo.innerHTML = displayMessage;
}

toDo.addEventListener('click', function(event){

    let target = event.target;
    let idInput = target.getAttribute('id');
    let valueLabel = toDo.querySelector('[for='+idInput+']').innerHTML;

    toDoList.forEach(function(item, i) {

        if(item.toDo === valueLabel) {
            if(target.tagName === 'BUTTON') {
                toDoList.splice(i, 1);
            }
            else {
                item.checked = !item.checked;
            }
            localStorage.setItem('todo', JSON.stringify(toDoList));
        }
    });
    displayMessages();

})
