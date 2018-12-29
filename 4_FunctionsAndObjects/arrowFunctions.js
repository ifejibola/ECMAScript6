const arrowFunctions = function(){

    //TRADITIONAL FUNCTION 
    var studentList = function(students){
        console.log(students);
    };

    studentList(["Joe", "Cindy", "Jenne"]);

    //ES6 ARROW FUNCTION
    var xMenList = (xMan) => console.log(xMan);

    xMenList(["X", "Logan", "Storm"]);
}

export default arrowFunctions;