// Arrow functions and 'this' scope, also working with bind
const bind = function(){
    
    //person object
    var person = {
        first: "Doug",
        actions: ['bike', 'hike', 'ski', 'surf'],

        // printActions: function(){
        //     //Look into each of the items in the actions array object
        //     var _this = this;
        //     this.actions.forEach(function(action){
        //         var str = _this.first + " likes to "  + action;
        //         console.log(str);
        //     });
        // }

        //OR
        // printActions: function(){
        //     //Look into each of the items in the actions array object
        //     this.actions.forEach(function(action){
        //         var str = this.first + " likes to "  + action;
        //         console.log(str);
        //     }.bind(this));
        // }

        // OR with arrow function, shorten code  
        printActions(){
            //Look into each of the items in the actions array object
            this.actions.forEach((action) =>{
                var str = this.first + " likes to "  + action;
                console.log(str);
            });
        }
    };
    person.printActions();
}

export default bind;