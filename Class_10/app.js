// Synchronous behaviour of js which is also a natural behoviore of js 
alert("hello world")
console.log("Hellow Pakistan")

for (let i=1;i<=500;i++){
    console.log(i)
}
console.log("Pakistan")

// Asunchronous Function 

function runAfterSecond(){
   setTimeout(function(){
        console.log("Hello Raziq 1st")
    },2000)
}
runAfterSecond()
console.log("Hello Raziq 2nd")

// CallBacks 
function runAfterSecond(cb){
    setTimeout(function(){
         console.log("Hello Raziq 1st")
         cb()
     },2000)
 }
 function toBeExecutedWhenDone(){
    console.log("yes its done")
 }
 runAfterSecond(toBeExecutedWhenDone)
 console.log("Hello Raziq 2nd")

 // promises 



 // Async / Await
 