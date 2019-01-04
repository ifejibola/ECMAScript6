//Promise Use: to help deal with asynchrounoys behavior in JavaScript. 
// When something is asynchronous it means that some sort of waiting is going on. 
    //Theres a delay between when we ask for something and when we receive it.
const promises = ()=>{

    console.log("**** Promises *****");
    const delay = seconds =>{
        return new Promise(resolve => {
            // setTimeout(resolve, seconds * 1000)
            //Or pass variables through the resolve method
            setTimeout(
                ()=> resolve(`${seconds} second delay is up`),
                seconds * 1000
            );
        });
    };
    console.log("Zero seconds");
    //Delay by one second, when process completes log to the console.
    // delay(1).then(()=> console.log("One second"));
    // delay(3).then(()=> console.log("Three second"));

    //Or using resolve method
    // delay(2).then(msg => console.log(msg));
    // delay(4).then((msg)=> console.log(msg));

    // Or .then method, then can be chained to one another to print msgs in a row 
    delay(2).then(msg => msg.toUpperCase())
            .then(msg => `${msg}!!!!!`)
            .then(msg => console.log(msg));

    
    console.log("**** Promises with Validation*****");
    const delayWithValidation = seconds =>{
        return new Promise((resolve, reject) => {
            if(typeof seconds !== 'number'){
                reject(new Error('Argument seconds must be a number '));
            }
            setTimeout(
                ()=> resolve(`${seconds} second delay is up`),
                seconds * 1000
            );
        });
    };
    console.log("Zero seconds");
    
    delayWithValidation("10 minutes").then(msg => msg.toUpperCase())
            .then(msg => `${msg}!!!!!`)
            .then(msg => console.log(msg));
    delayWithValidation(6).then(msg => msg.toUpperCase())
            .then(msg => `${msg}!!!!!`)
            .then(msg => console.log(msg));
}
export default promises;