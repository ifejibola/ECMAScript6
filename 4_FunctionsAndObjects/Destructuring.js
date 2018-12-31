// Destructuring assignment
// Use: gives an easy way to extract data from arrays and objects and assign them to variables.
const destructuring = function(){
    
    // Regular way of intracting with an array
    var cities = ["Spokane", "Boston", "Los Angeles", "Seattle", "Portland"];

    //Extract array 
    console.log(cities[0]);
    console.log(cities[4]);

    // *** DESTRUCTURING THE ARRAY ***
    // place holder can be called anything the left, use comma to skip to index wanted
    var [first,,,fourth,] = ["Toronto", "Scarbz", "Sauga", "New York", "Buffalo"];
    console.log("*** DESTRUCTURING THE ARRAY ***")
    console.log(first);
    console.log(fourth);

    // DESCTRUTURING OBJECTS
    var sanwich = {
        title: "Reuben",
        price: 7,
        description: "Toronto's ver own",
        ingredients: ['bread', 'corned beeg', 'dressing', 'sauerkraut', 'cheese']
    };
    // access object
    console.log(sanwich.title);
    console.log(sanwich.description);

    var vacation = {
        destination: "France",
        travelers: 2,
        activity: "sking",
        cost: 4000
    };
    console.log("*** DESCTRUTURING OBJECTS ***");
    // Access object, accessing object properties {destination, activity}
    function vacationMarketing({destination, activity}){
        return `Come to ${destination} and do some ${activity}`
    }
    console.log(vacationMarketing(vacation));
}

export default destructuring;