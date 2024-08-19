// flat 
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]]

var flatArray = depthArray.reduce(function (e, v) {
    return e.concat(v)
}, [])

console.log(flatArray)

// lay ra cac khoa hoc dua vao 1 mang moi
var topics = [
    {
        topic: "Front-end",
        courses: [
            {
                id: 1,
                title: "HTML, CSS"
            },
            {
                id: 2,
                title: "Javascript"
            }
        ]
    },
    {
        topic: "Back-end",
        courses: [
            {
                id: 1,
                title: "PHP"
            },
            {
                id: 2,
                title: "NodeJS"
            }
        ]
    }
]

var newCourses = topics.reduce(function (course, topic) {
    return course.concat(topic.courses)
}, [])

console.log(newCourses)

var htmls = newCourses.map(function (course) {
    return `
        <div>
            <h2>${course.title}</h2>
            <p>ID: ${course.id}</p>
        </div>
    `
})

console.log(htmls.join(''))