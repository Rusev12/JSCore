function calculateCompoundInterest(arr) {
    let [amount , rate , numberOfTimes , years] = [arr[0] , arr[1] , arr[2] ,arr[3]];
    rate /= 100
    numberOfTimes = 12 / numberOfTimes;
    let compoundInterest =amount * Math.pow((1 + (rate / numberOfTimes)), (numberOfTimes * years));
    console.log(compoundInterest.toFixed(2));
}

calculateCompoundInterest([100000, 5, 12, 25])