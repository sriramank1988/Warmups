var findWolfPosition = function(arr){  
    if( arr.indexOf('wolf') != -1){
        return (arr.length - arr.indexOf('wolf'));
    }
}
var warnTheSheep = function(arr){
    var wolfPosition = findWolfPosition(arr);
    if(wolfPosition === 1){
        console.log("Pls go away and stop eating my sheep");
    }
    else{
        var sheepPosToWarn = wolfPosition-1;
        console.log("Oi! Sheep number " + (sheepPosToWarn) + "! You are about to be eaten by a wolf!");
    }
}
warnTheSheep(["sheep", "wolf", "sheep"]);
warnTheSheep(["sheep", "sheep", "wolf"]);
warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]);
