import _ from 'lodash';
import './style.css';

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

  toDoTasks.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
    <input class="checkbox" type="checkbox" name="" value="">
    <span>${item.description}</span>
    `;
    todoList.appendChild(listItem);
  });
}
  
populateList();

