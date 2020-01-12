console.log('For each Times table');
var array = [1,2,3,4,5,6,7,8,9,10];
var array1 = [1,2,3,4,5,6,7,8,9,10];
array.forEach(function(item){
    console.log("=== " + item + " times table ===");
    array1.forEach(function(item1){
        console.log(item + " X " + item1 + " = " + (item * item1));
    })
})