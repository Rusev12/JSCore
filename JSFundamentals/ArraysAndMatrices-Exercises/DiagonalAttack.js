function printArr(arr) {
    let sumOfPrimaryDiagonal = 0;
    let sumOfSecondDiagonal = 0;
    let arrLength = 0;

    let cols = arr[0].split( ' ').length;

    let matrix = [] ;

    for (let i = 0; i < arr.length; i++) {
            matrix[i] =arr[i].split(' ').map(e => Number(e));
    }

    for (let i = 0; i < matrix.length; i++) {

        sumOfPrimaryDiagonal += matrix[i][i];
    }
    let row = 0;
    for (let i = matrix.length -1; i >= 0; i--) {

        sumOfSecondDiagonal += matrix[row][i];
        row ++;

    }


    if(isEqual(sumOfPrimaryDiagonal , sumOfSecondDiagonal)){
        for (let row = 0; row < matrix.length; row++) {

            for (let col = 0; col < matrix[row].length; col++) {

                if(!isPrimaryDiagonalDigit(matrix , row , col) && !isSecindDiagonalDigit(matrix , row , col)){
                    matrix[row][col]= sumOfSecondDiagonal;
                }
            }
        }
    }
    else
    {
        return matrix;
    }

    function isEqual(sumOfPrimary, sumOfSecond) {
        if(sumOfPrimary === sumOfSecond){
            return true;
        }
        return false;
    }

    function isPrimaryDiagonalDigit(matrix , row , col) {
        for (let i = 0; i < matrix.length; i++) {

            if(row === i && col === i){
                return true;
            }

        }

        return false;
    }

    function isSecindDiagonalDigit(matrix , row , col) {
        let rowNumber = 0;
        for (let i = matrix.length - 1; i >= 0; i--) {

            if(row === rowNumber && col === i ){
                return true;
            }
            rowNumber ++;

        }
        return false;
    }

    for (let i = 0; i < matrix.length; i++) {

        console.log(matrix[i].join(' '))
    }

}


printArr(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']

);