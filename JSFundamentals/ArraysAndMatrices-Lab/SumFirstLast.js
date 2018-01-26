function sumElements(arr) {

    let [first ,  last] = [arr[0], arr[arr.length - 1]];

    return Number(first) + Number(last)
}

console.log(sumElements(['20', '30', '40']));