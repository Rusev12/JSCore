function printMap(arrOfStrings) {

    let townsAndIncome = {};

    for (let i = 0; i < arrOfStrings.length; i+=2) {

        let [town , income] = [arrOfStrings[i] , Number(arrOfStrings[i + 1])];
        if(townsAndIncome[town] == undefined){
            townsAndIncome[town] = income;
        } else {
            townsAndIncome [town] += income;
        }
    }

    return JSON.stringify(townsAndIncome)


}

console.log(printMap(['Sofia',
    '20',
    'Varna',
    '3',
    'Sofia',
    '5',
    'Varna',
    '4',
]));;