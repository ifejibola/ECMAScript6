//Primitives in JavaScript are types, like numbers strings, arrays, and objects.
// Symbols are a new primitive type in ES6

// Symbols use : as unique identifiers becauase they wont conflict with object keys that are strings.
    // they also help us to create cutomized iteration behaviour.
const symbols = ()=>{
    
    const id = Symbol();// Symbol() is a factory function, factory functions are functions that create things
    const courseInfo = {
        title: "ES6",
        topics: ["babel", "syntax", "functions", "classes"],
        id: "ife-js"
    };

    courseInfo[id] = 41284;
    console.log(courseInfo[id]);
    console.log(courseInfo);

}

export default symbols;