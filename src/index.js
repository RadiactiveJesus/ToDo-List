import './style.css';
import ToDoList from './todoList.js';

function populateList() {
  const todoList = document.getElementById('item-list');

  ToDoList.list.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
    <input id="${item.index}" class="checkbox" type="checkbox">
    <span>${item.description}</span>
    `;
    todoList.appendChild(listItem);
    if (item.complete) {
      listItem.querySelector('input').checked = true;
      listItem.querySelector('span').classList = 'complete';
    }
  });
}

const list = JSON.parse(localStorage.getItem('todoList'));
if (list) {
  list.forEach((item) => new ToDoList(item.description, item.complete));
} else {
  ToDoList('Study for Microverse');
  ToDoList('Reading for College');
  ToDoList('Clean the house');
}

populateList();

const listCheckboxes = [...document.getElementsByClassName('checkbox')];
listCheckboxes.forEach((element) => {
  element.addEventListener('change', () => {
    const index = parseInt(element.id, 10);
    ToDoList.list[index].update();
    element.nextElementSibling.classList.toggle('complete');
    localStorage.setItem('todoList', JSON.stringify(ToDoList.list));
  });
});
