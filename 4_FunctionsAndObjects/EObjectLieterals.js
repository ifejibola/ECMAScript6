// Enhancing object literals
const EnhancingObjectLiterals = function(){
   //Old way of writing Object Literals
    var cat = {
        // times parameter is to pass in number of spots will be in the array? check..
        meow: function(times){
            
            console.log(Array(times+1).join("meow"));
        },
        purr: function(times){
            console.log(Array(times+1).join("purr"));
        },
        snore: function(times){
            console.log(Array(times+1).join("snore"));
        }

    };
    // Will print a number less than argument taken 3 will print out 2 meows, 4 will print out 3 if you dont add + 1 to times
    cat.meow(3);
    cat.purr(3);
    cat.snore(5);

    //BETTER WAY USING ES6
    var dog = {
        // times parameter is to pass in number of spots will be in the array? check..
        bark(times){
            console.log('************* ES6 VERSION FOR OBJECT LITERALS ***********');
            
            console.log("bark".repeat(times));
        },
        wagTail: function(times){
            console.log("wag tail".repeat(times));
        },
        fetch: function(times){
            console.log("fetch".repeat(times));
        }
    };
    dog.bark(3);
    dog.fetch(4);
    dog.wagTail(4);
}

export default EnhancingObjectLiterals;