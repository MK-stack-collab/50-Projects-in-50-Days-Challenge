const moneyInput = document.getElementById('output')
const info = document.getElementById('info')
const balance = document.getElementById('balance')
const btn = document.getElementById('btn')


let currentBalance = 500

btn.onclick = function () {
const withdrawAmount = Number(moneyInput.value)
    
    if (moneyInput.value <= currentBalance) {
        currentBalance -= withdrawAmount
        balance.textContent =  "Your remaining balance is " + "$" + currentBalance
    }
    else {
        info.textContent = "Insufficient Funds"
    }
    moneyInput.value = ""
}