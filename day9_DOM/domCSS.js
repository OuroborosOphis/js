
var boxElement = document.querySelector('.box');

console.log(boxElement.style);

// boxElement.style.width = '100px';
// boxElement.style.height = '200px';
// boxElement.style.backgroundColor = 'green';

Object.assign(boxElement.style, {
    width: '100px',
    height: '200px',
    backgroundColor: 'green',
    
});

console.log(boxElement.style.width);  // lay ra gia tri width cua boxElement