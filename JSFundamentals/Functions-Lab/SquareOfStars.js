function printSquare(n = 5) {

    for (let i = 0; i < n; i++) {

        printStars(n)
    }

    function printStars(count) {
        console.log('* '.repeat(count));
    }
}

printSquare(5)