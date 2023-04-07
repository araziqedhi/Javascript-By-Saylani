// Functions 

function greet (){          // Custom Function
console.log("Hello World")  // Built in Functions
}
greet();
greet();
greet();
greet();

function greetDynamic (studentName){
    console.log("Hello"+studentName)
}

greetDynamic("Raziq")
greetDynamic("Wajahat")

function employee (fileNo){
    console.log("Working on file no"+ fileNo)
}
employee(9)
employee(5)

function employee1 (fileNo){
    return "Working on file no"+ fileNo
}
employee1(9)
employee1(5)
let data = employee1(8)
console.log(data)

function add(num1,num2){
    return num1+num2
}

let dataAddition = add(5,2)
console.log(dataAddition)

// Recursion 

/* function writeData(dataUser,times){
    return document.write(dataUser)
    if (times >0){
        writeData(dataUser,times-1)
    }
} */
 // writeData("Hello",5)

function factorial(num){
    if(num>1){
        return num * factorial(num-1)
    }
    return 1
}
console.log(factorial(5))

// Scopes

// Global Scope => Whole file
// Child Scope => Inside a function


 
let abc =7; // Global Scope
function print () {
    let abcd = 14 ; // Local Scope
    console.log(abc)
    console.log(abcd)
    return function (){  //Anonymous Function
        let efg = 89
        console.log(abcd)
    }
}

print()
let innerFunction = print()
innerFunction()
// Closures 