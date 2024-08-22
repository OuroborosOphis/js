
// spread operator: toan tu giup truyen tat ca phan tu cua array hoac object vao 1 array hoac object khac

var array1 = ['Javascript', 'PHP', 'Ruby'];

var array2 = ['ReactJS', 'AngularJS'];

var array3 = [...array1, ...array2]; // spread operator

console.log(array3); // [ 'Javascript', 'PHP', 'Ruby', 'ReactJS', 'AngularJS' ]

var object1 = {
    name: 'Javascript'
};

var object2 = {
    price: 1000
};

var object3 = {
    ...object1,
    ...object2
};

console.log(object3); // { name: 'Javascript', price: 1000 }


var defaultConfig = {
    api: 'https://domain-trang-khoa-hoc.com',
    apiVersion: 'v1',
    timeout: 1000
    //
    // ...
};

var exerciseConfig = {
    ...defaultConfig,
    api: 'https://domain-trang-tap-luyen.com',
    // ...defaultConfig,
};

console.log(exerciseConfig); // { api: 'https://domain-trang-tap-luyen.com', apiVersion: 'v1', timeout: 1000 }


// su dung spread operator de copy array va object
var array = ['Javascript', 'PHP', 'Ruby'];
var arrayCopy = [...array]; // copy array

// su dung spread cho function 

function logger(a, b, c){
    console.log(a, b, c);
}

var array = [1, 2, 3];
logger(...array); // 1 2 3

// su dung rest parameter 
function logger2(...rest){
    for (var i = 0; i < rest.length; i++){
        console.log(rest[i]);
    }
}

// so sanh spread operator va rest parameter
// spread: truyen vao function 
// rest: lay phan con lai cua array hoac object 




