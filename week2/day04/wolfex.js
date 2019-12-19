var findWolfPosition = function(arr){  
    if( arr.indexOf('wolf') != -1){
        return (arr.length - arr.indexOf('wolf'));
    }
}
var warnTheSheep = function(arr){
    var wolfPosition = findWolfPosition(arr);
    if( wolfPosition === undefined){
        console.log("Easy days!!! No wolf spotted!")
    }
    else{
        if(wolfPosition === 1){
            console.log("Pls go away and stop eating my sheep");
        }
        else{
            console.log("Oi! Sheep number " + (wolfPosition-1) + "! You are about to be eaten by a wolf!");
        }
    }
}
warnTheSheep(["sheep", "wolf", "sheep"]);
warnTheSheep(["sheep", "sheep", "wolf"]);
warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]);
warnTheSheep(["sheep", "sheep", "sheep"]);
