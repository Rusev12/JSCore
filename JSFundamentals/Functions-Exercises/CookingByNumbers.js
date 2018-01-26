function operationByNum(arr) {
    let num = Number(arr[0]);
    let chop = () => num /=2;
    let dice = () => num = Math.sqrt(num);
    let spice = () => num += 1;
    let bake = () => num *= 3;
    let fillet = () => num-= (num * 0.2);

    for (let i = 1; i < arr.length ; i++) {

        switch (arr[i]){
            case "chop":
                console.log(chop());
                break;
            case "dice":
                console.log(dice());
                break;
            case "spice":
                console.log(spice());
                break;
            case "fillet":
                console.log(fillet());
                break;
            case "bake":
                console.log(bake());
                break;
        }
    }

}
operationByNum([9, 'dice', 'spice', 'chop', 'bake', 'fillet'])
