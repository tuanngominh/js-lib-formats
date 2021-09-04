const lib = require('@tuanngo/sample-commonjs-module-1');
const btn = document.getElementById('square-btn');
btn.addEventListener('click', () => {
    const text = document.getElementById('content');
    text.innerHTML = lib.square(4);
});
