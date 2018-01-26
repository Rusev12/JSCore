function printNumbersInText(arrOfString) {
    let numbers = [];
    let pattern = /\d+/gm;
    for (let text of arrOfString) {
        let match = text.match(pattern);
        if (match){
            match.forEach(e => numbers.push(e)  )
        }
    }

    return numbers.join(' ');
}

console.log(printNumbersInText(['The300',
    'What is that?',
    'I think it’s the 3rd movie.',
    'Lets watch it at 22:45'
]));