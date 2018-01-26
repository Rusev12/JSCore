function sumVatAndSum(arr) {
    let sum = 0;

    for(i=0 ; i< arr.length ; i++){
        sum += arr[i];
    }

    console.log(`sum = ${sum.toFixed(2)}`)
    console.log(`VAT = ${sum * 0.2}`)
    console.log(`total = ${(sum + (sum *0.2)).toFixed(2)}`)
}

console.log(sumVatAndSum([1.20, 2.60, 3.50]));