function rotate(arr) {
    let numberOfRotation = arr.pop();

    for (let i = 0; i < numberOfRotation % arr.length; i++) {

        let lastElement = arr.pop();
        arr.unshift(lastElement);
    }

    return arr.join(' ');
}

console.log(rotate(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    15
]));