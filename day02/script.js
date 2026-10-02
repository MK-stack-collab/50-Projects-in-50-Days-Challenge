const info = document.getElementById("info");
const btn = document.getElementById("btn");
const emailInput = document.getElementById("email");
const passwordInput  = document.getElementById("password")

 
btn.onclick = function () {
   let enteredemail = "mk@gmail.com"
   let eneteredpassword = "1234"

    if(emailInput.value === enteredemail &&
        passwordInput.value === eneteredpassword
    ) {
        info.innerText = "Welcome"
    } else{
        info.innerText = "OUT"
    }
}