function orderByAscending(arr) {
   let orderArr = [];

    for (let i = 0; i < arr.length; i++) {

        if(arr[i] < 0){
            orderArr.unshift(arr[i]);
        }else {
            orderArr.push(arr[i])
        }

    }

    console.log(orderArr.forEach(e => console.log(e)))
}

orderByAscending([3, -2, 0, -1])