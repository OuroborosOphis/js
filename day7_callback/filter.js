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
Array.prototype.filter2 = function (cb) {
    var dict = []
    for (var i in this) {
        if (this.hasOwnProperty(i))
            if (cb(this[i])) {
                dict.push(this[i])
            }
    }
    return dict
}
var dmm = courses.filter2(function (course) {
    return course.coin > 100
})
console.log(dmm)