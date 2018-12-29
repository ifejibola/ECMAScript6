// The spread operator does a lot of powerful things with three small dots
    // It turns the elements of an array into arguments of a function call, or into elements of an array lieteral.
const spreadOperator = function(){
    // add these arrays to the array of animals
    var wolves = ["WareWolf", "HybridWolf", "DaireWolf"];
    var dogs = ["Dobberman", "Rottweiller", "CaneCorso"];

    // Array of animals, adding wolves and dogs within animals make them subarrays
    var animals = ["Whale", "Giraffe", wolves, "Snake", dogs, "Coyote"];// Will not output elements of subarray
    console.log(animals);

    // Display elements of subarray within animals using spread opertor(...) 
    var animals = ["Whale", "Giraffe", ...wolves, "Snake", ...dogs, "Coyote"];// Will not output elements of subarray
    console.log(animals);
}
export default spreadOperator;