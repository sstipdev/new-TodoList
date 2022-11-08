const todoForm = document.querySelector('.Todo-form');
const todoInput = todoForm.querySelector('input');
const todoBtn = document.querySelector('.Todo-submit-btn');
const todoCount = document.querySelector('.todoCount');
const ul = document.querySelector('.Todo-list ul');

const STORAGE_NAME = 'TodoList';
const toDoItem = localStorage.getItem(STORAGE_NAME);

let todoBox = [];

const saveTodo = () =>
  localStorage.setItem(STORAGE_NAME, JSON.stringify(todoBox));

const removeTodos = (e) => {
  const li = e.target.parentElement;
  li.remove();
  todoBox = todoBox.filter((data) => data.id !== parseInt(li.id));
  saveTodo();
};

const handleTodo = (data) => {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const deleteBtn = document.createElement('span');
  li.id = data.id;
  deleteBtn.id = 'delete';
  deleteBtn.innerText = '❌';
  span.innerText = data.text;
  deleteBtn.addEventListener('click', removeTodos);
  li.appendChild(deleteBtn);
  li.appendChild(span);
  ul.appendChild(li);
};

const handleFormSubmit = (e) => {
  e.preventDefault();
  const todoValue = todoInput.value;
  if (todoValue === '') {
    alert('공백 금지');
    return;
  }
  todoInput.value = '';
  const todoObj = {
    text: todoValue,
    id: Date.now(),
  };
  todoBox.push(todoObj);
  handleTodo(todoObj);
  saveTodo();
};

const handleBtn = (e) => {
  handleFormSubmit(e);
};

if (toDoItem) {
  const currentValue = JSON.parse(toDoItem);
  todoBox = currentValue;
  currentValue.forEach(handleTodo);
}

todoForm.addEventListener('submit', handleFormSubmit);
todoBtn.addEventListener('click', handleBtn);
