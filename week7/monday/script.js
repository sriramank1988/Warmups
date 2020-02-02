console.log("Yes, you still remember!!")
listOfNumbers = [14, 5, 7, 2, 25, 10, -4, 3, 3, 25, 2, 6, 5];
function evenMultiples(num){
    if(num %2 == 0 || num %5 == 0){
        return (num);
    }
}

var result = []
result.push(listOfNumbers.filter(evenMultiples));
result.forEach(num => console.log(num))