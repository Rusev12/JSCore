function printImg(arr) {
    let [src , alt]  = [arr[0] , arr[1]];
    console.log(`<img src="${src}" alt="${alt}">`)
}
printImg(['smiley.gif', 'Smiley Face'])