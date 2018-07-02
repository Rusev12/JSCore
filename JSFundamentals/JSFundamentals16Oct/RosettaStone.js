function printSecretMessage(matrix) {
    let templateMatrixSize = matrix.splice(0,1).map(Number)[0];

    let templateMatrix = fillTemplateMatrix(templateMatrixSize , matrix);

    let colRotation = templateMatrix[0].length;



    matrix.splice(0 , templateMatrixSize);

    let primaryMatrix = fillPrimaryMatrix(matrix);

    let alphabet = ' abcdefghijklmnopqrstuvwxyz'.split('').map(e => e.toUpperCase());

    let message = '';

    for (let rows = 0; rows < primaryMatrix.length; rows += templateMatrixSize) {

        for (let cols = 0; cols < primaryMatrix[rows].length; cols += colRotation) {

            arithmeticOperations(primaryMatrix , rows , cols )

        }
    }

    for (let row = 0; row < primaryMatrix.length; row++) {
        for (let col = 0; col < primaryMatrix[row].length; col++) {

            let letter = alphabet[primaryMatrix[row][col] % 27];
            message+= letter;
        }

    }

    function isInside(matrix , row , col) {
        if( (row < 0 || row > matrix.length - 1) || (col < 0 || col > matrix[row].length - 1)){
            return false
        }
        return true;
    }
    function arithmeticOperations(primaryMatrix , rows , cols) {
        for (let rowSm = 0; rowSm < templateMatrix.length; rowSm++) {

            for (let colSm = 0; colSm < templateMatrix[rowSm].length; colSm++) {

                if(isInside(primaryMatrix , rows + rowSm , cols + colSm)){
                    primaryMatrix[rows + rowSm][cols + colSm] += templateMatrix[rowSm][colSm]
                }
            }
        }
    }
    function fillPrimaryMatrix(matrix) {
        let primaryMatrix = [];
        for (let i = 0; i < matrix.length; i++) {

            let row = matrix[i].split(' ')
                .filter(e => e!== '')
                .map(Number)

            primaryMatrix.push(row)
        }

        return primaryMatrix;
    }

    function fillTemplateMatrix(size, matrix) {
        let templateMatrix = []
        for (let i = 0; i < size; i++) {

            let row = matrix[i].split(' ')
                .filter(e => e!== '')
                .map(Number)

            templateMatrix.push(row)

        }

        return templateMatrix
    }

    console.log(message)
}




printSecretMessage([ '0',
    '19 0 23 25',
    '22 3 12 17',
    '5 9 23 11',
    '12 18 10 22' ]

);