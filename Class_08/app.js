// js Date and Time 
const date = new Date() // Date here is an example of JS Classes
console.log(date)
console.log(date.getDate())
console.log(date.getDay())
console.log(date.getHours())
console.log(date.getMonth())
console.log(date.getFullYear())
console.log(date.getMinutes())
console.log(date.getUTCDay())

date.setDate(15)
console.log(date)

const doomzDay= new Date()
doomzDay.setDate(15)
doomzDay.setMonth(11)
doomzDay.setFullYear(2025)
doomzDay.setHours(0)
doomzDay.setMinutes(0)
console.log(doomzDay)

const date1= new Date()
console.log(date1)

console.log(date1.getTime(),doomzDay.getTime())

let difference = doomzDay.getTime()-date1.getTime()
console.log(difference)
console.log((difference/(1000*60*60*24*365.25)).toFixed(1))

