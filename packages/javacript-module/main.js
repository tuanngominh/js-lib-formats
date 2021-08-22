import { square, squareRoot } from './number.js';
import list from './un-ordered-list.js';
const items = [
  'Square 4:' + square(4),
  'Square root 4:' + squareRoot(4)
]
list(items, 'content');

const btn = document.getElementById('ordered-list');
btn.addEventListener('click', () => {
  import('./ordered-list.js').then(Module => {
    Module.showList(items, 'content');
  })
});