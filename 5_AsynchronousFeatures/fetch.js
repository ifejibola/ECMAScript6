// Use: Fetche api of astronuts in space using a Promise
    // fetch makes it 

const fetching = ()=>{
    //fetch api
    console.log("**** USING FETCH TO PULL APII *****");
    // fetch('http://api.open-notify.org/astros.json')
    //     .then(res => res.json())
    //     .then(console.log);

        //Using a function to fetch api will yeild same result as ^
    const getPeopleInSpace = () =>
        fetch('http://api.open-notify.org/astros.json')
            .then(res => res.json());
    
            // get all names of people within the api
    const spaceNames = () =>
        getPeopleInSpace()
            .then(json => json.people)
            .then(people => people.map(p => p.name))
            .then(names => names.join(', '));

    getPeopleInSpace()
        .then(console.log);

    spaceNames()
        .then(console.log);

    // //Function that returns promise
    // const spacePeople = ()=>{
    //     return new Promise((resolves, rejects)=>{
    //         const api = 'http://api.open-notify.org/astros.json';
    //         const request = new XMLHttpRequest();
    //         request.open('GET', api);
    //         request.onload = ()=>{
    //             if(request.status ==200){
    //                 resolves(JSON.parse(request.response));
    //             }else{
    //                 rejects(Error(request.statusText));
    //             }
    //         };
    //         request.onerror = err => rejects(err);
    //         request.send();
    //     });
    // };
    // spacePeople().then(
    //     spaceData => console.log(spaceData),
    //     err=> console.error(
    //         new Error('Cannot load space people')
    //     )
    // );
}

export default fetching;