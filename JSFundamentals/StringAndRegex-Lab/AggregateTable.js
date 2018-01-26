function aggregate(arr) {
    let towns = [];
    let sum = 0;

    for (let obj of arr) {
        let town = obj.split('|')[1].trim();
        sum += Number(obj.split('|')[2].trim());
        towns.push(town)
    }

    console.log(towns.join(', '))
    console.log(sum);
}

aggregate(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
);