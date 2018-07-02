function printUniqueWords(text) {
    let uniqueWords = new Set();

    let regex = /\W+/g;

    for (let word of text) {
        let words = word.split(regex).filter(e  => e !== '').map(e => e.toLowerCase()).forEach(e => uniqueWords.add(e));


    }

    console.log([...uniqueWords.values()].join(', '))
}
printUniqueWords(['Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    'Vestibulum volutpat lacinia blandit.',
    'Pellentesque dignissim odio in hendrerit lacinia.',

])