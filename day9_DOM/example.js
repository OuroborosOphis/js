
// DOM events

// 1. input / select 
// 2. key up / key down

var inputValue;

var inputElement = document.querySelector('input[type="text"]');

// inputElement.onchange = function(e) {  // khi thay doi gia tri cua input thi event nay se duoc kich hoat
//     console.log(e.target.value);         // con tro chuot ra ngoai input thi event nay se duoc kich hoat
// }

// inputElement.oninput = function(e) {   // khi nhap vao input thi event nay se duoc kich hoat
//     console.log(e.target.value);        // luu y: event nay se duoc kich hoat ngay khi nhap vao input
//     inputValue = e.target.value;
// }


var checkboxElement = document.querySelector('input[type="checkbox"]');

checkboxElement.onchange = function(e) {
    console.log(e.target.checked);
}

var selectElement = document.querySelector('select');

selectElement.onchange = function(e) {
    console.log(e.target.value);
}


// keyup event: kich hoat khi nha phim ra 

inputElement.onkeyup = function(e) {
    console.log(e.which);  // tra ve gia tri cua phim duoc an

    switch(e.which) {
        case 13: 
            console.log('Enter key');
            break;
        case 27:
            console.log('Esc key');
            break;
        default:
            console.log('Other key');
    }
}

// keydown event: kich hoat khi an phim xuong

document.onkeydown = function(e) {
    console.log(e.key);  // tra ve gia tri cua phim duoc an

    switch(e.key) {
        case "Enter": 
            console.log('Enter key');
            break;
        case "Escape":
            console.log('Exit');
            break;
        default:
            console.log('Other key');
    }
}

// onkeypress event: kich hoat khi an giu phim