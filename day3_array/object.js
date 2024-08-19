var emailKey = 'email'

var myInfo = {
    name: 'ouroboros',
    age: 18,
    address: 'VN',
    [emailKey]: 'lol.gmail',
    getName: function () {
        return this.name
    }
}

// them ptu
myInfo.email = 'lol.gmail'
// myInfo['my-email'] = 'lol.gmail' 
// lay ra
console.log(myInfo.name)
console.log(myInfo['address'])

// xoa
delete myInfo.age

console.log(myInfo.getName())

// function --> phuong thuc / method
// others --> thuoc tinh / property 