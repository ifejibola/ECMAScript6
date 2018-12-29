// <!-- Using let keyword, Create some code that's going to render 45 divs onto the page using a for loop -->
// <!-- Let is a great keyword for enforcing block scoping  -->
// <!-- #first set up html and css -->

const divs = function(){
    for(let i=0; i<45; i++){
        var div = document.createElement('div');
        div.onclick = function(){
            alert("You clicked on a box #" + i);
        };
        // Where you want to place all 45 div tags.
        document.getElementsByTagName('section')[0].appendChild(div);
    }
}
export default divs;