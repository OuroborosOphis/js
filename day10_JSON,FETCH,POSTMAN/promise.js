
// - sync: dong bo
// - async: bat dong bo
// - noi dau
// - ly thuyet, cách hoạt động
// - thực hành

// sleep(1000);
setTimeout(() => {
  console.log('1');
}, 1000);

console.log('2');

// 2 1 because setTimeout is async function so it will run after the console.log('2') function is done running 

// js là ngôn ngữ đơn luồng (single thread) - 1 thời điểm chỉ chạy 1 hàm duy nhất 
// nhưng js có cơ chế bất đồng bộ (async) - chạy nhiều hàm cùng 1 lúc

// async: setTimeout, setInterval, fetch, XMLHttpRequest, file reading, request animation frame, ...

// callback: hàm được truyền qua tham số của 1 hàm khác
