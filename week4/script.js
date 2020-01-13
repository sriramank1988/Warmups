console.log("linked")
var map = [["A","A","A","A","A"],["A","A","A","A","A"],["A","A","A","A","A"],["A","A","A","A","A"],["A","A","A","A","A"]];
var makeFakeMap = function(num1,num2){
    num1 = Math.floor(Math.random() * map.length)
    num2 = Math.floor(Math.random() * map[0].length)
    var tempArray = map[num1];
    tempArray[num2] = 'X'
    map[num1] = tempArray;
    return(map)
}
console.log(makeFakeMap(5,5));
