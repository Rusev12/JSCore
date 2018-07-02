function printUsernames(arrOfUsernames) {
    let uniqueUsernames = new Set();

    for (let user of arrOfUsernames) {
        uniqueUsernames.add(user)
    }

    let order = Array.from(arrOfUsernames).sort((a , b) => orderByLength(a, b));

    function orderByLength(a, b) {
        return a.length - b.length || a.localeCompare(b);
    }

    console.log(order.join('\n'));
}

printUsernames(['Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot'

]);