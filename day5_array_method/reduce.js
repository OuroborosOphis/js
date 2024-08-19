// reduce(): khi muon nhan ve 1 gia tri ! 
courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 100
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 200
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 220
    },
    {
        id: 4,
        name: 'PHP',
        coin: 200
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 480
    },
]

// 1. de hieu: for
// 2. ngan gon: method
// 3. hieu nang: for nhung k nhieu 
var i = 0
function coinHandler(accumulator, currentValue, currentIndex, originArray) {
    i++
    var total = accumulator + currentValue.coin
    console.table({
        'Luot chay: ': i,
        'Bien tich tru: ': accumulator,
        'Gia khoa hoc: ': currentValue.coin,
        'Tich tru duoc: ': total
    })
    return total
}

var totalCoin = courses.reduce(coinHandler, 0)
console.log(totalCoin)

// cach ngan hon
// var totalCoin = courses.reduce((a, b) =>
//     a + b.coin, 0
// )