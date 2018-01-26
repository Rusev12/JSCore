function printElements(arr) {
    let step = Number(arr.pop());
    let array = [];
    for (let i = 0; i < arr.length; i+=step) {

        array.push(arr[i]);
    }

    array.forEach(e => console.log(e));
}
printElements(['dsa',
    'asd',
    'test',
    'tset',
    '2'

])