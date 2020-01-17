decrptBtn = document.querySelector("button")
input = document.querySelector(".input")
var decrypt = function(str,num){
    var decryptChar =''
    var output = ''
    for (var i = 0; i < str.length; i ++) {
        decryptChar = str[i]
        var code = str.charCodeAt(i)
        if ((code >= 68) && (code <= 90) || (code >= 100) && (code <= 122)){
            decryptChar = String.fromCharCode(code - num);
        }
        else if((code >=65) && (code <= 67) || (code >=97) && (code <= 99)){
            decryptChar = String.fromCharCode(code - num + 26);
        }
        output += decryptChar;
    }
    document.querySelector("label").textContent = output
}
decrptBtn.addEventListener('click',function(){
    cipher = input.value
    decrypt(cipher,3)
})