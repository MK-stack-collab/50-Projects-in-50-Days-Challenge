const lightdarkbtn = document.getElementById("lightdarkbtn")
const themeIcon = document.querySelector("span")
const body = document.body

lightdarkbtn.onclick = function () {
    body.classList.toggle("dark-mode")

    if(body.classList.contains("dark-mode")) {
        themeIcon.textContent = "☀️"
    }
    else {
        themeIcon.textContent = "🌙"
    }
}