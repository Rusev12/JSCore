function getSmallestTwoNumbers(arr) {
    return arr.sort((a ,b) => a-b).slice(0 ,2);
}

console.log(getSmallestTwoNumbers([3, 0, 10, 4, 7, 3]));