var input = prompt('Grandma : Hey Sonny! whats up? please type your response');
while (input !== "BYE"){            //Exit Condition
    if(input !== input.toUpperCase()){          //Check if uppercase
        input = prompt("HUH?!  SPEAK UP, SONNY!")           //not uppercase
    }
    else{                                   //Yes it is uppercase
        var randYear = Math.floor(Math.random() * (1950 - 1930) + 1930)
        input = prompt("NO, NOT SINCE " + randYear + "!")
    }
}
console.log("BYE Sonny!!!!")