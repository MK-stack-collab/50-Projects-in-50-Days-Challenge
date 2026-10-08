const taskInput = document.getElementById("input-box")
const listConst = document.getElementById("list-cont")
const btn = document.getElementById("taskbtn")

btn.onclick= function () {
    if(taskInput.value=== "") {
        alert("Input is empty" )
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = taskInput.value
        listConst.appendChild(li)
        let span  = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    taskInput.value = ""
} 

listConst.addEventListener("click", function (e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false)