'use strict';

// write code here

const tree = document.querySelector('.tree');
// const types = tree.children;
// console.log(products);

tree.addEventListener('click', (e) => {
  const li = e.target;
  const child = li.firstElementChild;

  if (child) {
    if (child.style.display === 'none') {
      child.style.display = '';
    } else {
      child.style.display = 'none';
    }
  }
});
