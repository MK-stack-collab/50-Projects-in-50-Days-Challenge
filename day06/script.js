const info = document.getElementById("info")
const resetbtn = document.getElementById("resetbtn")
const increaseBtn = document.getElementById("increasebtn")
const decreaseBtn = document.getElementById("decreasebtn")

let count = 0
increaseBtn.onclick = function () {
  count++

  info.textContent = count
}

decreaseBtn.onclick =function(){
    count --

    info.textContent = count
}

resetbtn.onclick = function () {
    count = 0

    info.textContent = count
}