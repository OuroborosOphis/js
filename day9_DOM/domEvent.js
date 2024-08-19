
// 1. attribute event: ghi vao the html element 
// 2. assign event handler using element.attribute: 
// gan su kien cho element bang cach gan vao attribute cua element 

// onclick event kich hoat khi click vao element
// ondblclick event kich hoat khi double click vao element
// onmousedown event kich hoat khi click chuot vao element
// onmousemove event kich hoat khi chuot di chuyen tren element
// onmouseout event kich hoat khi chuot roi khoi element
// onmouseover event kich hoat khi chuot hover vao element
// onmouseup event kich hoat khi chuot nha chuot ra khoi element

var h2 = document.querySelector('h2');

// assign event 
h2.onclick = function(e) {
    console.log(e.target);
}