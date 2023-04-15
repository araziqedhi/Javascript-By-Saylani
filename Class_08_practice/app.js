const date = new Date();
const doomzDay=new Date();
doomzDay.setFullYear(2025)
doomzDay.setMonth(3)
doomzDay.setDate(15)
console.log(doomzDay)

let difference = doomzDay.getTime()-date.getTime()
console.log(difference)

let QayamatMeTime = (difference/(1000*60*60*24*365.25)).toFixed(1)
console.log(QayamatMeTime)