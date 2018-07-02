function printPopulation(arrOfStrings) {
    let map = new Map();

    for (let town of arrOfStrings) {
        let townArgs = town.split(' <-> ')
        let [townName , population] =  [townArgs[0] , Number(townArgs[1])]
        if(!map.has(townName)){
            map.set(townName , population)
        } else {
            map.set(townName , map.get(townName) + population)
        }

    }

    for (let [name , pop] of map) {
        console.log(`${name} : ${pop}`)
    }

}
printPopulation(['Sofia <-> 1200000',
'Sofia <-> 20',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000'
])