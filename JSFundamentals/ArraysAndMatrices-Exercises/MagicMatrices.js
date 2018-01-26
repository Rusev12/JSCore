function isMagic(matrix) {

    let sumOfRows = 0;
    let sumOfColumns = 0;

    var firstSum = matrix[0].reduce(function(a, b) { return a + b; }, 0);

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {

            sumOfRows += matrix[row][col];
            sumOfColumns += matrix[col][row];
        }

        if(firstSum != sumOfRows || firstSum!= sumOfColumns){
            return false;
        }

        sumOfRows = 0;
        sumOfColumns = 0;
    }

    return true
}

console.log(isMagic([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]

));