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

addButton.addEventListener("click", () => { addToList() });
inputElem.addEventListener("keypress", event => { event.key === "Enter" && addToList() });
inputDueDate.addEventListener("keypress", event => { event.key === "Enter" && addToList() });

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
    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const { todoName } = todoObject;
        const { dueDate } = todoObject;
        const todoHTMLElem = `
            <div class="todo-name">${todoName}</div> 
            <div class="todo-date">${dueDate}</div>
            <button onclick="deleteItem(${i})" class="delete-button">Delete</button>`;
        todoListHTML += todoHTMLElem;
    };
    todoDivElem.innerHTML = todoListHTML;
    // why no declare needed?
    deleteButtons = document.querySelectorAll('.delete-button');
}

const deleteItem = arrayIndex => { todoList.splice(arrayIndex, 1); populateList(); }

console.log(deleteButtons);