// Chaining Promises with setTimeout
// Modify the delay function to chain multiple promises so that three messages are 
// logged in sequence with delays?

function delay(ms,message){
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log(message);
            resolve();
        },ms);
    });
}

const x= delay(1000, "Fist message after 1 sec");

x.then(() =>delay(2000, "Second message after 2 more sec"));
x.then(() =>delay(1000, "Third message after 1 more sec"));
