var chessStr = "";
var size = 10;
var symbol ="&"
for(var i = 0; i < 4; i++){
    for(var j = 0; j < size; j++){
        chessStr = chessStr.concat(`${symbol} `);
    }
    chessStr = chessStr.concat("\n");
    if( i%2 == 0)
    chessStr = chessStr.concat(" ")
}
console.log(chessStr)