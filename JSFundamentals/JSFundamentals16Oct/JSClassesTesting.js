function printJuice(arr) {

    let map = new Map();
    let all = [];
    for (let obj of arr) {
        let args = obj.split(" => ");
        let [name , quantity] = [args[0] , Number(args[1])];

        if(!map.has(name)){
            map[name] = 0;
        }
        map[name] += quantity;
        all.push(all)
    }

    console.log(all)
}
function sortF(a , b) {
    return (b.quantity -  a.quantity) || (a.name.length < b.name.length) || b.gr - a.gr
}
printJuice(['Orange => 2000 => 34',
    'Orange => 250 => 700',
    'Peach => 1432 => 90',
]);