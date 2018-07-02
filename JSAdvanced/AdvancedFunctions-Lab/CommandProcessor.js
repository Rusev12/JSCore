function processor(arr) {
    let str = '';
    for (let obj of arr) {
        let command = obj.split(' ')[0];

        switch (command){
            case 'append':
                let strToAppend = obj.split(' ')[1];
                str += strToAppend;
                break;
            case 'removeStart':
                let n = Number(obj.split(' ')[1])
                str = str.substr(n)
                break;
            case 'removeEnd':
                let removeN = Number(obj.split(' ')[1]);

                str = str.slice(0,-removeN)
                break;
            case 'print':
                return str;
                break;
        }
    }


}

console.log(processor(['append 123',
    'append 45',
    'removeStart 2',
    'removeEnd 1',
    'print']

));