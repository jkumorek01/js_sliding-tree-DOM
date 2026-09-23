'use strict';

// write code here

const tree = document.querySelector('.tree');
// const types = tree.children;
// console.log(products);

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }
  
  const li = e.target.parentElement;
  const child = li.lastElementChild;


  if (child) {
    if (child.style.display === 'none') {
      child.style.display = '';
    } else {
      child.style.display = 'none';
    }
  }
});
