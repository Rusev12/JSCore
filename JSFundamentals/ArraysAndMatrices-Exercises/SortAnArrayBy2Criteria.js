function sort(arr) {

    let sort = arr.sort(sortByLengt);
    function sortByLengt(a , b) {
        return (a.length - b.length) || (a.localeCompare(b)) ;
    }
    return sort.forEach(e => console.log(e));
}




sort(['test', 'Deny', 'omen', 'Default']);
