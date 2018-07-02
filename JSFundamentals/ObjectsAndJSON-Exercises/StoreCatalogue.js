function printCatalogue(arr) {
    let products = new Map();

    for (let prod of arr) {
        let firstLetter = prod[0];
        let arrOfWords = new Set();

        if(!products.has(firstLetter)){
            products.set(firstLetter , new Set() );
        }

        for (let row of arr) {
            if(row.startsWith(firstLetter)){
                arrOfWords.add(row);
            }
        }

        products.set(firstLetter , arrOfWords);
    }

    //Order by keys
    let arrOrder = [...products.entries()].sort();

    for (let obj of arrOrder) {

        let letter = obj[0];

        console.log(letter);

        let args = [...obj[1]].map(e => e.split(':'));

        let orderArray = [];
        for (let pr of args) {
            let productName = pr[0];
            let quantity = pr[1];
            orderArray.push("  "+productName.trim() + ':'+quantity);
        }


        orderArray = orderArray.sort(function(a,b){
            return a.localeCompare(b);
        }).forEach(e => console.log(e));

    }
}

printCatalogue(['Banana : 2',
    "Rubic's Cube : 5",
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'
]);