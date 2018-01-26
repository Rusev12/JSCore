function calculateCapacity(boxes, capacity) {
    let a = Math.round(boxes / capacity);
    let diff = (boxes / capacity) - a;
    if(diff > 0){
        a++
    }
    return a;
}

console.log(calculateCapacity(5, 10));