//Set objects are collections of values
// THey can be any type 
// Each value must be unique

const sets = function(){
    var books = new Set();
    books.add('Pride and Prejudice');
    books.add('War and peace')
        .add('Troy');
    console.log(books);
    console.log('how many book?', books.size);
    console.log('has Troy?', books.has('Troy'));
    books.delete('');
    console.log('has War and peace?', books.has('War and peace'));

    // Add an array into a set
    var data = [4,4,4,4,5,2,44,6,46,2,34,5,3];
    var set = new Set(data);
    // Display length of the array 
    console.log('data.length', data.length);
    // Diaplay size of the set(Removes duplicates)
    console.log('set.size', set.size);

    
}

export default sets;