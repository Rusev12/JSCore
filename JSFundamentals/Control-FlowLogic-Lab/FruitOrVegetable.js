function fruitOrVegetable(text) {
    let fruits = ['banana' , 'apple' , 'kiwi' , 'cherry' , 'lemon' , 'grapes' , 'peach']
    let vegetables = ['tomato' , 'cucumber' , 'pepper' , 'onion', 'garlic','parsley']

    if(fruits.includes(text)){
        console.log('fruit')
    }
    else if(vegetables.includes(text)){
        console.log('vegetable')
    }
    else {
        console.log('unknown')
    }
}

fruitOrVegetable('cucumber')