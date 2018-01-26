function isInside(arr) {

    let [x , y, xMin , xMax , yMin , yMax] = [arr[0], arr[1] , arr[2] , arr[3] , arr[4] , arr[5]];
    if((x >= xMin && x<= xMax) && (y >= yMin && y<= yMax)){
        console.log('inside')
    }
    else {
        console.log('outside')
    }

}

isInside([12.5 , -1 , 2 ,12 , -3, 3])