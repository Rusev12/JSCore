function getNumberOfEqualNegbours(matrix) {
    let count = 0;
    let neigbours = [];

    for (let row = 0; row < matrix.length ; row++) {

        for (let col = 0; col < matrix[row].length ; col++) {

            if(isInsideTheMatrix(matrix , row , col +1)){
                if(matrix[row][col] == matrix[row][col+1]){
                    neigbours.push(matrix[row][col]);
                }
            }

            if(isInsideTheMatrix(matrix , row + 1 , col)){
                if(matrix[row][col] == matrix[row + 1][col]){
                    neigbours.push(matrix[row][col]);
                }
            }

        }
    }

    function isInsideTheMatrix(matrix ,row , col) {

        if((row < 0 || row > matrix.length - 1) || (col < 0 || col > matrix[row].length -1)){
            return false;
        }
        return true;
    }


    return neigbours.length;
}

console.log(getNumberOfEqualNegbours([['2' ,'2', '5', '7' ,'4'],
    ['4', '0' ,'5', '3' ,'4'],
    ['2', '5', '5', '4' ,'2']]));



