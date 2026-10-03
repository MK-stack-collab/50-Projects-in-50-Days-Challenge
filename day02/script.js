const nameInput = document.getElementById("nameinput");
const scoreInput = document.getElementById("scoreinput");
const ageInput = document.getElementById("ageinput");
const btn = document.getElementById("btn")
const courseInput = document.getElementById("courseinput")
const info = document.getElementById("info")




btn.onclick = function () {
    
    let enteredname = "MK";
    let enteredcourse = "CS"
    let enteredscore = Number(scoreInput.value)
    let enteredage = Number(ageInput.value)

    if(!nameInput.value|| !courseInput.value || !scoreInput.value || !ageInput.value) {
        info.innerText = "Please fill in all the fields in the form"
        return;
    }

     if(enteredscore < 70 || enteredage < 18
     ) {
        info.innerText = "Age Must be 18+ score must be 70+ "
        return;
        
     }   
      if(nameInput.value === enteredname && 
        courseInput.value === enteredcourse
    ){
        info.innerText = "Welcome"

    }
    else{
        info.innerText = "Invalid name or course details"
    }
}