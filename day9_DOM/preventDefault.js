
// 1. preventDefault method: ngan chan hanh vi mac dinh cua trinh duyet
// 2. stopPropagation method: ngan chan su kien lan truyen len cac the cha cua the hien tai

// chi chuyen trang khi a co chu f8.edu.vn

var aElements = document.links;

console.log(aElements);

for(var i = 0; i < aElements.length; i++) {
    aElements[i].onclick = function(e) {
        if(!e.target.href.startsWith('https://f8.edu.vn')) {
            e.preventDefault();
        }
    }
}

var ulElement = document.querySelector('ul');

ulElement.onmousedown = function(e) {  // kich hoat khi nhan chuot vao element
    console.log('mousedown');
    e.preventDefault();
}

ulElement.onclick = function(e) {
    console.log(e.target);
}


// ngan viec click button console hien ra ca click me va div

document.querySelector('div').onclick = function(e) {
    console.log('DIV');
}

document.querySelector('button').onclick = function(e) {
    console.log('Click me');
    e.stopPropagation();    // ngan chan su kien lan truyen len cac the cha cua the hien tai
}