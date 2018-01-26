function calculateDistanve(arr) {
    let V1 = arr[0];
    let V2 = arr[1];
    let seconds = arr[2];

    let hours = (seconds/60) / 60;
    let firstDistance = (V1 * hours) * 1000;
    let secondDistance = (V2 * hours) * 1000;

    console.log(Math.abs(firstDistance - secondDistance));
}

calculateDistanve([5 , -5 , 40])