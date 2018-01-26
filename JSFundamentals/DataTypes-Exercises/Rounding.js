function rounding(arr) {
    let[n , precision] = [arr[0] , arr[1]];

    let numAsStr = n.toString();
    if(precision<=15){
        let indexOfpoint = numAsStr.indexOf('.');

        let firstPart = numAsStr.substring(0 , indexOfpoint +1);
        let secondPart = numAsStr.substr(indexOfpoint +1 , precision);
        console.log(firstPart + secondPart);
    }
    else {
        let indexOfpoint = numAsStr.indexOf('.');

        let firstPart = numAsStr.substring(0 , indexOfpoint +1);
        let secondPart = numAsStr.substr(indexOfpoint +1 , 15);
        console.log(firstPart + secondPart);
    }
}

rounding([10.5546546465464654646464654654654654, 16])