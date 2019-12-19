var coinFlip = function(){
    var rand = Math.floor(Math.random() * 10);     // returns a random integer from 0 to 9
    if(rand % 2 == 0){
        return "HEADS";
     } else {
         return "TAILS";
     }
}
var decideWinner = function(num1){
    if (num1 == 5){
        console.log('Heads is the winner')
    }else{
        console.log('Tails is the winner')
    }
}
var countHeads = 0;
var countTails = 0;
while(countHeads <5 && countTails <5){
    var result = coinFlip();
    console.log(result);
    if(result === 'HEADS')
    {
        countHeads++;
    }else{
        countTails++;
    }
}
decideWinner(countHeads);
