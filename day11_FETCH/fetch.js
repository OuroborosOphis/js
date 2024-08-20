
// fetch: goi API tu server va nhan du lieu tra ve tu server 
// fetch: tra ve promise 
// font-end: fetch -> server: API -> server: tra ve du lieu -> font-end: nhan du lieu

// API (URL): Application Programming Interface
// API: la mot cong de giao tiep giua cac phan mem khac nhau

// Backend -> API (URL) -> Fetch -> JSON/XML 
// -> JSON.parse() -> Javascript Object -> Render ra giao dien voi HTML

var postApi = 'https://jsonplaceholder.typicode.com/posts'

// stream: luong du lieu
fetch(postApi)
    .then(function(response){
        return response.json();
        // JSON.parse: chuyen tu JSON -> Object Javascript 
    })
    .then(function(posts){
        var htmls = posts.map(function(post){
            return `<li>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </li>`;
        });
        var html = htmls.join('');
        document.getElementById('post-block').innerHTML = html;
    })
    .catch(function(err){
        console.log('Loi: ', err);
    });