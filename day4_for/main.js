/*
4. while - lap khi dk dung
5. do/while - lap it nhat 1 lan, sau do
lap khi dk dung 
*/
// 2. for/in = lap qua key cua doi tuong
var myInfor = {
    name: 'cc',
    age: 18,
    address: 'HN'
}

for (var key in myInfor) {
    console.log(key)
}
// 3. for/of - lap qua value cua doi tuong
var languages = ['php', 'js', 'java']

for (var kvalue of languages) {
    console.log(value)
}
console.log(Object.keys(myInfor)) // tra ve mang key
console.log(Object.values(myInfor))

var str = 'lakfjlks'
for (var value in str) {
    console.log(value)
}