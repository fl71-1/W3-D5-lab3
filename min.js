let stopButton = document.getElementById('stopButton')
let slowButton= document.getElementById('slowButton')
let goButton=document.getElementById('goButton')

let stopLight=document.getElementById('stopLight')
let slowLight =document.getElementById('slowLight')
let goLight =document.getElementById('goLight')

stopButton.addEventListener("click",function(){
    stopLight.style.backgroundColor="red";
    goLight.style.backgroundColor="black";
    slowLight.style.backgroundColor="black";



})
slowButton.addEventListener("click",function(){
    slowLight.style.backgroundColor="yellow";
    goLight.style.backgroundColor="black";
    stopLight.style.backgroundColor="black";

})
goButton.addEventListener("click",function(){
    goLight.style.backgroundColor="green";
    stopLight.style.backgroundColor="black";
    slowLight.style.backgroundColor="black";



})
