// callback

// 1. la ham
// 2. truyen qua doi so
// 3. dc goi lai (trong ham nhan doi so) 

function myFunction(param) {
    if (typeof param === 'function')
        param('hoc lap trinh')
}

function myCallback(value) {
    console.log('Value: ', value)
}

myFunction(myCallback)

var courses = [
    'javascript',
    'php',
    'ruby'
]

courses.map(function () {

})