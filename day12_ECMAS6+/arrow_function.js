
// function logger(log) {
//     console.log(log);
// }

// const logger = function(log) {
//     console.log(log);
// }

// arrow function
const logger = log => console.log(log);  // co 1 tham so thi khong can () 
logger('Hello World!'); // Hello World!

const sum = (a, b) => a + b; // khong co {} thi return ngam, co {} thi phai return

// const sum1 = (a, b) => {a: a, b: b} // error, because {} is block scope, not object
const sum2 = (a, b) => ({a: a, b: b}); // ok, return object


const course = {
    name: 'Javascript',
    getName: function() {
        return this.name;  // this: object course 
    }
}

console.log(course.getName()); 

const course2 = {
    name: 'Javascript',
    getName: () => {
        return this.name; // this: window object
    }
}

console.log(course2.getName());  // undefined because this is window object 
// window object: global object in browser 

// khong dung arrow function cho method cua object
// boi vi arrow function khong co context (this) cua object
// this cua arrow function la this cua function chua arrow function do
// this cua function chua arrow function la window object

