
// tagged template literals

function highlight([first, ...strings], ...values) {
    return values.reduce(
        (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],   // strings.shift() lay phan tu dau tien cua array strings ra va xoa phan tu do khoi array
        [first]
    )
}

var course = 'Javascript';
var brand = 'F8';

const html = highlight`Hoc lap trinh ${course} tai ${brand}!`; 

console.log(html.join('')); // Hoc lap trinh <span>Javascript</span> tai <span>F8</span>!