
const iterators = ()=>{
    console.log("*** ITERATORS ******");
    //Iterable
    var title = 'ES6';
    console.log(typeof title);
    console.log(typeof title [Symbol.iterator]);// Returns default iterator for an object or factory of iterators

    var iterateIt = title[Symbol.iterator]();
    console.log(iterateIt.next());
    console.log(iterateIt.next());
    console.log(iterateIt.next());
    console.log(iterateIt.next());

    //Create your own custom iterator
    function tableReady(arr){
        var nextIndex = 0;
        return{
            next(){
                if(nextIndex < arr.length){
                    return{ value: arr.shift(), done: false}
                }else{
                    return {done: true}
                }
            }
        }
    }

    var waitingList = ['Sarah', 'Heather', 'Anna', 'Meagan'];
    var iterateList = tableReady(waitingList);

    console.log(`${iterateList.next().value}, your table is ready`);
    console.log(`${iterateList.next().value}, your table is ready`);
    console.log(`${iterateList.next().value}, your table is ready`);
    console.log(`${iterateList.next().value}, your table is ready`);
    console.log(`Is this finishe? ${iterateList.next().done}`);
}

export default iterators;