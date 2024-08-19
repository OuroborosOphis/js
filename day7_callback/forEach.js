Array.prototype.forEach2 = function (cb) {
    // for in se duyet qua ca method trong prototype 
    for (var i in this) {
        if (this.hasOwnProperty(i)) // de k in method
            cb(this[i], i, this)
    }
}

var courses = [
    'javascript',
    'php',
    'ruby'
]

courses.forEach2(function (course, index, array) {
    console.log(course, index, array)
})