function biggestElement(matrix) {
    let biggestNum = Number.NEGATIVE_INFINITY;

    matrix.forEach(row =>
        row.forEach(e => {
            "use strict";
            if(e > biggestNum){
                biggestNum =  e;
            }
        }))

    return biggestNum;
}

console.log(biggestElement([[20, 50, 10],
    [8, 33, 145]]
));