//const _ = require('loadash')
//encrypt("This is a test!", 1)

var encrypter = (str) => {
    let oddletters = ""
    let evenletters = ""
    for(let i =0 ; i < str.length ; i++){
        if(i % 2 === 0){
            evenletters += str[i]
        }
        else{
            oddletters += str[i]
        }        
    }
    return(oddletters + evenletters)
}
let originalStr = "This is a test!"
let n = 5
let result = encrypter(originalStr)
while (n !== 0){
    n--;
    if (n == 0){
        console.log(result)
    }else{
        result = encrypter(result)
    }
}