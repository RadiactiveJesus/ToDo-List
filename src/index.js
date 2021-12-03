import './style.css';
import {ToDoList} from './todoList.js'

const item1 = new ToDoList('Study for Microverse')
const item2 = new ToDoList('Reading for College')
const item3 = new ToDoList('Clean the house')

const toDoTasks = [
  {
    description: 'Study for Microverse',
    completed: false,
    index: 0,
  },
  {
    description: 'Reading for College',
    completed: false,
    index: 1,
  },
  {
    description: 'Clean the house',
    completed: false,
    index: 2,
  },
];

function populateList() {
  const todoList = document.getElementById('item-list');

  ToDoList.list.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
    <input id="${item.index}" class="checkbox" type="checkbox" name="" value="">
    <span>${item.description}</span>
    `;
    todoList.appendChild(listItem);
  });
}

populateList();

const listCheckboxes = [...document.getElementsByClassName('checkbox')]
listCheckboxes.forEach((element) => {
  element.addEventListener('change', () => {
    const index = parseInt(element.id)
    ToDoList.list[index].update()
    element.nextElementSibling.classList.toggle('complete')
  })
})
