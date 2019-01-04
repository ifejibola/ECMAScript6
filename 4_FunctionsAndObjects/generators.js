//Generators
//use: to pause functions in the middle of execution, to be resumed later. generators 
    //are identified with an asterisk immediately following the function keyword.

// Most likely used when dealling with some sort of asynchronous event, maybe an external event or
    // maybe a timer.

const generators = () =>{

    function* director(){
        yield "Three";
        yield "Two";
        yield "One";
        yield "Action";
    }

    var action = director();
    //Each time we use a yield statement, we need to restart the function, to do this use next function to jump to the next yeild.
    console.log(action.next());
    console.log(action.next());
    // chain .value to see just the value not the entire generator 
    console.log(action.next().value);
    console.log(action.next().value);
    console.log(action.next().value);

    //Create timer 
    // This function stores elements of an array into this generator by iterating through it
    function* eachItem(arr){
        for(var i=0; i< arr.length; i++){
            yield arr[i];
        }
    }
    // pass an array to eachItem
    var letters = eachItem(["a", "b", "c", "d", "e", "f", "g"]);

    // print to the console every 500 mili second, set interval takes a function, and duration args
    var abcs = setInterval(function(){
        var letter = letters.next();
        if(letter.done){
            clearInterval(abcs);
            console.log("Now I know my ABC's");
        }else{
            console.log(letter.value);
        }
    },500);

}

export default generators;