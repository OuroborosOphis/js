
// HTML DOM

// 1. Element: ID, class, tag
// CSS selector, HTML collection

// 2. Attribute
// 3. Text

/*
lay ra the li cua box 1 
var listItemNodes = document.querySelectorAll('.box-1 li')
console.log(listItemNodes)
*/

var boxNode = document.querySelector('.box-1')

// cong viec 1: su dung boxNode 
// ... 

// cv 2: sd cac li element la con cua box 1 
console.log(boxNode.querySelectorAll('li'))
console.log(boxNode.getElementsByTagName('p'))