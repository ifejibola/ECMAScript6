// Map is an object that holds key value pairs
// In a map any value may be used as either a key or a value.
// Why use a map? You might want to use one if you want to use something other than a string as a key.
// In a map a function can be a key, an array can be a key, a number could be a key
// Need to iterate in order

//Create map
const maps = function(){
    var course = new Map();
    // set values into new map
    course.set('react', {description: 'ui'});
    course.set('jest', {description:'testing'});

    console.log(course);

    //this will not work (result will be undefined)
    console.log(course.react);
    // This will work to access value with key(react);
    console.log("Displaying single key value", course.get('react'));

    // Create a new map and passing an array into it. it's also an array of arrays
    var details = new Map([
        //new Date() is the key, 'today' is the value
        [new Date(), 'today'],
        ['items', [1, 2]]
    ]);
    // Display size of details map = 2
    console.log(details.size);

    details.forEach(function(item){
        console.log(item);
    })
}

export default maps;