function calculateLettersInString(string , letter) {
    let count = 0;
    for(i = 0; i < string.length; i++ ){
        if(string[i] == letter){
            count++;
        }
    }

    return count;
}

console.log(calculateLettersInString('hello', 'l'));