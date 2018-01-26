function printDecreasingSubquences(arr) {
    let biggestNum = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < arr.length; i++) {

        if(arr[i] >= biggestNum){
            biggestNum = arr[i];
        }else {
            arr[i] = undefined;
        }
    }

    let  undifineda  = arr.filter(e => e != undefined).join(' ').split(' ');

    return undifineda.forEach(e => console.log(e));
    
}

printDecreasingSubquences([1, 3, 8, 10]);
