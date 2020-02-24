var qs = "?title=jaws&apikey=123456&page=5"
var queryStringToObject = (str) => {
    let keyValuePairs = str.split("&")
    let keyRegex = /[\w]+(?=\=)/g
    let valueRegex = /(?<=\=)[\w]+/g
    var obj = {}
    keyValuePairs.forEach((keyValue) => {
        let key = (keyValue.match(keyRegex))
        let value = (keyValue.match(valueRegex))
        obj[key] = `${value}`
    })
    return obj
}
console.log(queryStringToObject(qs))