let myPara=document.getElementById("my-para")
console.log(myPara)

myPara.innerText="Hello Raziq";

// Query selector 

let myParaAgain=document.querySelector("p")
console.log(myParaAgain)
myParaAgain.innerText="Hello Raziq Again"

myParaAgain.style.backgroundColor="#000"
myParaAgain.style.color="#fff"

// set interval 

setInterval(function(){
    if(myPara.style.display==="none"){
    myPara.style.display="block"}
    else{
        myPara.style.display="none"
    }
},1000)

// Set Timeout
let myParaAgain2=document.getElementById("my-para")
setInterval(function(){
    let color1=Math.round(Math.random()*1000000)
    let color2=Math.round(Math.random()*1000000)
    myParaAgain2.style.backgroundColor="#"+color1
    myParaAgain2.style.color="#000"
    console.log(color1,color2)
},500)


