'use strict';

// write code here

const tree = document.querySelector('.tree');
// const types = tree.children;
// console.log(products);

const listItems = tree.querySelectorAll('li');

for (const li of listItems) {
  const span = document.createElement('span');

  span.textContent = li.firstChild.textContent.trim();

  li.firstChild.replaceWith(span);
}

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const li = e.target.parentElement;
  const nestedUl = li.querySelector('ul');

  if (!nestedUl) {
    return;
  }

  if (nestedUl.style.display === 'none') {
    nestedUl.style.display = '';
  } else {
    nestedUl.style.display = 'none';
  }
});