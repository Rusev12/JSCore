function countWords(arrOfStrings) {
    let regex = /\W+/g;

    let words = arrOfStrings[0].split(regex).filter(e => e !== '').map(e => e.toLowerCase());

    let map = new Map();

    for (let word of words) {
        if(!map.has(word)){
            map.set(word , 1)
        } else {
            map.set(word , map.get(word) +1)
        }

    }

    let allWords = Array.from(map.keys()).sort();

    allWords.forEach(w => console.log(`'${w}'`+' -> '+`${map.get(w)}`+' times'))

}

countWords(['Far Far slow, you\'re far too slow.'])