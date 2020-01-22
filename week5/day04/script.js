console.log ("linked")

var series_sum = function(num){
    var series = 0
    var divider = 1
    if(num == 0)
        console.log(num.toFixed(2).toString())
    else
        for(var i = 0; i< num ; i++){
            series += (1.00/divider)
            divider +=3
        }
        console.log(series.toFixed(2).toString())
}
series_sum(0)
series_sum(1)
series_sum(2)
series_sum(5)
