// Array 
let months =["january","Feb","March","April","May","June","July","August","September","October","Nov","December"]
console.log(months)

// Array indexing 
console.log(months[0])
months[11]="Dec"
console.log(months)

let shouldIStore = prompt("Should we write a value in array ");
if (shouldIStore==="yes"){
    months.push("May")
}
console.log(months)

console.log(months.shift())  // remove value from 1st
console.log(months.unshift("January")) //add value from 1st
console.log(months)
months.pop()      // remove value from last 
console.log(months)
console.log(months.length) // check total quantity of values 

months.splice(11,1)
console.log(months)
months.splice(0,2)  // splice removes values from specific position
console.log(months)
months.unshift("January","February")
console.log(months)
months.push("December")
console.log(months)

months.splice(3,4,"April","May") // Replace values 
console.log(months)


let newArray =months.slice(0,2)  // provide a new copy of array

console.log(newArray)
console.log(months)

let array = [1,2,3,4,5];
array.forEach(function(val,index){
console.log(index,val)
})

let array2=["apple","orange","mango"]
array2.forEach(function(val,index){
    console.log(index,val)
    })
let array3=["apple","orange","mango"]
array3.forEach(function(val,index,arr){
console.log(index,val,arr)
})

let array4=[1,2,3,4,5,6]
let filteredArray=array4.filter(function(value){
    if(value%2===0){
        return true
    }
    else{
        return false 
    }
}


)
console.log(filteredArray)

let array5=[1,2,3,4,5,6]
let filteredArray5=array5.filter(function(value){
    return value %2 !==0
}
)
console.log(filteredArray5)

// Array Sorting 

let array6=[5,3,673,764,26]
let sortedArray=array6.sort(function(a,b){
    if (a>b){
        return 1
    }
    else{
        return -1
    }
})
console.log(sortedArray)

let array7=[5,3,673,764,26]
let sortedArray1=array7.sort(function(a,b){
    if (a>b){
        return -1
    }
    else{
        return 1
    }
})
console.log(sortedArray1)

// Reduce 

let array8=[5,3,673,764,26]
let reducedArray=array8.reduce(function(previousvalue,currentvalue){
    return previousvalue + currentvalue
},0)
console.log(reducedArray)

let array9 = ["happy","Birthday","Abdul","Ameen"]
let reducedArray1=array9.reduce(function(previousvalue,currentvalue){
    return previousvalue +" "+ currentvalue
},"")
console.log(reducedArray1)