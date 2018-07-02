function townsToJSON(arrOfStrings) {
    let [town , latitude , Longitude ] = arrOfStrings
        .shift()
        .split(/\s*[|]\s*/g)
        .filter(e => e!= '');

    let towns = [];

    for (let objTown of arrOfStrings) {
        let townArgs =  objTown.split(/\s*[|]\s*/g).filter(e => e!= '');
        let townObj = {};

        townObj[town] = townArgs[0];
        townObj[latitude] = Number(townArgs[1]);
        townObj[Longitude] = Number(townArgs[2]);

        towns.push(townObj);


    };

    return JSON.stringify(towns)
}

console.log(townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));