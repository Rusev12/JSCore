function validatePoints(arr) {
    let [x1 , y1 , x2 , y2] = [arr[0] , arr[1] , arr[2], arr[3]];

    let distanceX0 = () => Math.sqrt(Math.pow((x1 - 0) , 2) + Math.pow((y1 - 0) , 2))
    let distanceYO = () => Math.sqrt(Math.pow((x2 - 0) , 2) + Math.pow((y2 - 0) , 2))
    let distanceBetweenPoints = () => Math.sqrt(Math.pow((x2 - x1) , 2) + Math.pow((y2 - y1) , 2))

    if(checkIsInteger(distanceX0())){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    }
    else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }

    if(checkIsInteger(distanceYO())){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    }
    else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }

    if(checkIsInteger(distanceBetweenPoints())){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    }
    else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
    function checkIsInteger(num) {
        return num %1 === 0;
    }

}

validatePoints([3, 0, 0, 4])