function printCarAndBrand(arrOfCars) {
    let allCars = new Map();

    for (let car of arrOfCars) {

        let [carName , brand , producedCars] = car
            .split(' | ')
            .filter(c => c !== '');

        producedCars = Number(producedCars);

        if(!allCars.has(carName)){
            allCars.set(carName , new Map())
        }
        if(!allCars.get(carName).has(brand)){
            allCars.get(carName).set(brand , 0)
        }
        let oldValue = allCars.get(carName).get(brand);
        allCars.get(carName).set(brand , oldValue + producedCars);

    }

    for (let car of allCars) {

        let carName = car[0];
        console.log(carName)
        let carModels = [...car[1].entries()].forEach(e => console.log('###'+e.join(' -> ')))

    }
}

printCarAndBrand(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);