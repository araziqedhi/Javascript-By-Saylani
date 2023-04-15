// Arrow Functions 

const subtract = (x,y)=>{  
    return x-y
}

const multiply = (x,y)=> x*y

console.log(subtract(4,5))
console.log(multiply(4,5))

// Optional Argument Function applied same like as of python
function printAll(x,y,...z){ //Unlimited Argument Function/rest parameter 
console.log(x,y,z)
}
printAll(5,3,5,6,5)
const firstName="Isahaq"
const obj={
    firstName:firstName
}
console.log(obj)
const lastName="Bhojani"
const obj1={
    firstName,
    lastName
}
console.log(obj1)

// Spread Operator
const arr=["ishaq","qasim","irfan"]
const newArr=[...arr]
console.log(newArr)

const arr1=["ishaq","qasim","irfan"]
const newArr2=["Some Data",...arr,"Another DAta"]
console.log(newArr2)