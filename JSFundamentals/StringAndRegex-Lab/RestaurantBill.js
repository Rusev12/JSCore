function printBill(order) {

    let products = order.filter((e , i) => i %2 === 0);

    let prices = order
        .filter((e , i) => i% 2 === 1)
        .map(Number)
        .reduce((a , b) => a + b);

    console.log(`You purchased ${products.join(', ')} for a total sum of ${prices}`)
}

printBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69'])