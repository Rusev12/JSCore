function assign(arr) {
    let [key1 , pair1 , key2 , pair2 , key3 , pair3] = [arr[0] , arr[1] , arr[2] , arr[3], arr[4], arr[5]];
    let obj = {};
   obj[key1] = pair1;
   obj[key2] = pair2;
   obj[key3] = pair3;

    console.log(obj);
}

assign(['name', 'Pesho', 'age', '23', 'gender', 'male'])