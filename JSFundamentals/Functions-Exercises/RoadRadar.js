function printSpeedLimit(arr) {
    let [speed , place] = [arr[0] , arr[1]];

    const motorwayLimit = 130;
    const interstateLimit = 90;
    const cityLimit = 50;
    const residentialLimit = 20;

    switch (place){
        case 'city' :
            if(speed > cityLimit){
               let overspeed = calculateDifferencesBetweenSpeed(speed , place);
               printSpeedMessage(overspeed);
            }
            break;
        case 'interstate' :
            if (speed > interstateLimit){
                let overspeed = calculateDifferencesBetweenSpeed(speed , place);
                printSpeedMessage(overspeed);
            }
           break;
        case 'motorway' :
            if(speed > motorwayLimit){
                let overspeed = calculateDifferencesBetweenSpeed(speed , place);
                printSpeedMessage(overspeed);
            }
            break;
        case 'residential' :
            if(speed > residentialLimit){
                let overspeed = calculateDifferencesBetweenSpeed(speed , place);
                printSpeedMessage(overspeed);
            }
            break;
    }


    function calculateDifferencesBetweenSpeed(km , road) {
        switch (road){
            case 'motorway' :
                return km - motorwayLimit;
            case 'interstate' :
                return km - interstateLimit;
            case 'city' :
                return km - cityLimit;
            case 'residential' :
                return km - residentialLimit;
        }
    }
    function printSpeedMessage(diff){
        "use strict";
        if(diff < 20){
            console.log('speeding')
        }
        else if(diff >= 20 && diff < 40){
            console.log('excessive speeding')
        }
        else {
            console.log('reckless driving')
        }
    }


}
printSpeedLimit([200, 'motorway'])