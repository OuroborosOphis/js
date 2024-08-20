
// JSON server: tao ra mot server gia lap de test API
// npm install -g json-server
// json-server --watch db.json 

// npm init

// them vao package.json phan scripts: start: "json-server --watch db.json" de chay lenh npm start 

// API server (fake) con goi la mock server

var courseApi = 'http://localhost:3000/courses';

fetch(courseApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(courses) {
        console.log(courses);
    });