function printJuiceAndBottles(arr) {

    let map = new Map();
    let filledJuice = new Set();

    for (let juice of arr) {
        let [juiceName , quantity] = juice.split(' => ');
        quantity = Number(quantity);
        if(!map.has(juiceName)){
            map.set(juiceName , 0);
        }
        let oldQuantity = map.get(juiceName);
        map.set(juiceName , quantity + oldQuantity);

        if(map.get(juiceName) >= 1000){
            filledJuice.add(juiceName)
        }

    }


    for (let juice of filledJuice) {
        let totalBottles =  parseInt(map.get(juice ) / 1000);
        console.log(`${juice} => ${totalBottles}`)
    }

}

printJuiceAndBottles(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'

]);