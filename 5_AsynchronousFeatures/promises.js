//Promise Use: to help deal with asynchrounoys behavior in JavaScript. 
// When something is asynchronous it means that some sort of waiting is going on. 
    //Theres a delay between when we ask for something and when we receive it.
const promises = ()=>{

    const delay = seconds =>{
        return new Promise(resolve => {
            setTimeout(resolve, seconds * 1000)
        });
    };

    console.log("Zero seconds");
    //Delay by one second, when process completes log to the console.
    delay(1).then(()=> console.log("One second"));
    delay(3).then(()=> console.log("Three second"));

}

export default promises;