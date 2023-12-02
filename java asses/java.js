var em = document.getElementById("email");
var pwd = document.getElementById("password");
var err1 = document.getElementById("err1");
var err2 = document.getElementById("err2");

var regex= /^([A-Za-z0-9\-#_.])@(A-Za-z0-9\-).([a-z]{2,3})(.[a-z]{2,3})?$/




function validate(){
   
    if(em.value.trim()==""){
    err1.innerText = "field cannot be empty";
    err1.style.color="red"
    em.style.border = "2px solid red";
    return false
}
else if(!regex.test(em.value)){
    err1.innerText = "please enter proper email";
    err1.style.color="red"
    em.style.border = "2px solid red";
    return false

}
else {
    err1.innerText="";
    em.style.border = "2px solid green"
    return true
}
}

function validate(){
   var regex= "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$"


    if(pwd.value.trim()==""){
    err2.innerText = "field cannot be empty";
    err2.style.color="red"
    pwd.style.border = "2px solid red";
    return false
}
else if(!regex.test(em.value)){
    err2.innerText = "please enter proper phone number";
    err2.style.color="red"
    pwd.style.border = "2px solid red";
    return false

}
else {
    err2.innerText="";
    pwd.style.border = "2px solid green"
    return true
}
}
















































































































