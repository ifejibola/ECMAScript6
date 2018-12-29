// For-of is a new loop in ES6 that we can use to loop over iterable objects like arrays, strings, maps, and sets.
const newLoop = function(){

    //Loop String 
    for( let letter of 'JavaScript'){
        console.log('Using For-of', letter);
    }

    //Loop Array
    var topics = ['JavaScript', 'Node', 'React'];
    for(let topic of topics){
        console.log('Array iterated with for-of', topic);
    }

    //Loop through map
    var subjects = new Map();
    subjects.set('HTML', '/class/html');
    subjects.set('CSS', '/class/css');
    subjects.set('JavaScript', '/class/javascript');
    subjects.set('NodeJs', '/class/node');

    // Loop through values pairs
    for(let subject of subjects){
        console.log('looping through map',subject);
    }
    //Loop through keys  
    for(let subject of subjects.keys()){
        console.log(subject, 'looping through map');
    }

    // Looping through values
    for(let subject of subjects.values()){
        console.log("The course description can be found at", subject);
    }

    // 
    for(let course of subjects.entries()){
        console.log(course);
    }


}

export default newLoop;