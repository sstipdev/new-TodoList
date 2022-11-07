const input = document.querySelector('.Todo-input-box input');
const todoBtn = document.querySelector('.Todo-submit-btn');
const todoForm = document.querySelector('.Todo-form');
const todoCount = document.querySelector('.todoCount');

const STORAGE_NAME = 'TodoList';

const toDoItem = localStorage.getItem(STORAGE_NAME);

let todoBox = [];

if (toDoItem) {
  const todoList = document.querySelector('.Todo-list');
  const li = document.createElement('li');
  const count = document.querySelectorAll('li');
  const value = localStorage.getItem(STORAGE_NAME);
  li.innerHTML = `${JSON.parse(value)}`;
  todoList.appendChild(li);
  todoCount.innerHTML = `( ${count.length + 1} )`;
}

const handleFormSubmit = (e) => {
  e.preventDefault();
  if (input.value === '') {
    alert('할 업무를 기입 해주셔야 해요 !');
    return;
  }
  const todoList = document.querySelector('.Todo-list');
  const li = document.createElement('li');
  const count = document.querySelectorAll('li');
  const value = input.value;
  let arrayValue = [];
  if (input.value.length > 18) {
    arrayValue = [value];
    li.innerHTML = `${arrayValue.slice(0, 15)}...`;
    console.log(arrayValue);
    return;
  }
  li.innerHTML = value;
  todoList.appendChild(li);
  todoBox.push(value);
  localStorage.setItem(STORAGE_NAME, JSON.stringify(todoBox));
  todoCount.innerHTML = `( ${count.length + 1} )`;
  input.value = '';
};

const handleBtn = () => {
  if (input.value === '') {
    alert('할 업무를 기입 해주셔야 해요 !');
    return;
  }
  const todoList = document.querySelector('.Todo-list');
  const li = document.createElement('li');
  const count = document.querySelectorAll('li');
  const value = input.value;
  li.innerHTML = value;
  todoList.appendChild(li);
  localStorage.setItem(STORAGE_NAME, value);
  todoCount.innerHTML = `( ${count.length + 1} )`;
  input.value = '';
};

todoForm.addEventListener('submit', handleFormSubmit);
todoBtn.addEventListener('click', handleBtn);
