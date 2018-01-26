function concatAndRevere(arr) {
    let reversedArr = arr.reverse()
    let str = '';

    for (let obj of reversedArr) {
        let reversedStr = obj.split("").reverse().join("")
        str += reversedStr
    }

    console.log(str)
}

concatAndRevere(['I', 'am', 'student'])
