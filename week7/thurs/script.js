var map1 = [
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","X","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"]
    ];
var map2 = [
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","X","A","A","A"]
    ];       
var map3 = [
    ["A","A","A","A","A"],
    ["A","A","V","A","A"],
    ["A","A","A","V","A"],
    ["v","v","V","v","X"],
    ["A","V","A","A","A"]
    ];       
var map4 = [
    ["A","A","A","A","A"],
    ["A","A","V","A","A"],
    ["A","A","A","V","A"],
    ["v","v","V","v","A"],
    ["X","V","A","A","A"]
    ];

var treasureFinder = function(arrayOfArrays){
    var result = [];
    arrayOfArrays.forEach((rowArray,x) => {
        rowArray.forEach((item,y) => {
            if( item == 'X'){
                result.push(x,y)
            }
        })
    })  
    return(result)
}    
var printTreasure = function(coOrdinates){
    console.log(`Treasure Co-ordinates X = ${coOrdinates[0]} and Y = ${coOrdinates[1]}`)
}
printTreasure(treasureFinder(map1));
printTreasure(treasureFinder(map2));
printTreasure(treasureFinder(map3));
printTreasure(treasureFinder(map4));