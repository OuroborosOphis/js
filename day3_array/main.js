var languages = [
    'Javascript',
    'PHP',
    'Ruby',
    'Dart',
    null,
    undefined,
    function () {

    },
    {},
    123
]
// kiem tra xem co phai array k 
console.log(Array.isArray(languages))

// array method
/*
1. toString
2. join
3. pop: xoa phan tu cuoi mang va tra ve no  
4. push: them 1 hoac nhieu phan tu vao cuoi 
va tra ve do dai mang sau khi them 
5. shift: xoa phan tu dau mang va tra ve no 
6. unshift: them 1 hoac nhieu phan tu vao dau 
va tra ve do dai moi cua mang 
7. splice: xoa, chen 
languages.splice(1, 2) tinh tu phan tu 1 xoa 2 ptu
languages.splice(1, 0, 'Dart')
chen dart vao vi tri 1  
8. concat: noi 
9. slice: cat ptu slice(start, end)
*/