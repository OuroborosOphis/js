
// destructuring: phan ra su dung voi array va object

// 1. Array destructuring
var array = ['Javascript', 'PHP', 'Ruby'];

// var a = array[0];
// var b = array[1];
// var c = array[2];

var [a, b, c] = array; // destructuring
// chi lay a, c
// var [a, , c] = array; // destructuring

console.log(a, b, c);

// rest parameter: lay phan con lai
// lay a va con lai la 1 array
var [a, ...rest] = array;
console.log(a, rest); // Javascript [ 'PHP', 'Ruby' ]


// 2. Object destructuring
var course = {
    name: 'Javascript',
    price: 1000,
    description: 'Course description',
    children: {
        name: 'ReactJS'
    }
};

var {name, price, description} = course;
console.log(name, price, description);

var {name, ...rest} = course;
console.log(name, rest); // Javascript { price: 1000, description: 'Course description' }

// co the dung rest de xoa 1 key trong object
var {name, ...newObject} = course;
console.log(newObject); // { price: 1000, description: 'Course description' }

// lay children.name 
var {name, children: {name}} = course;
console.log(name); // ReactJS
// name bi ghi de boi name cua children object 
// neu muon lay name cua course thi phai doi ten bien
var {name: parentName, children: {name}} = course;
console.log(parentName, name); // Javascript ReactJS

// 3. Default value
var {name, price, description, rating = 5} = course;
console.log(rating); // 5

// 4. Function destructuring
function logger(...params){ // vi k co tham so nao khac nen phan con lai la toan bo array
    console.log(params);
}

logger(1, 2, 3, 4, 5); // [ 1, 2, 3, 4, 5 ]

function logger2([a, b, ...rest]){
    console.log(a, b, rest);
}

logger2([1, 2, 3, 4, 5]); // 1 2 [ 3, 4, 5 ]

function logger3({name, price, ...rest}){
    console.log(name, price, rest);
}

logger3({name: 'Javascript', price: 1000, description: 'Course description'}); // Javascript 1000 { description: 'Course description' }