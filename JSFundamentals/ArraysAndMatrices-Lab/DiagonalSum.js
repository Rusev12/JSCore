function getSumOfDiagonals(matrix) {
    let sumOfFirstDiagonals = 0;
    let sumOfSecondDiagonals = 0;


    for (let row = 0; row < matrix.length; row++) {

        sumOfFirstDiagonals += matrix[row][row];
        sumOfSecondDiagonals += matrix[row][matrix.length - row - 1];
    }

    console.log(sumOfFirstDiagonals + ' ' +sumOfSecondDiagonals);
}

getSumOfDiagonals([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
)
