import greet from './dist/greeting';
import divs from './3_ES6 Syntax/let';
import spreadOperator from './3_ES6 Syntax/spreadOperators';
import maps from './3_ES6 Syntax/map';
import sets from './3_ES6 Syntax/sets';
import newLoop from './3_ES6 Syntax/forOf';
import EnhancingObjectLiterals from './4_FunctionsAndObjects/EObjectLieterals';
import arrowFunctions from './4_FunctionsAndObjects/arrowFunctions';

// Working with default parameters 
var nameBuilder = function(firstName="John", lastName="Doe"){

    console.log(firstName + " " + lastName);
}
//Calling imported js files (can be seen as start buttons if you will)
divs();
nameBuilder();
console.log(greet("Ife"));
spreadOperator();
maps();
sets();
newLoop();
EnhancingObjectLiterals();
arrowFunctions();
