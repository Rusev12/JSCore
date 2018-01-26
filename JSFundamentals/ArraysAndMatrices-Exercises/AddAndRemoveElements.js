function printArr(commands) {
    let arr = [];
    let value = 0;
    for (let i = 0; i < commands.length; i++) {
        value ++;
        if(commands[i] === 'add'){

            arr.push(value);
        }
        else if(commands[i] === 'remove'){
            arr.pop();
        }

    }
    //console.log(arr);
    if(arr.length === 0){
        return console.log('Empty')
    }

    return arr.forEach(e => console.log(e));
}

printArr(['add', 'add', 'remove', 'add', 'add']);