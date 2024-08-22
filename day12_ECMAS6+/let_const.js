
// 1. var / let, const: scope, hoisting, and temporal dead zone
// Replace all instances of var with let or const where appropriate. 
// The variables sensorData, ctx, sensorChart, currentPage, and rowsPerPage should be declared using let or const.

// 2. const / var , let: Assignment (gan gia tri cho bien)

// code block: if else, loop, {}, ...

{
    // var course = 'Javascript';
    var course = 'Javascript'; // let: block scope, var: function scope (hoisting)
    {
        {
            const course = 'Python'; // const: block scope, cannot re-assign
            console.log(course); 
        }
    }
}

console.log(course); 

// var ho tro hoisting, let, const khong ho tro hoisting
// hoisting: bien duoc nhac len dau scope

a = 1;
var a; // hoisting

// let a; // error because a is not defined
// const a; // error


console.log(a); 

// 3. const: immutable (khong the thay doi gia tri)
// but object, array: thay doi duoc
// example:
const a = {
    name: 'Javascript'
};

a.name = 'Python'; // ok, because object is reference type (reference to memory address) 
console.log(a);


// code thuan: var
// babel: const, let
// khi dinh nghia bien va khong thay doi gia tri: const
// khi thay doi gia tri: let