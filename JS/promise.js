function register(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("user register");
            resolve();
        },1000)
    })
}
function sendEmail(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("email sent");
            resolve();
        },2000)
    })
}
function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("user logged in");
            resolve();
        },2000)
    })
}
function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data displayed");
            // resolve();
            reject("try error");
        },1000)
    })
}
// register()
// .then(sendEmail)
// .then(login)
// .then(getData)
async function f1(){
    try{
        await register();
        await sendEmail();
        await login();
        await getData();
    }
    catch(err){
        console.log(err);
    }
}
f1();