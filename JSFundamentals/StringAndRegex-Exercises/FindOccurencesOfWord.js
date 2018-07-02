function printOccurencesNumber(text, word) {
    let regex = new RegExp('\\b'+word+'\\b' ,"gmi");
    let arrOfMatch = text.match(regex);
    console.log(arrOfMatch.length)
}

printOccurencesNumber('The waterfall was so high, that the child couldn’t see its peak.',
    'the'
);