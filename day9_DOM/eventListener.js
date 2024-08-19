
// DOM events / event listener

// DOM events: su dung khi muon lang nghe su kien va khong muon go bo no 
// event listener: su dung khi muon lang nghe su kien va co the huy bo lang nghe

// 1. xu ly nhieu viec khi event xay ra 
// 2. lang nghe / huy bo lang nghe 

var btn = document.getElementById('btn');


// vi du: khi click vao button thi thuc hien 3 viec
// viec 1 la gui comment len server
// viec 2 la hien thi comment
// viec 3 la xoa comment tren o input

setTimeout(function() {  // delay 3s
    btn.onclick = function(e) {
        // viec 1
        console.log('Viec 1');

        // viec 2
        console.log('Viec 2');

        // viec 3
        alert('Viec 3');
    }
}, 3000);

// huy bo lang nghe sau 5s
setTimeout(function() {
    btn.onclick = null;
}, 5000);


// cach 2: su dung addEventListener

function viec1() {
    console.log('Viec 1');
}

btn.addEventListener('click', viec1);

btn.addEventListener('click', function(e) { 
    console.log('Click 2');
});

btn.addEventListener('click', function(e) { 
    console.log('Click 3');
});

// huy bo lang nghe
setTimeout(function() {
    btn.removeEventListener('click', viec1);
}, 3000);

