function printMenu(portions , commands) {
    let countOfEatenMeals = 0;

    for (let command of commands) {
        let commandArgs =  command.split(' ');

        switch (commandArgs[0]){
            case "Serve":
                let lastProduct = portions.splice(-1);
                console.log(`${lastProduct} served!`);
                break;

            case "Eat":
                if(portions.length === 0){
                    printLeftFood(countOfEatenMeals)
                    break;
                }
                let firstProduct = portions.splice(0,1);
                console.log(`${firstProduct} eaten`);
                countOfEatenMeals ++;
                break;

            case "End":
                if(portions.length === 0){
                    printLeftFood(countOfEatenMeals)

                }else {
                    console.log(`Meals left: ${portions.join(', ')}`)
                    console.log(`Meals eaten: ${countOfEatenMeals}`)
                }
                return;

            case "Add":
                let mealToAdd =  commandArgs[1].trim();
                portions.unshift(mealToAdd);
                break;

            case "Shift" :

                let firstIndexForShift = Number(commandArgs[1].trim().split(' ')[0]);
                let secondIndexForShift = Number(commandArgs[2]);

                if(isInside(portions , firstIndexForShift , secondIndexForShift)){

                    let productForShift = portions[firstIndexForShift]
                    portions[firstIndexForShift] = portions[secondIndexForShift];
                    portions[secondIndexForShift] = productForShift;
                }

                break;

            case "Consume":
                if(portions.length === 0){
                    console.log("The food is gone")
                    break;
                }
                let firstIndex = Number(commandArgs[1].trim().split(' ')[0]);
                let secondIndex = Number(commandArgs[2])

                if(isInside(portions , firstIndex , secondIndex)){

                    portions.splice(firstIndex , secondIndex -firstIndex + 1)

                countOfEatenMeals+= secondIndex - firstIndex + 1;

                console.log(`Burp!`)
                }
                break;

        }
    }
    function isInside(arr, firstInsex, secondIndex) {
        if((firstInsex>=0 && firstInsex < arr.length) &&
            (secondIndex>= 0 && secondIndex < arr.length)){
            return true
        }
        return false
    }

    function printLeftFood( count) {

        console.log("The food is gone")
        console.log(`Meals eaten: ${count}`)
    }

}

printMenu(['carrots', 'apple', 'beet'],
    ['Add salam',
        'Shift 2 1',
        'Shift 0 1',
        'Consume 0 1',
        'Eat',

        'End',]



);
