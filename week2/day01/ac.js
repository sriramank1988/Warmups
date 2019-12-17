var isAcFunctional = prompt('Is Ac functional, Please type Yes are No')
var desiredTemp = Number(prompt('What temperature do you wish it was?'))
var currentTemp = 16
if(isAcFunctional === 'Yes' && currentTemp > desiredTemp){
    console.log('Please turn on the AC')
}else if(isAcFunctional === 'No' && currentTemp > desiredTemp){
    console.log('Fix the A/C now, its hot!!')
}else if(isAcFunctional === 'No' && currentTemp <= desiredTemp){
    console.log('Fix the A/C whenever you have a chance, it is cool.')
}else{
    console.log('Consider turning of the A/C, it is cool outside')
}