
var listCoursesBlock = document.getElementById('list-courses');

var courseApi = 'http://localhost:3000/courses';

function start() {
    getCourses(renderCourses);

    handleCreateForm();
}

start();

function getCourses(callback) { // callback: function
    fetch(courseApi)  // fetch: goi API tu server va nhan du lieu tra ve tu server
        .then(function(response) {  // response: du lieu tra ve tu server
            return response.json();  // JSON.parse()
        })  
        .then(callback); 
}   

function createCourse(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    fetch(courseApi, options)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function renderCourses(courses) {
    var htmls = courses.map(function(course) {
        return `<li class="course-item-${course.id}">
            <h4 class="course-name-${course.id}">${course.name}</h4>
            <p class="course-desc-${course.id}">${course.description}</p>
            <button onclick="handleDeleteCourse('${course.id}')">Xoa</button>
            <button onclick="handleEditCourse('${course.id}')">Sửa</button>
        </li>`;
    });
    listCoursesBlock.innerHTML = htmls.join('');
}

function handleEditCourse(id) {
     // lấy class cho từng phần tử name và description
    var name = document.querySelector('.course-name-' + id);
    var description = document.querySelector('.course-desc-' + id);

    // lấy input name và description
    var nameInput = document.querySelector('input[name="name"]');
    var descriptionInput = document.querySelector('input[name="description"]');

    var btnEdit = document.getElementById('create');
    if (name && description) {
        btnEdit.innerText = 'Cap nhat';
        nameInput.value = name.innerHTML; // gán giá trị cho input
        descriptionInput.value = description.innerHTML;
    }
    btnEdit.onclick = function() {
        var formData = {
            name: nameInput.value,
            description: descriptionInput.value
        };

        var options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        };

        fetch(courseApi + '/' + id, options)
            .then(function(response) {
                return response.json();
            })
            .then(function() {
                getCourses(renderCourses);
            });
    }
}

function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    fetch(courseApi + '/' + id, options)
        .then(function(response) {
            return response.json();
        })
        .then(function() {
            var courseItem = document.querySelector('.course-item-' + id);
            if (courseItem) {
                courseItem.remove();
            }
        });
}

function handleCreateForm() {
    var createBtn = document.getElementById('create');
    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;

        var formData = {
            name: name,
            description: description
        };

        createCourse(formData, function() {
            getCourses(renderCourses);  // Gọi getCourses để làm mới danh sách khóa học
        });
    }
}