// Async: are functions that give another way of dealing with asynchronous js 
const asyncAndawait = () =>{

    const delay = seconds => {
        return new Promise(
            resolve => setTimeout(resolve, seconds * 1000)
        )
    };

    const countToFive = async() => {
        console.log('Zero seconds');
        await delay(1);
        console.log('One seconds');
        await delay(1);
        console.log('Two seconds');
        await delay(3);
        console.log('Five seconds');
    };

    countToFive();
    
}

export default asyncAndawait;