const input = document.getElementById("number-input")
const buttons = document.querySelectorAll("button")

for(const button of buttons){

 button .onclick = function () {


   if(button.value === "C") {
   input.value = "";
  }


else if(button.value === "⌫") {
   input.value = input.value.slice(0, -1);
}



  else if (button.value === "=") {
      try {
    input.value = eval(input.value);
  }

  catch {
    input.value = "Error"
  }
  }

  else {
     input.value  =input.value + button.value;
  }

}
}
