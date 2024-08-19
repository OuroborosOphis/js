
// json: la 1 dinh dang du lieu (chuoi)
// json: javascript object notation
// 3. JSON: number, boolean, string, array, object, null

// 1. JSON.parse(): chuyen tu json -> object (js types)
// 2. JSON.stringify(): chuyen tu object (js types) -> json (string)

var json = '{"name": "Teo", "age": 10}'; //object 

var obj = JSON.parse(json);

console.log(typeof JSON.stringify(obj)); //string