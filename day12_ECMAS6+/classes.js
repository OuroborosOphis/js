
// function Course(name, price) {
//     this.name = name;
//     this.price = price;
// }

class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }
    
}

const course = new Course('Javascript', 1000);
const course2 = new Course('Python', 2000);

console.log(course);