const nameInput = document.getElementById("nameinput");
const scoreInput = document.getElementById("scoreinput");
const ageInput = document.getElementById("ageinput");
const btn = document.getElementById("btn")
const courseInput = document.getElementById("courseinput")
const info = document.getElementById("info")




btn.onclick = function () {
    let enteredname = "Michael";
    let enteredcourse = "CS"

    if(nameInput.value === enteredname && 
        courseInput.value === enteredcourse
    ){
        info.innerText = "Welcome"

    }
    else if(scoreInput.value < 70 ||
        ageInput.value < 18
     ) {
        info.innerText = "Age or Score "
     }
     else{
        info.innerText ="Please fill in the form"
     }
}