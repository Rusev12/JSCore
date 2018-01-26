function findBiggestNum(arr) {
    let biggestNum = - 9007199254740991
    for(i =0 ; i<arr.length; i++){
        if(arr[i] > biggestNum){
            biggestNum = arr[i];
        }
    }

    return biggestNum;

}

console.log(findBiggestNum([-10,-20,-30]));