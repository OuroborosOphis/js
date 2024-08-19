
// A --> loop -> CPU
// A --> de quy -> RAM 

// 1. xac dinh diem dung
// 2. logic handle => tao ra diem dung

// function countDown(n) {
//     if (n >= 0) {
//         console.log(n)
//         return countDown(n - 1)
//     }
//     return n
// }

// countDown(10)

function loop(start, end, cb) {
    if (start <= end) {
        cb(start)
        return loop(start + 1, end, cb)
    }
}

// var array = ['Javascript', 'PHP', 'Ruby']

// loop(0, array.length - 1, function (index) {
//     console.log(array[index])
// })

function giaiThua(n) {
    if (n <= 1) return 1
    return n * giaiThua(n - 1)
}

console.log(giaiThua(10))