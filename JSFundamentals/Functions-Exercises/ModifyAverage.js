function modifyUntilAverageIsMoreThanFive(num) {
    let numAsStr = '';
    numAsStr += num;
    //202 9 9 9
    let sumOfAll = 0;
    let average = 0;

    function calulateAvgValues() {
        while (average <= 5){

            for (let i = 0; i < numAsStr.length; i++) {

                let digit = Number(numAsStr[i]);
                sumOfAll+=digit;
            }
            average = sumOfAll / numAsStr.length;
            if(average < 5){
                numAsStr+='9';
                sumOfAll = 0;
            }

        }
    }
    calulateAvgValues()

    return numAsStr;

}

console.log(modifyUntilAverageIsMoreThanFive(505));;