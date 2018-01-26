function printElements(n, k) {
    let elements =[];
    elements.push(1);
    while (elements.length < n){

        let sumOfPreviusNums = 0;

    let previus = elements.reverse().slice(0 , k);
    for (let obj of previus) {
        sumOfPreviusNums += obj;
    }
    elements.push(sumOfPreviusNums);
    elements.sort((a , b) => (a - b));
}

    console.log(elements.join(' '))
}

printElements(6 ,3);