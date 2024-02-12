let input = document.querySelector("input")
let outPara = document.getElementById("Checker")

input.addEventListener("input",()=>{
    console.log(input.value)
    let password = input.value;
    if(password.length <8 ){
        outPara.innerHTML = "Password is too short";
        outPara.style.color = "red"
    }
    else if (password.length >=8 && password.length <12){
        outPara.innerHTML = "Password is long enough"
        outPara.style.color = "green"
    }
    else{
        outPara.innerHTML = "Password is too long"
        outPara.style.color = "red"
    }
    if(password.search(/[a-z]/) == -1){
        outPara.innerHTML = "Password is missing lowercase letter"; 
        outPara.style.color = "red";
    }
    else if(password.search(/[A-Z]/) == -1){
        outPara.innerHTML = "Password is missing uppercase letter"; 
        outPara.style.color = "red";
    }
    else if(password.search(/[0-9]/) == -1){
        outPara.innerHTML = "Password is missing Numeric letter"; 
        outPara.style.color = "red";
    }
    else if(password.search(/[!@#$%^&*()_+{}[\]:"><,.;']/) == -1){
        outPara.innerHTML = "Password is missing special character"; 
        outPara.style.color = "red";
    }
    else{
        outPara.innerHTML = "Password is strong"; 
        outPara.style.color = "green";
    }
    
})