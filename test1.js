//Demonstrate JavaScript's Single-Threaded NatureQuestion:
// Write an example to show that JavaScript is single-threaded by creating two competing tasks, one that
//blocks the //event loop.

function blockingTask(){
    console.log("The bloking is start")
    return new  Promise((resolve, reject) =>{
        for(let i=0; i < 10000000000; i++){
            //Someting
        }
       console.log("The blocking is completed");
       resolve ("Data is processed");
     });
} //blocktask

function asyncTask(){
    console.log("async task is start");
    return new Promise(function (){
        setTimeout(function exec(resolve, reject){
            console.log("Async task is completed");
        }, 5000);
    });
} //asynctask

console.log("Starting...!");
blockingTask();
asyncTask();
console.log("End...!");