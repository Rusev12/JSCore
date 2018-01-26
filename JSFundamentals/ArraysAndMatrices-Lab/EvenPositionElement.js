function getEvenElements(arr) {

    let allEvenPositions = [];

    for (let i = 0; i < arr.length; i+=2) {

        allEvenPositions.push(arr[i]);
    }

    console.log(allEvenPositions.join(' '));
}

getEvenElements(['20', '30', '40']);