const scoreInput = document.getElementById("score");
const overallnput = document.getElementById("overall");
const calcBtn = document.getElementById("calc-btn");
const percentageDisplay = document.getElementById("percentage");
const letterDisplay = document.getElementById("letter");

calcBtn.onclick = function () {
    const courseScore = Number(scoreInput.value)
    const courseDefault = Number(overallnput.value)

    if(!scoreInput || !overallnput || courseScore<0 || courseDefault<0 || courseScore>courseDefault) {
        alert("Please enter valid scores! Earned score cannot exceed the total score.");
        return;
    }
    

    const percentage = (courseScore/courseDefault)*100
    percentageDisplay.textContent = percentage + "%"
    letterDisplay.textContent = getLetter(percentage)
}

function getLetter (percentage) {
    if(percentage>=70) return 'A'
    if(percentage>=60) return 'B'
    if(percentage>=50) return 'C'
    if(percentage>=40) return 'D'
    if(percentage>=30) return 'E'
    return 'F'
}