var input = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5];
var findUnique = (value, index, self) => {
    return self.indexOf(value) === index;
}
var getCount =  (num) => {
    var count = 0 ;
    input.forEach((value) => {
        if (num === value){
            count++;
        }
    })
    return count;
}
var isOdd =  (num) => (num % 2 == 1);
var printOddCount = (count,index) => {
    if(isOdd(count)){
        console.log(uniqueValues[index]);
    }
}
var uniqueValues = input.filter(findUnique);
uniqueValues.map((num) => getCount(num))
.forEach(printOddCount);