// object constructor: ban thiet ke
// String, number, array, date... la obj con..
// viet hoa chu cai dau: quy uoc chung 
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function () {
        return `${this.firstName} ${this.lastName}`
    }
}

var author = new User('Son', 'db', 'avatar');
var user = new User('vu', 'db', 'avatar')

// them thuoc tinh rieng cho tung doi tuong 
author.title = 'xam lon tai F8'
user.comment = 'xam lon vl'

console.log(author.getName())
console.log(user.getName())