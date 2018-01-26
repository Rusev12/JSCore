function extractords(text) {
    let splitWords = text.split(/\W/);

    cleanEmptyString(splitWords);

    let upperWords = splitWords.map(e => e.toUpperCase());

    function cleanEmptyString(arr) {
        for (let i = 0; i < arr.length; i++) {

            if(arr[i] === ''){
                var index = arr.indexOf(arr[i]);
                if(index>-1){
                    arr.splice(index,1);
                }
            }
        }
    }

    console.log(upperWords.join(', '));
}
extractords('Hi, how are you?')