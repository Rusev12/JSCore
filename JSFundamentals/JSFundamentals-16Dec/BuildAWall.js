function printTotalPesos(arr) {
    let arrOfNumbers = [...arr].map(Number)
    let totalSteps = 0;
    let totalPesos = 0;
    let arrOfYards = [];

    for (let num of arrOfNumbers) {
        totalSteps += 30 - num;
    }

    totalPesos = (totalSteps * 195) * 1900;

    arrOfNumbers = arrOfNumbers.sort((a , b) => a - b);

    while (arrOfNumbers.length > 0){

        let numberOfWorkers = 0;
        for (let i = 0; i < arrOfNumbers.length; i++) {

            if(arrOfNumbers[i] < 30){
                numberOfWorkers ++;

                arrOfNumbers[i] ++;

            } else {
                arrOfNumbers.splice(-1);
            }

        }
        arrOfYards.push(numberOfWorkers * 195);
        numberOfWorkers = 0;


    }
    console.log(arrOfYards.filter(e => e !== 0).join(', '))
    console.log(`${totalPesos} pesos`)
}

printTotalPesos(['17'])