function printValidDates(arrOfDates) {
    let pattern = /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})/g;
    let result = [] , match;

    for (let obj of arrOfDates) {
        while (match = pattern.exec(obj)){
            result.push(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`)
        }
    }
    console.log(result.join('\n'))

}

printValidDates(['I am born on 30-Dec-1994.', 'This is not date: 512-Jan-1996.'])