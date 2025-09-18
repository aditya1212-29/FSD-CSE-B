function register(){
    setTimeout(()=>{
     console.log('register end');
    },2000)
    

}
function sendEmail(){
     setTimeout(()=>{
     console.log('send email end');
    },3000)

}
function login(){
    setTimeout(()=>{
     console.log('login end');
    },1000)

}
function getData(){
   setTimeout(()=>{
     console.log('get data end');
    },2000)

}
function displayData(){
    setTimeout(()=>{
     console.log('display data end')
    },2000)

}
register();
sendEmail();
login();
getData();
displayData();
console.log('call other application')