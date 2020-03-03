let honeyJars = []
var initializeJars = (jars) => {
    for(i = 0 ; i < 100 ; i++){
        jars[i] = 'close'
    }   
}

var toggleJar = (jar) => {
    if(jar === 'open'){
        return ('close')
    }
    else{
        return ('open')
    }
}

var visitJars = (jars,noOfVisit) => {
    for(i = noOfVisit - 1; i < 100; i = i + noOfVisit){
        jars[i] = toggleJar(jars[i])
    }
}

initializeJars(honeyJars)
for(let noOfVisit = 1; noOfVisit < 100; noOfVisit++){
    visitJars(honeyJars,noOfVisit)
}
console.log(honeyJars)