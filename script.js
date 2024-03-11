'use strict';

const draggableElement = document.querySelectorAll('#draggable');
const droppableElement = document.querySelector('#droppable');

draggableElement.forEach((drag) => {
  drag.addEventListener('dragstart', function (e) {
    e.dataTransfer.setData('text', e.target.textContent || e.target.alt);
  });
});

droppableElement.addEventListener('dragover', function (e) {
  e.preventDefault();
});

droppableElement.addEventListener('drop', function (e) {
  e.preventDefault();
  let data = e.dataTransfer.getData('text');
  const files = e.dataTransfer.files;

  if (files.length > 0) {
    Array.from(files).forEach((file) => {
      renderList(file.name);
    });
  }

  if (data) {
    renderList(data);
  }
});

droppableElement.addEventListener('click', function () {
  console.log('clicked');
});

function renderList(content) {
  const fileListContainer = document.querySelector('.file__list');
  const html = `<li class="file">${content}</li>`;
  fileListContainer.insertAdjacentHTML('beforeend', html);
}
