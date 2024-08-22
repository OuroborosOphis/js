
// 1. Dinh nghia key: value cho object
// 2. Dinh nghia method cho object
// 3. Dinh nghia key cho object duoi dang bien

var name = 'Javascript';
var price = 1000;

var course = {
    name, // name: name
    price, // price: price
    getName() {
        return name;
    },
    getPrice() {
        return price;
    }
}

console.log(course.getName());

// 4. Dinh nghia key cho object duoi dang bien

var fieldName = 'name';
var fieldPrice = 'price';

var course2 = {
    [fieldName]: 'Javascript',
    [fieldPrice]: 1000
}

console.log(course2);