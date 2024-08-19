
// dung khi call back hell

// 1. new Promise
// 2. executor

var promise = new Promise(
    // Executor
    function(resolve, reject){
        // Logic
        // resolve('Success');
        // reject('Error');
        
        // Fake API
        resolve({
            id: 1,
            name: 'JavaScript'
        });
    }
);

// 3 state of promise 
// - Pending: waiting for something to finish
// - Fulfilled: completed successfully
// - Rejected: completed with error

// then execute when promise is resolved
// catch execute when promise is rejected
// finally execute when promise is resolved or rejected

promise
    .then(function(data){
        console.log('Successfully: ', data);
    })
    .catch(function(error){
        console.log('Failure: ', error);
    })
    .finally(function(){
        console.log('Done');
    });