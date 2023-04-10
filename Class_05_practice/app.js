
let months =["january","Feb","March","April","May","June","July","August","September","October","Nov","December"]
months[11]="dec"
console.log(months)
let months2=months.slice()

let shouldIStore = prompt("yes or no")
if (shouldIStore==="yes"){
    months2.push("December2")
}
console.log(months)
console.log(months2)

console.log(months2.shift())
console.log(months2.unshift("Jan"))
console.log(months2)
console.log(months2.pop())
console.log(months2)
months2.pop()
months2.push("December")
console.log(months2)

months2.splice(0,3,"Jan","Feb","Mar")
console.log(months2)
months3=months2.slice(0,3)
console.log(months3)
console.log(months2)

let array = [1,2,3,4,5];
let array2 = array.forEach(function(index,value){
    console.log(index,value)
})
let string = ["Raziq","usama","Aijaz"]
let newString = string.forEach(function(value,index,arr){
    console.log(index,value,arr)
})

let array3=[1,2,3,4,5,6,7,8,9,10]
let array4=array3.filter(function(value,index){
    console.log(value,index)
    return value%2 ===0
    
})
console.log(array4)

let array8=[5,3,673,764,26]
let reducedArray=array8.reduce(function(previousvalue,currentvalue){
    return previousvalue + currentvalue
},0)
console.log(reducedArray)

let array9 = [2,44,5,5,5,5]
let reducedArray9=array9.reduce(function(currentvalue,previousvalue){
return currentvalue+previousvalue
},0)
console.log(reducedArray9)

let array10=["Happy","Bithday","Raziq"]
let reducedArray10 = array10.reduce(function(currentvalue,previousvalue){
return currentvalue +" "+ previousvalue
},"")
console.log(reducedArray10)
