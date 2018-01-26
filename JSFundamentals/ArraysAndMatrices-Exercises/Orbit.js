function orbit(arr) {
    let [rows , cols , x, y] = [arr[0] , arr[1] , arr[2] , arr[3]];
    let counter = 2;
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        matrix[i] = new Array(cols);

    }

    matrix[x][y] = 1;

    for (let row = 0; row < matrix.length; row++) {

        for (let col = 0; col < matrix[row].length; col++) {

            matrix[row][col] = Math.max(Math.abs(x - row),Math.abs(y - col)) + 1
        }
    }

    for (let arr of matrix) {
        console.log(arr.join(' '))
    }

}


orbit([4, 4, 0, 0]);