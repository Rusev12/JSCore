function getListOfAllTreasurePlaces(arr) {
    const tokelauPoints = {x1 : 8 , y1: 0, x2: 9 , y2: 1};
    const tavaluPoints = {x1 : 1 , y1: 1, x2: 3 , y2: 3}
    const samoa = {x1 : 5 , y1: 3, x2: 7 , y2: 6}
    const tonga = {x1 : 0 , y1: 6, x2: 2 , y2: 8}
    const cook = {x1 : 4 , y1: 7, x2: 9 , y2: 8}

    for (let i = 0; i < arr.length; i+=2) {

        let firstPoint = arr[i];
        let secondPoint = arr[i + 1];

        if(checkTokelau(firstPoint , secondPoint)){
            console.log('Tokelau')

        }
        else  if(checkTavalu(firstPoint , secondPoint)){
            console.log('Tuvalu')

        }
        else  if(checkSamoa(firstPoint , secondPoint)){
            console.log('Samoa')

        }
        else  if(checkTonga(firstPoint , secondPoint)){
            console.log('Tonga')

        }
        else  if(checkCook(firstPoint , secondPoint)){
            console.log('Cook')

        }
        else {
            console.log("On the bottom of the ocean")
        }

    }

    function checkTokelau(x , y ) {
        if((x >= tokelauPoints.x1 && x <= tokelauPoints.x2)
            && (y >= tokelauPoints.y1 && y <= tokelauPoints.y2)){

            return true;
        }
        return false;
    }
    function checkTavalu(x , y) {
        if((x >= tavaluPoints.x1 && x <= tavaluPoints.x2)
            && (y >= tavaluPoints.y1 && y <= tavaluPoints.y2)){

            return true;
        }
        return false;
    }

    function checkSamoa(x , y) {
        if((x >= samoa.x1 && x <= samoa.x2)
            && (y >= samoa.y1 && y <= samoa.y2)){

            return true;
        }
        return false;
    }
    function checkTonga(x , y) {
        if((x >= tonga.x1 && x <= tonga.x2)
            && (y >= tonga.y1 && y <= tonga.y2)){

            return true;
        }
        return false;
    }
    function checkCook(x, y) {
        if((x >= cook.x1 && x <= cook.x2)
            && (y >= cook.y1 && y <= cook.y2)){

            return true;
        }
        return false;
    }

}

getListOfAllTreasurePlaces([6 , 4])