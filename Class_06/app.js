// Objects 

let person = {  // Object 
    name:"Nadir", // Property
    nic : 4210191632597, // key=nic  // value = 4210191632597
    eyecolor:"brown",
    canSpeakEnglish:"yes",
    speak:function(sentence){//Method koi bh esa function jo object me ho 
    console.log(sentence+" "+this.name+" "+this.nic)
    } 
}
console.log(person)
console.log(person.name)
console.log(person.nic)
person.speak("Hello Word")

let animal = {
    name:"Lion",
    eatsMeat:true,
    eatsGrass:false,
}
let animal2 = {
    name:"Goat",
    eatsMeat:false,
    eatsGrass:true,
}
console.log(animal2.eatsMeat===animal.eatsGrass)
console.log(animal.eatsGrass===animal2.eatsMeat)

let student1={
    name:"Hamza",
    roll:420,
    teacher:"Qari Sahab",
    className:"Javascript"
}
let student2={
    name:"Amin",
    roll:421,
    teacher:"Danish",
    className:"CSS"
}

let students = [student1,student2]
console.log(students)

function provideStudent(name,roll,teacher,className){
    return{
    name:name,
    roll:roll,
    teacher:teacher,
    className:className
    }
}

let studentsAgain=[provideStudent("razq",422,"Moin","js"),provideStudent("Anas",423,"Amin","CSS")]
console.log(studentsAgain)
let prevStudents=localStorage.getItem("students1")
let students1= prevStudents ? JSON.parse(prevStudents):[] ;
function provideStudent1(){
    let std = {
    name:prompt("Enter your name"),
    roll:prompt("Enter roll"),
    teacher:prompt("Enter teacher"),
    className:prompt("Enter class name")
    }
    students1.push(std)
    console.log(students1)
    let stringify = JSON.stringify(students1) // converting into JSON
    localStorage.setItem("students1",stringify)
}

localStorage.setItem("name","raziq")   // use to store values in local storage

// JSON