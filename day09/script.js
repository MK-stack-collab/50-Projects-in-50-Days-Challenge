const questions = [
    {
        question : "What is the largest animal in the world",
        answer : [
            {text: "Shark", correct : false},
            {text: "Elephant", correct : false},
            {text : "Blue Whale", correct : true},
            {text : "Giraffe", correct : false}
        ]
    },
    {
        question : "Who's the G.O.A.T of football",
        answer: [
            
            {text : "Cristiano Ronaldo", correct : false},
            {text : "Diego Maradona", correct: false},
            {text : "Lionel Andreas Messi", correct : true},
            {text : "Zinadine Zidane", correct : false}            
        ]
    },
    {
        question : "Who's the best dribbler of all time in football",
        answer: [
           
            {text : "Neymar Jr", correct : false},
            {text: "Jay Jay Okocha", correct:false},
            {text: "Garrincha", correct :false} ,
            {text : "Lionel Andres Messi", correct : true}
        ]
    },
    {
        question : "Who's the best goalkeeper of all time ",
        answer : [
            {text: "Gianluigi Buffon", correct : true},
            {text: "Iker Casillas", correct:false},
            {text: "Andre Ter Stegen", correct: false},
            {text : "Lev Yashin", correct : false}
        ]
    }
]

const answerBtn = document.getElementById("answer-btns");
const nextbtn = document.getElementById("nextbtn")
const questionDisplay= document.getElementById("question")

let currentQuestionIndex = 0;
let score = 0;

function startQuiz () {
    currentQuestionIndex =0;
    score = 0;
    nextbtn.innerHTML = "Next"
    showQuestion()
}

function showQuestion () {
    resetState()
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex +1;
    questionDisplay.innerHTML = questionNo  + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerBtn.appendChild(button)
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click",selectAnswer) 

        })
    }

function resetState () {
    nextbtn.style.display = "none"
    while(answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild)
    }
}
                 function selectAnswer (e) {
          const selectedBtn = e.target;
            const isCorrect = selectedBtn.dataset.correct === "true";
            if(isCorrect) {
                selectedBtn.classList.add("correct")
                score++
            }
            else{
                    selectedBtn.classList.add("incorrect")
                }
                Array.from(answerBtn.children).forEach(button => {
                    if(button.dataset.correct === "true") { 
                    button.classList.add("correct")
                    }
                    button.disabled = true
                })

                nextbtn.style.display = "block"
        }

        function showScore () {
            resetState()
            questionDisplay.innerHTML = ` You scored ${score} out of ${questions.length}!`
            nextbtn.innerHTML = "Play Again"
            nextbtn.style.display = "block"
        }

        function handleButton () {
            currentQuestionIndex++
            if(currentQuestionIndex < questions.length) {
                showQuestion()
            } else{
                showScore()
            }
        }
        nextbtn.addEventListener("click", () =>{
            if(currentQuestionIndex < questions.length) {
                handleButton()
            }else{
                startQuiz()
            }
        })

startQuiz()