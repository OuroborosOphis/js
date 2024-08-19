// -- xem do dai chuoi: length 
// -- string format
var a = 'cc'
var b = 'db'

console.log(`toi la: ${a} ${b}`)
// -- method
var str = 'tai sao chim lai bay'
// 1. length
console.log(str.length)
// 2. find index: 
console.log(str.indexOf('a'))
console.log(str.lastIndexOf('a'))
console.log(str.indexOf('a', 6))
console.log(str.search('a'))

// 3. cut string
console.log(str.slice(4, 6))
console.log(str.slice(-3, -1))

// 4. replace
console.log(str.replace('tai sao', 'why'))
console.log(str.replace(/tai/g, 'why')) // regex
// 5. upper case
console.log(str.toUpperCase)
// 6. lower case
// 7. trim: loai bo space o 2 dau
console.log(str.trim())
// 8. split: tach thanh array
var languages = 'python, js, php'
console.log(languages.split(', '))

// 9. get a character by index 
console.log(str.charAt(0))