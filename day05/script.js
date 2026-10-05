const hrs = document.getElementById("hrs")
const mins = document.getElementById("mins")
const secs = document.getElementById("secs")



setInterval(()=>{
    let currentTime = new Date()

    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours()
    mins.innerHTML = (currentTime.getMinutes()<10?"0":"")+ currentTime.getMinutes()
    secs.innerHTML = (currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds()
} ,1000)