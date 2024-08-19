courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 500
    },
    {
        id: 6,
        name: 'Ruby',
        coin: 10
    },
    {
        id: 7,
        name: 'Ruby',
        coin: 12
    },
]

// forEach(): duyet qua tung phan tu 
courses.forEach(function (course, index) {
    console.log(index, course)
})

// every(): ktra tat ca ptu tm dk gi do
var isFree = courses.every(function (course) {
    return course.coin === 0;
})

console.log(isFree)

// some(): 1 ptu tm dk se tra ve true
var isFree = courses.some(function (course) {
    return course.coin === 0;
})

console.log(isFree)

// find(): tim 1 ptu
var course = courses.find(function (course) {
    return course.name === 'Ruby';
})

console.log(course)

// filter(): tim tat 
var course = courses.filter(function (course) {
    return course.name === 'Ruby';
})

console.log(course)

// map()
function courseHandler(course, index, originArray) {
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`
    }
}

var newCourses = courses.map(courseHandler);
console.log(newCourses)