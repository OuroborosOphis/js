
// classList la mot mang chua cac class cua element

// add: them class vao element
// remove: xoa class cua element
// toggle: neu class ton tai thi xoa, neu khong ton tai thi them vao
// contains: kiem tra xem class co ton tai trong element hay khong


var boxElement = document.querySelector('.box');

console.log(boxElement.classList);

boxElement.classList.add('red', 'blue');

console.log(boxElement.classList.contains('red'));

setTimeout(() => {
    boxElement.classList.remove('red');
}, 2000); // xoa class red sau 2s

setInterval(() => {
    boxElement.classList.toggle('red');
}, 1000); // neu co class red thi xoa, neu khong co thi them vao sau 1s 1 lan 
// => tao hieu ung nhap nhay cho element
// => thay doi class cua element theo thoi gian
// => tao hieu ung chuyen dong cho element
// => tao hieu ung cho cac nut bam
// => tao hieu ung cho cac form
// => tao hieu ung cho cac menu
// => tao hieu ung cho cac slider
// => tao hieu ung cho cac modal
// => tao hieu ung cho cac tooltip
// => tao hieu ung cho cac dropdown
// => tao hieu ung cho cac tab
