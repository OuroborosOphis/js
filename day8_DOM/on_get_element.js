
// 1. getElementByID
// 2. getElementsByClassName
// 3. getElementsByTagName
// 4. querySelector
// 5. querySelectorAll

// 1 va 4 tra ve 1 phan tu (tra lai truc tiep element)
// element khac voi html collection
// html collection chua cac element 

var headings = document.getElementsByTagName('h1')

console.log(headings[0])

for (var i = 0; i < headings.length; i++) {
    console.log(headings[i])
}

// 6. HTML collection : the a, img, ....
console.log(document.forms)
console.log(document.forms['form-1'])
console.log(document.forms[1])
// 7. document.write : thuc te it khi su dung
// dat file js o dau thi in ra o day 
document.write('hello')

