
// innerHTML, outerHTML la 2 thuoc tinh cua DOM, dung de lay noi dung cua 1 element
// innerHTML: lay noi dung cua element, bao gom ca the con
// outerHTML: lay noi dung cua element, bao gom ca the hien tai 

// co the them ca element, atribute, text ... vao element bang innerHTML, outerHTML

var boxElement = document.querySelector('.box');

boxElement.innerHTML = '<h1 title="heading">Heading 1</h1>';

console.log(boxElement.innerHTML);

// innerHTML ghi de noi dung con cua element

boxElement.innerHTML = '<span>Test</span>';

// outerHTML ghi de ca element 

boxElement.outerHTML = '<span>Test</span>';

// neu muon them noi dung vao element, dung innerHTML
// neu muon thay the element, dung outerHTML

console.log(boxElement); // chi lay noi dung luu trong bo nho noi dung thuc k con nua 
console.log(boxElement.innerHTML);
console.log(boxElement.outerHTML);

// thuong su dung innerHTML de thay doi noi dung cua element