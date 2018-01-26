function print(arr) {
    let delimeter = arr[arr.length -1];

    for (let i = 0; i < arr.length - 1; i++) {


    }
    return arr.splice(0 , arr.length -1).join(delimeter);
}

console.log(print(['One', 'Two', 'Three', 'Four', 'Five', '-']));
