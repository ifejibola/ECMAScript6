// Use: Fetches api of astronuts in space using a Promise
const customPromises = ()=>{

    //Function that returns promise
    const spacePeople = ()=>{
        return new Promise((resolves, rejects)=>{
            const api = 'http://api.opne-notify.org/astros.json';
            const request = new XMLHttpRequest();
            request.open('GET', api);
            request.onload = ()=>{
                if(request.status ==200){
                    resolves(JSON.parse(request.response));
                }else{
                    rejects(Error(request.statusText));
                }
            };
            request.onerror = err => rejects(err);
            request.send();
        });
    };
    spacePeople().then(
        spaceData => console.log(spaceData),
        err=> console.error(
            new Error('Cannot load space people')
        )
    );
}

export default customPromises;