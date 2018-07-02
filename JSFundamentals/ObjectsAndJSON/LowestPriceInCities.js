function lowestPrice(arrOfStr) {
    let townsAndProducts = [];

    for (let row of arrOfStr) {
        let [townName , product , price] = row.split(' | ').filter(e => e !== '');
        price = Number(price);

        let townObj = {Town: townName , Product : product , Price : price};
        townsAndProducts.push(townObj);

    }


}

lowestPrice(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);