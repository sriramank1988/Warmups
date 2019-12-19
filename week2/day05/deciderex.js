var countHeads = 0;
var countTails = 0;
var rand = 0;
var timerID = null;
var decideWinner = function(num1){
    if (num1 == 5){
        console.log('Heads is the winner')
    }else{
        console.log('Tails is the winner')
    }
}
var coinFlip = function(){
    rand = Math.floor(Math.random() * 10);  
    if(rand % 2 == 0){
        countHeads++;
        console.log("HEADS")
    }else {
        countTails++
        console.log("TAILS")  
    }
    if(countHeads == 5 || countTails == 5){
        clearInterval(timerID);
        decideWinner(countHeads);
    }
}
timerID = setInterval(coinFlip, 1000);


