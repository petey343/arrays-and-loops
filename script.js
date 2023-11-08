const inputElem = document.querySelector('.todoInput');
const todoDivElem = document.querySelector('.js-todo-list');
const inputDueDate = document.querySelector('.js-due-date');
const addButton = document.querySelector('.add-button');

let todoList = [
    { todoName: 'foo', dueDate: '01/01/0101' },
    { todoName: 'bar', dueDate: '01/01/0101' },
    { todoName: 'baz', dueDate: '01/01/0101' }
];

populateList();

addButton.addEventListener("click", addToList);
inputElem.addEventListener("keypress", e => e.key === "Enter" && addToList());
inputDueDate.addEventListener("keypress", e => e.key === "Enter" && addToList());

function addToList() {
    const todoName = inputElem.value;
    const dueDate = inputDueDate.value;
    const listArrayObj = { todoName, dueDate };
    // todoName && 
    todoList.push(listArrayObj);
    inputElem.value = '';
    inputDueDate.value = '';
    populateList();
}

function populateList() {
    let todoListHTML = ''
    todoList.forEach((listItem) => {
        todoListHTML += `
            <div class="todo-name">${listItem.todoName}</div> 
            <div class="todo-date">${listItem.dueDate}</div>
            <button class="delete-button">Delete</button>`
    });
    todoDivElem.innerHTML = todoListHTML;

    document.querySelectorAll('.delete-button')
        .forEach((deleteButton, index) => { deleteButton.addEventListener('click', () => { todoList.splice(index, 1); populateList(); }) })
}