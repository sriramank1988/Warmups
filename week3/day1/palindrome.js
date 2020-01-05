var inputStr = "A nut for a jar of tuna".toLowerCase();
var removeSpace = function(str){
    var strLength = str.length;
    var noSpaceStr = '';
    for(var i = 0; i < strLength; i++){
        if(str[i] != ' '){
        noSpaceStr = noSpaceStr.concat(str[i]);
        }
    }
    return(noSpaceStr);
}
var reverseStr = function (str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
var isPalindrome = function(str1,str2){
    return(str1 === str2)
}
var inputNoSpace = removeSpace(inputStr);
var reverseInput = reverseStr(inputNoSpace);
console.log(isPalindrome(inputNoSpace,reverseInput));