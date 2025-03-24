const body = document.body 
let time = 0 
let timer 

const robot = document.createElement('p') 
robot.textContent = 'Hello I am Steve. I am a timer  -_-' 
body.appendChild(robot) 

const timerScreen = document.createElement('p') 
timerScreen.innerHTML = `_____<br>|  ${time}.00  |<br>-------<br>--|      |--<br>------` 
console.log(time) 
body.appendChild(timerScreen) 

const stopButton = document.createElement('button') 
stopButton.textContent = 'Stop' 
body.appendChild(stopButton) 
stopButton.setAttribute('id', 'stop') 

let pause = document.getElementById('stop') 

pause.addEventListener('click',function(){ 
    clearInterval(timer); 
    timerScreen.innerHTML = `_____<br>|  ${time}.00  |<br>--------<br> --|      |--<br>------` 
}) 

const startButton = document.createElement('button') 
startButton.textContent = 'Start' 
body.appendChild(startButton) 
startButton.setAttribute('id', 'start') 

let start = document.getElementById('start') 

start.addEventListener('click',function(){ 

    timer = setInterval(clock,1000); 

    function clock(){ 
        ++time 
        console.log(time) 
        timerScreen.innerHTML = `_____<br>|  ${time}.00  |<br>--------<br> --|      |--<br>------` 
    } 
}) 

const restartButton = document.createElement('button') 
restartButton.textContent = 'Restart' 
body.appendChild(restartButton) 
restartButton.setAttribute('id', 'restart') 

restart.addEventListener('click',function(){ 
    clearInterval(timer); 
    time = 0 
    timerScreen.innerHTML = `_____<br>|  ${time}.00  |<br>--------<br> --|      |--<br>------` 
}) 