function Capitalize(text) {
    let words = text.split(' ');
    let capitalizedText = '';

    for (let word of words) {
        capitalizedText += word[0].toUpperCase();
        capitalizedText += word.slice(1).toLowerCase();
        capitalizedText += ' '
    }
    return capitalizedText;
}

console.log(Capitalize('Capitalize these words'));