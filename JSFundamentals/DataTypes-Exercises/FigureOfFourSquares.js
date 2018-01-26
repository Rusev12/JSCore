function prinr(n) {
    let firstRow = '';
    let middle ='';
    firstRow += '+'+'-'.repeat(n - 2) + '+'+'-'.repeat(n - 2)+ '+';
    console.log(firstRow);
    if(n %2 == 0){
        for(i=1; i<=(n/2)-2; i++){
            middle += '|' + ' '.repeat(n-2) + '|' + ' '.repeat(n-2) + '|';
            console.log(middle);
            middle = '';
        }
    }
    else {
        for(i=1; i<=(n/2)-1; i++){
            middle += '|' + ' '.repeat(n-2) + '|' + ' '.repeat(n-2) + '|';
            console.log(middle);
            middle = '';
        }
    }


    console.log(firstRow);

    if(n %2 == 0){
        for(i=1; i<=(n/2)-2; i++){
            middle += '|' + ' '.repeat(n-2) + '|' + ' '.repeat(n-2) + '|';
            console.log(middle);
            middle = '';
        }
    }
    else {
        for(i=1; i<=(n/2)-1; i++){
            middle += '|' + ' '.repeat(n-2) + '|' + ' '.repeat(n-2) + '|';
            console.log(middle);
            middle = '';
        }
    }

    console.log(firstRow)


}
prinr(3)