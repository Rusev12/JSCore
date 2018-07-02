function printCount(arrOfStrings) {
    let regex = /\W+/g;

    let words = arrOfStrings[0].split(regex).filter(e => e !== '');


    let wordsAndCount = {};

    for (let word of words) {

        if(wordsAndCount[word] === undefined){
            wordsAndCount[word] = 0;
        }
        wordsAndCount[word] ++;

    }

    console.log(JSON.stringify(wordsAndCount))
}

printCount(['Far Far slow, you\'re far too slow.'])