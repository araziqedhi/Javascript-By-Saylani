// Question 01

let firstNo=+prompt("Enter first no")
let secondNo = +prompt("Enter second no")
if (firstNo > secondNo){
    console.log("The biggest is here "+firstNo)
}
else if (secondNo > firstNo){
    console.log("The biggest is here "+secondNo)
}
else {
    console.log("Both numbers are equal")
}

// Question 02

let favNo=prompt("Enter your no")
if (favNo >0){
    alert("+ve sign")
}
else if(favNo<0){
    alert("-ve sign")
}
else{
    alert("Number is 0")
}

// Question 03

let firstNumber = +prompt("Enter the first number");
let secondNumber = +prompt("Enter the second number");
let thirdNumber = +prompt("Enter the third number");
let fourthNumber = +prompt("Enter the fourth number");
let fifthNumber = +prompt("Enter the fifth number");
let largest = firstNumber
if(secondNumber>largest){
    largest = secondNumber
} 
if(thirdNumber>largest){
    largest = thirdNumber
} 
if(fourthNumber>largest){
    largest = fourthNumber
} 
if(fifthNumber>largest){
    largest = fifthNumber
} 
console.log(" largest no is "+largest)


 
// Question 04

for (let i=0;i<=15;i++){
    if (i%2==0){
        console.log(i+" The number is even")
    }
    else{
        console.log(i+" The number is odd")
    }
}

// Question 05 

let maths=+prompt("Enter your marks in maths")
let english=+prompt("Enter your marks in english")
let science=+prompt("Enter your marks in science")
let computer=+prompt("Enter your marks in computer")

let percentage = ((maths+english+science+computer)/400)*100
if (percentage>=90){
    console.log("The student scored A Grades")
}
else if (percentage>=80){
    console.log("The student scored B Grades")
}
else if (percentage>=70){
    console.log("The student scored C Grades")
}
else if (percentage>=60){
    console.log("The student scored D Grades")
}
else if (percentage<60){
    console.log("The student scored F Grades")
}

// Question 06 

for (let i =1;i<=100;i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz"+i)
    }
    else if (i%3==0){
        console.log("Fizz"+i)
    }
    else if (i%5==0){
        console.log("Buzz"+i)
    }
}

// Question 07

for (let i=1;i<=5;i++){
    if(i==1){
        console.log("*")
    }
    else if(i==2){
        console.log("**")
    }
    else if(i==3){
        console.log("***")
    }
    else if(i==4){
        console.log("****")
    }
    else if(i==5){
        console.log("*****")
    }

}