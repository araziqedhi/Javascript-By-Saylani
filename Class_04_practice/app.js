// Functions 

function greet(){
console.log("Hello World")   // without argument or static function
}

greet()

function dynamicGreet(studentName){
console.log("welcome"+studentName)   //argument or Dynamic function
}
dynamicGreet("Abdul")

function checkFileNo(fileNo){
return ("Pick file no "+fileNo)
}
console.log(checkFileNo(10))
console.log(checkFileNo(13))

function addNo(num1,num2){
    return num1+num2 
}
let dataAddition = addNo(23,44)
console.log(dataAddition)

// Recursion or Recursive Function 


function writeData(data,times){
    
    if (times>0){
        document.write(data)
        writeData(data,times-1)
    }
}
writeData("Abdul",3)

writeData("Badshah",2)

function factorial(num){
    if (num>1){
       return num*factorial(num-1)
    }
    else{
        return 1
    }
}
console.log(factorial(5))

// Closures => Scopes
// Global Scope => whole file
// local scope => inside function

let abc = 7; // Global Scope
function print (def) {
    //  def = local scope
    return function (ghi) { // anonymous function
      console.log(def + ghi)
     }
 }

 let innerFunction = print(7);
 let innerFunction2 = print(8);
 innerFunction(7)
 innerFunction2(5)

 let innerFunction3=print(40);
 innerFunction3(30)
 
 function saveUrl (url) {
     return function () {
         fetch(url)
             .then(response => response.json())
             .then(json => console.log(json))
     }
 }
// // SAVE URL 
let makesRequest = saveUrl("https://jsonplaceholder.typicode.com/todos");

// // Request attempt
 makesRequest();
 makesRequest();

 function multiplyNos(num1){
    return function(num2){     // Anonymous Function
        console.log(num1*num2)
    }
 }
let innerFunction4=multiplyNos(10)
innerFunction4(43)