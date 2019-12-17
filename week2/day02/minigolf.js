// var Bob = {
//     Hole1 : 3,
//     Hole2 : 2,
//     Hole3 : 6,
//     Hole4 : 11,
//     Hole5 : 9,
//     Hole6 : 2,
//     Hole7 : 6,
//     Hole8 : 9,
//     Hole9 : 10
    
// }

// var Jimbo = {
//     Hole1 : 5,
//     Hole2 : 12,
//     Hole3 : 9,
//     Hole4 : 22,
//     Hole5 : 13,
//     Hole6 : 7,
//     Hole7 : 16,
//     Hole8 : 10,
//     Hole9 : 11
// }
// var Fish = {
//     Hole1 : 2,
//     Hole2 : 2,
//     Hole3 : 4,
//     Hole4 : 5,
//     Hole5 : 4,
//     Hole6 : 3,
//     Hole7 : 6,
//     Hole8 : 4,
//     Hole9 : 1
// }
// var Par = {
//     Hole1 : 3,
//     Hole2 : 4,
//     Hole3 : 5,
//     Hole4 : 5,
//     Hole5 : 3,
//     Hole6 : 3,
//     Hole7 : 4,
//     Hole8 : 3,
//     Hole9 : 5
// }
var bob = {
    hole : [3,2,6,11,9,2,6,9,10],
    score : 0
}
var jimbo = {
    hole : [5,12,9,22,13,7,16,10,11],
    score : 0
}
var fish = {
    hole : [2,2,4,5,4,3,6,4,1],
    score : 0
}
var par= {
    hole : [3,4,5,5,3,3,4,3,5]
}
var calculateScore = function(obj){
for(var i =0; i< obj.hole.length; i++){

    obj.score += obj.hole[i];
}
return obj.score;
}

var comparePar = function(obj1,obj2){
    console.log("Scores compared to Par")
for(var i = 0; i<obj1.hole.length; i++){
    console.log("Round " + (i+1) + " " + (obj1.hole[i]-obj2.hole[i]))
}
}

console.log("Bob total: " + calculateScore(bob));
console.log("Jimbo total: " + calculateScore(jimbo));
console.log("Fish total: " + calculateScore(fish));
console.log("Bob"); 
comparePar(par,bob);
console.log("Jimbo")
comparePar(par,jimbo);
console.log("Fish")
comparePar(par,fish)