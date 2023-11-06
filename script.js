const inputElem = document.querySelector('.todoInput');
const todoDivElem = document.querySelector('.js-todo-list');
const inputDueDate = document.querySelector('.js-due-date');

let todoList = [
    { todoName: 'foo', dueDate: '01/01/0101' },
    { todoName: 'bar', dueDate: '01/01/0101' },
    { todoName: 'baz', dueDate: '01/01/0101' }
];

populateList();

inputElem.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addToList();
    }
});

inputDueDate.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addToList();
    }
});

function addToList() {
    const todoName = inputElem.value;
    const dueDate = inputDueDate.value;
    const listArrayObj = { todoName, dueDate };
    todoName && todoList.push(listArrayObj);
    inputElem.value = '';
    inputDueDate.value = '';
    populateList();
};

function populateList() {
    let todoListHTML = ''
    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const { todoName } = todoObject;
        const { dueDate } = todoObject;
        const todoPara = `
            <div class="todo-name">${todoName}</div> 
            <div class="todo-date">${dueDate}</div>
            <button onclick="deleteItem(${i})" class="delete-button">Delete</button>`;
        todoListHTML += todoPara;
    };
    todoDivElem.innerHTML = todoListHTML;
};

function deleteItem(arrayIndex) {
    todoList.splice(arrayIndex, 1);
    populateList();
};