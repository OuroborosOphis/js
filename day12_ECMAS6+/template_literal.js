
const courseName = 'JavaScript';
// const description = 'Course name: ' + courseName;
const description = `Course name: ${courseName}`; // template literal (string interpolation) 
const description2 = `Course name: ${courseName}
    Course name: ${courseName}
    Course name: ${courseName}
    Course name: ${courseName}
`; // multi-line string

console.log(description2);