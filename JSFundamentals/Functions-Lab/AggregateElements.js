function aggregate(arr) {
    let sum = 0;
    let inverseValue = 0;
    let asStr = '';

    for (let i = 0; i < arr.length; i++) {

        sum += arr[i];
        inverseValue += 1/arr[i];
        asStr += arr[i];
    }


    console.log(sum);
    console.log(inverseValue);
    console.log(asStr);
}

aggregate([2, 4, 8, 16])