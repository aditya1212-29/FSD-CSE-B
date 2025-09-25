const url="https://dummyjson.com/users";
const pr=fetch(url);
    pr.then((res)=>{
    return res.json();
})
.then((data)=>{
    // console.log("name:",data.users[0].firstName);
    // console.log("email",data.users[0].email);
    // console.log("ip:",data.users.ip);
    // console.log("mac address:",data.users[0].macAddress);
    // console.log(data);
    data.users.forEach((da)=>{
        console.log("name:",da.firstName);
        console.log("email:",da.email);
        console.log("ip:",da.ip);
        console.log("Mac Address:",da.macAddress);
    })
})
.catch((err)=>{
console.error("error:",err.message);
})