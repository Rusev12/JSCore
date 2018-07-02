function sortByGivenOrder(arr , order) {
    let ascending = function (a, b) {
        return a - b;
    };

    let descending = function (a, b) {
        return b - a;
    };

    var sortingStrategies = {
        'asc': ascending,
        'desc': descending
    }

    return arr.sort(sortingStrategies[order])
}

console.log(sortByGivenOrder([5, 3, 4, 5, 2], 'asc'));