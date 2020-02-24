let [,,startDate,endDate] = process.argv
const monthNumberToName =['X','January','February','March','April','May','June','July','August','September','October','Novemeber','December']
var ordinanalConversion = (cardinal) => {
    cardinal = Number(cardinal)
    if (cardinal === 11 | cardinal === 12 | cardinal === 13){
        return(`${cardinal}th`)
    }else if (cardinal % 10 === 1){
        return(`${cardinal}st`)
    }else if(cardinal % 10 === 2){
        return (`${cardinal}nd`)
    }else if(cardinal % 10 === 3){
        return (`${cardinal}rd`)
    }else{
        return (`${cardinal}th`)
    }
}
var dateToObj = (date) => {
    let dateObj = {day: "", mon: "", year: ""}
    let dateArray = date.split('-')
    dateObj.day = Number(dateArray[2])
    dateObj.mon = Number(dateArray[1])
    dateObj.year = Number(dateArray[0])
    return (dateObj)
}
var isSameYear = (dateObj1, dateObj2) => {
    console.log(dateObj1,dateObj2)
    return (dateObj1.year === dateObj2.year)
}
var isLessThanYear = (dateObj1, dateObj2) => {
    let difference = (dateObj2.year * 365 + dateObj2.mon * 30 + dateObj2.day) - (dateObj1.year * 365 + dateObj1.mon * 30 + dateObj1.day)
    return (difference < 360)
}
var friendlyDisplay = (object1,object2) =>{
    if(isSameYear(object1,object2)){
        if(object1.mon === object2.mon){
            console.log(`[${monthNumberToName[object1.mon]} ${ordinanalConversion(object1.day)}, ${ordinanalConversion(object2.day)}]`)
        }
        else{
            console.log(`[${monthNumberToName[object1.mon]} ${ordinanalConversion(object1.day)}, ${monthNumberToName[object2.mon]} ${ordinanalConversion(object2.day)}]`)
        }
    }else if(isLessThanYear(object1,object2)){
        console.log(`[${object1.year} ${monthNumberToName[object1.mon]} ${ordinanalConversion(object1.day)}, ${monthNumberToName[object2.mon]} ${ordinanalConversion(object2.day)}]`)
    }else{
        console.log(`[${object1.year} ${monthNumberToName[object1.mon]} ${ordinanalConversion(object1.day)}, ${object2.year} ${monthNumberToName[object2.mon]} ${ordinanalConversion(object2.day)}]`)
    }
}
let startDateObj = dateToObj(startDate)
let endDateObj = dateToObj(endDate)
friendlyDisplay(startDateObj,endDateObj)