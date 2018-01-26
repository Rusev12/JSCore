function printFirstAndLastElements(arr) {
    let k = arr[0];
    let firstElements = arr.slice(1, k + 1);
    let lastElemens = arr.slice(arr.length - k);

    console.log(firstElements.join(' '));
    console.log(lastElemens.join(' '));


}

printFirstAndLastElements(
    [3,
    6, 7, 8, 9]

)