function townsAndProducts(arrOfStrings) {

    let towns = new Map();

    for (let town of arrOfStrings) {
        let [townName , product] = town.split(' -> ').splice(0,2);
        let prices = town
            .split(' -> ')
            .slice(-1)[0]
            .split(':')
            .map(Number)
            .reduce((a , b) => a* b);

        if(!towns.has(townName)){
            towns.set(townName , new Map())
        }

        if(!towns.get(townName).has(product)){
            towns.get(townName).set(product , 0)
        }
        let oldSales = towns.get(townName).get(product);

        towns.get(townName).set(product ,oldSales + prices);

    }

    for (let [town, products] of towns) {
        console.log(`Town - ${town}`)
        for (let [product , sales] of products) {
            console.log(`$$$${product} : ${sales}`)
        }
    }

}

townsAndProducts(['Sofia -> Laptops HP -> 200 : 2000',
'Sofia -> Raspberry -> 200000 : 1500',
'Sofia -> Audi Q7 -> 200 : 100000',
'Montana -> Portokals -> 200000 : 1',
'Montana -> Qgodas -> 20000 : 0.2',
'Montana -> Chereshas -> 1000 : 0.3'
])