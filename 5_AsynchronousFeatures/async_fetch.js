//
const async_fetch = () =>{

    (async(loginName)=>{
        try{
            var response = await fetch('http://api.github.com/users/${loginName}/followers');
            var json = await response.json();
            var followerList = json.map(user => user.login);
            console.log(followerList);
        }catch(e){
            console.log("Data didn't load", e);
        }

    })('ifejibola');
}

export default async_fetch;