function calcDegree(grads) {
    if(grads >= 0){
        let remainder = grads % 400;
        let degree = 0.9 * remainder;

        console.log(degree);
    }
    else {
        let remainder = grads % 400;
        let degree = (400 - (-remainder)) * 0.9;
        console.log(degree)
    }

}

calcDegree(-50)