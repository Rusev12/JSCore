function oddOrEven(num) {
    var number = Math.abs(num);
    if(number %2 == 0){
        console.log("even")
    }
    else if(number  %2 ==1){
        console.log("odd")
    }
    else {
        console.log("invalid")
    }
}

oddOrEven(-5)