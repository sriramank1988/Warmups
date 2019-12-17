var days_of_the_week = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
days_of_the_week.unshift(days_of_the_week.pop())
console.log(days_of_the_week)
var days_of_the_week_array = [[days_of_the_week.splice(1,5)],[days_of_the_week]]
console.log(days_of_the_week_array)
var weekdays = days_of_the_week_array.splice(0,1)
console.log(weekdays)