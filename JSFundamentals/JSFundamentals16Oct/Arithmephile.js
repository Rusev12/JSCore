function printBiggestMiltiplication(arr) {
    let biggestMultiplication = Number.NEGATIVE_INFINITY;

    arr = arr.map(Number);
    let length = arr.length;
    for (let i = 0; i < length; i++) {

        if(arr[i] >=0 && arr[i]<=9){

            let nextNNumbers = Number(arr[i]);

            if(i !== arr.length - 1 && arr[i ] > 0) {
                let multiplication = arr.slice(i +1 , nextNNumbers + i +1 ).reduce((a ,b) => a * b);


                if(multiplication >= biggestMultiplication ){
                    biggestMultiplication =  multiplication
                }
            }

        }
    }

    console.log(biggestMultiplication)
}


printBiggestMiltiplication(['9','5652','5652','9190','4172','494','536','9510','1584','0','1','1','0','6','0','6','75','8913','1891','4298','269','3754','645'])