// object prototype: nguyen lieu 
// giup them thuoc tinh ben ngoai ham tao 
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function () {
        return `${this.firstName} ${this.lastName}`
    }
}

User.prototype.className = 'F8';
User.prototype.getClassName = function () {
    return this.className
}

var user = new User('cc', 'db', 'avatar1')
var user2 = new User('cc2', 'db2', 'avatar2')

console.log(user.className)
console.log(user2.getClassName())
