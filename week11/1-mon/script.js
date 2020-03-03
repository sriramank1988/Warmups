const fs = require('fs');
var textByLine = fs.readFileSync("./file.txt").toString().split("\n");
var dataProcessingOutput = {}
for( i = 1; i < textByLine.length; i++){ 
    var lineToWords = textByLine[i].split(',');
    var totalPrice = lineToWords[2] * lineToWords[3];
    var customerName = lineToWords[0];

    drugTransactionDetails = {
        product: `${lineToWords[1]}`,
        unitPrice: `${lineToWords[2]}`,
        units: `${lineToWords[3]}`,
        totalPrice: `${totalPrice.toFixed(2)}`
    }
    if(dataProcessingOutput[customerName] !== undefined){
        dataProcessingOutput[customerName].push(drugTransactionDetails)
    }
    else{
        dataProcessingOutput[customerName] = [drugTransactionDetails]
    }
}
console.log(dataProcessingOutput)


// for( i = 1; i < textByLine.length; i++){ 
//     var lineToWords = textByLine[i].split(',');
//     var customerName = lineToWords[0];

// }