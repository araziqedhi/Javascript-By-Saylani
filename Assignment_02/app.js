// Question 01

function closureFunction(num1){
    console.log(num1)
    return function(num2){
        console.log(num2)
        return (num1 + num2)
        
    }
}
let innerFunction = closureFunction(9)
let innerFunction2=innerFunction(8)
console.log(innerFunction2)

// Question 02

function searchArray (array,value){
    if (array.length===0){    // Base Case for empty array 
        return false
    }
    else if (array[0]===value){
        return true
    }
    else{
        searchArray(array.slice(1),value)
        return true
    }
}
let myarr=[2,45,3]
console.log(searchArray(myarr,45))

// Question 03

function newParagraph(text){
   let para= document.querySelector('p')
   console.log(para)
   para.innerText=text
}
newParagraph("Raziq")

function createPara(text){
    const createPara = document.createElement("p")
    const textNode=document.createTextNode(text)
    createPara.appendChild(textNode)
    document.body.appendChild(createPara)
    createPara.style.color="white"
    createPara.style.backgroundColor="black"
}
createPara("My name is Khan ")

// Question 04

function createList(...text){
    const unorderedList = document.createElement("ul")
    for (const item of text) {
    const ListItem = document.createElement("li")
    const textNode=document.createTextNode(item)
    ListItem.appendChild(textNode)
    unorderedList.appendChild(ListItem)
    document.body.appendChild(unorderedList)}   
}
createList("raziq","hamza","Javed","Imran Khan")

// Question 05 


function backgroundColor(id,color){
    const userGivenId=document.getElementById(id)
    userGivenId.style.backgroundColor=color
    return userGivenId.style.backgroundColor
}
backgroundColor("red","#fff")
backgroundColor("red","#000")
backgroundColor("red","red")

// Question 06


function saveToLocalStorage(key,value){
    localStorage.setItem(key,JSON.stringify(value))
}

saveToLocalStorage("name","raziq")
saveToLocalStorage("id",234)

// Question 07


function retrieveFromLocalStorage(key) {
    try {
      const storedData = localStorage.getItem(key);
      console.log(storedData);
      return JSON.parse(storedData);
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  
  retrieveFromLocalStorage("id");
  retrieveFromLocalStorage("id1");
  retrieveFromLocalStorage("name");

  // Question 08

function saveObjectToLocalStorage(obj) {
    // Iterate over each property in the object
    for (let prop in obj) {
      // Use the property name as the key and the property value as the value
      localStorage.setItem(prop, obj[prop]);
    }
  
    // Retrieve the object from localStorage
    let newObj = {};
  
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      newObj[key] = localStorage.getItem(key);
    }
  
    // Return the new object
    return newObj;
  }
let myObj = {
    name1: "John",
    age: 30,
    city: "New York"
  };
  
  let newObj = saveObjectToLocalStorage(myObj);
  
  console.log(newObj); // { name: "John", age: "30", city: "New York" }
  