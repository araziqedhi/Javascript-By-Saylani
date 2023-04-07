// let userFavNo=prompt("Enter your fav no")
// console.log(+userFavNo+7) // To add it like a no

// Comparision Operators 
// i)== ii)=== iii)!== iv)!= v)<  vi) > vii) <=  viii)=>

console.log(5==6)   // It only compares numbrs 
console.log(5===6)  // === also compares type  . It is prefer to use ===

console.log(5=="5")
console.log(5==='5')

console.log(5!='5')
console.log(5!=="5")

console.log(7>6)
console.log(6<7)

let num1=5;
let num2=6;
console.log(num1>num2)

console.log(5>=5)
console.log(10>=5)

let user1Age=8;
let user2Age=25;
console.log(user1Age>=18)
console.log(user2Age>=18)

// Conditional Statements 
let age = +prompt("Enter your age")
if(age>=18){
    console.log("You are eligible to make NIC")
}
else if (age<18){
    console.log("Not Eligible")
}

let userFavNo1=+prompt("Enter any no")
let ComputerNo=Math.round(Math.random()*10)

if(userFavNo1===ComputerNo){
    console.log("Congrats You have won"+ComputerNo)
}
else{
    console.log("You have lost " + ComputerNo)
}

let userInput=prompt("Even or Odd")
let ComputerNo1=Math.round(Math.random()*10)
if(ComputerNo1%2==0 && userInput=="Even"){
    console.log(" The Comp generated No is Even and you have won and that is"+ ComputerNo1)
}
else if (ComputerNo1%2!==0 && userInput=="Odd"){
    console.log(" The Comp generated No is ODD  and you have won that is"+ ComputerNo1)
}
else{
    console.log("You have lost" + ComputerNo1)
}

// Loops

for (let i=1;i<=10;i++){
console.log(i)
}

for (let i=-51;i<=10;i++){
    console.log(i)
    }
let table=6
for (let i=1;i<=10;i++){
    console.log(table+"X"+i+"="+table*i)
}