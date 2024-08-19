function sleep(ms){
    return new Promise(function(resolve){
        setTimeout(resolve, ms);
    });
}

sleep(1000)
    .then(function(){
        console.log(1);
        return sleep(1000);
    })
    .then(function(){
        console.log(2);
        return new Promise(function(resolve, reject){
            reject('Co loi!');
        });
    })
    .then(function(){
        console.log(3);
        return sleep(1000);
    })
    .then(function(){
        console.log(4);
    })
    .catch(function(error){
        console.log(error);
    });


// 1. Promise.resolve
// 2. Promise.reject
// 3. Promise.all

// var promise = new Promise(function(resolve, reject){
//     // logic
//     resolve('Success');
//     // reject('Error');
// });

var promise = Promise.resolve('Success');
// var promise = Promise.reject('Error');

promise
    .then(function(data){
        console.log(data);
    })
    .catch(function(error){
        console.log(error);
    });


// Promise.all

var promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve([1]);
    }, 2000);
});

var promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve([2, 3]);
    }, 5000);
});

Promise.all([promise1, promise2]) // return a promise
    // .then(function(data){
    //     var result1 = data[0];
    //     var result2 = data[1];

    //     console.log(result1.concat(result2));
    // });
    .then(function([result1, result2]){
        console.log(result1.concat(result2));
    });