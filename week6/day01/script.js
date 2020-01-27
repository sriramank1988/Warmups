console.log("Linked Js file properly")
var swapCase = function(inputStr){
    var outputStr = "";
    for(var i = 0; i<inputStr.length; i++){
        if(inputStr[i] === inputStr[i].toLowerCase()){
            outputStr += inputStr[i].toUpperCase();
        }else {
            outputStr += inputStr[i].toLowerCase();
        }
    }
    return outputStr;
}

var substituteSymbol = function(inputStr){
    var substitutedString = inputStr.replace(/[ .]/gi,'_');
    return substitutedString
}

var text = 'SomE_rAndoM TexT.';
console.log(`Input Str : ${text}`);
swapStr = swapCase(text);
console.log(`SwAp CaSe String : ${swapStr}`);
console.log(`SwAp CaSe String with symbol substitution : ${substituteSymbol(swapStr)}`);