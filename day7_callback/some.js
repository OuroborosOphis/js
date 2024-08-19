courses = [
    {
        isFinish: false,
        name: 'Javascript',
        coin: 250
    },
    {
        isFinish: true,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        isFinish: false,
        name: 'Ruby',
        coin: 0
    },
    {
        isFinish: true,
        name: 'PHP',
        coin: 400
    },
    {
        isFinish: false,
        name: 'ReactJS',
        coin: 500
    },
    {
        isFinish: true,
        name: 'Ruby',
        coin: 10
    },
    {
        isFinish: false,
        name: 'Ruby',
        coin: 12
    },
]
// ktra xem da pass min 1 khoa chua 
Array.prototype.some2 = function (cb) {
    for (var i in this) {
        if (this.hasOwnProperty(i))
            if (cb(this[i])) {
                return true
            }
    }
    return false
}
var result = courses.some2(function (course) {
    return course.isFinish
})

console.log(result)