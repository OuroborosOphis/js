
// inner text and textContent  are used to get the text content of an element

var headingElement = document.querySelector('.heading');    // selects the first element with class heading
console.log(headingElement.innerText);    // output: This is a heading
console.log(headingElement.textContent);    // output: This is a heading

// headingElement.innerText = 'New heading';    // changes the text content of the element

// innertext tra ve text content cua element, bao gom ca text trong the con, bo qua cac the khac nhu script, style, ... 
// textContent tra ve text content cua element, bao gom ca text trong the con, lay ca khoang trang, tab, newline, ...]

// innerText tra lai nhung gi nhin thay tren trinh duyet
// textContent nhung gi co trong code html, bo qua the tag script, style, ... nhung van lay noi dung ben trong


headingElement.innerText = `


New heading


`;