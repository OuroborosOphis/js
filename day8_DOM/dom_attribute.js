
var headingElement = document.querySelector('h1');

// setter gan truc tiep bang toan tu gan

headingElement.title = 'Heading';
headingElement.className = 'heading';

// su dung method setAttribute, gan k hop le van duoc gan

headingElement.setAttribute('id', 'heading');

// get value cua attribute

console.log(headingElement.getAttribute('id'));

// 2 cach: truc tiep qua thuoc tinh va su dung method getAttribute de lay value cua attribute

headingElement.setAttribute('style', 'color: red; font-size: 30px;');