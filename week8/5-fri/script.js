var group = {
    A: 20, 
    B: 15, 
    C: 10
}
var sizeOfObj = 0
const total = Object.values(group).reduce((accum, value, currentIndex) => {
    sizeOfObj = currentIndex + 1
    return (accum + value)}
    , 0)
var perPersonShare = total/sizeOfObj
console.log(perPersonShare)
var splitTheBill = (obj) => { // returns {A: 5, B: 0, C: -5}
    var res = {}
    for (const [key, value] of Object.entries(obj)) {
        res = {[key]: (value - perPersonShare)}
        debugger
    }
    return res   
}
console.log(splitTheBill(group))