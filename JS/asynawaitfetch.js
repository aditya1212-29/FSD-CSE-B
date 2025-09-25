const url="https://dummyjson.com/users"
const f1=async()=>{
    try{
    const res=await fetch(url);
    const jsondata=await res.json();
    jsondata.users.forEach((data)=>{
        console.log("name:",data.firstName);
        console.log("email:",data.email);
        console.log("mac Address:",data.macAddress);
    })
    }
    catch(err){
        console.error("error:",err.message);
    }
}
