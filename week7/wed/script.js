var input = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"];
var removeItem = function(str){
    index = input.indexOf(str)
    input.splice(index,1);
}
var gooseFilter = function(arrayOfStrings){
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
    var matchFound = [];
    for(var i = 0; i < arrayOfStrings.length; i++){
        for(var j = 0; j < geese.length ; j++){
            if(arrayOfStrings[i] === geese[j]){
                matchFound.push(arrayOfStrings[i]);   
            }
        }
    }
    matchFound.forEach(removeItem);
}
console.log(input);
gooseFilter(input);
console.log(input);

