
// promise chain

var promise = new Promise(
    function(resolve, reject){
        resolve();
    }
);


promise
    .then(function(){
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve([1,2,3]);
            }, 3000);
        });
    })
    .then(function(data){
        console.log(data);
    })
    .finally(function(){
        console.log('Done');
    });


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
        return sleep(1000);
    })
    .then(function(){
        console.log(3);
        return sleep(1000);
    })
    .then(function(){
        console.log(4);
    });