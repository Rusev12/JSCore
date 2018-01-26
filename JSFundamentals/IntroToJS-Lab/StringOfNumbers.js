function stringOfNumbers(number) {
    let numberToParse = Number(number);
    let result = "";
    for(i = 1; i <= numberToParse; i++ ){
       result+= i;
    }

    return result;
}

console.log(stringOfNumbers("11"));