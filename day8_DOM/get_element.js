
// get qua: ID, class, tag, CSS selector, HTML collection

var headingNode = document.getElementById('heading')
console.log(headingNode)

var headingNodes = document.getElementsByClassName('heading')
console.log(headingNodes)

var tagNode = document.getElementsByTagName('h1')
console.log(tagNode)

var headingNode = document.querySelector('.heading-2')
console.log(headingNode)

//querySelectorALl

console.log(document.forms['form-1'])

// lay ra cai dau tien
var headingNode1 = document.querySelector('.box .heading-2:first-child')
console.log(headingNode1)