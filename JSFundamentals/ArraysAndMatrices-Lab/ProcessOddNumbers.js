function oddDoubledNumbers(arr) {
    let doubledArr = arr
        .filter((a , i) => i % 2 != 0)
        .map(e => e * 2)
        .reverse();

    return doubledArr
}

console.log(oddDoubledNumbers([3, 0, 10, 4, 7, 3]));