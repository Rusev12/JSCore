function printObj(matrix) {
    let allObjects = [];
    for (let i = 0; i < matrix.length; i++) {
        let width = matrix[i][0];
        let heght = matrix[i][1];
        let obj = {
            width: width,
            height: heght,
            area: function () {
                return this.width * this.height;
            },
            compareTo: function (other) {
                let diff = this.area() < other.area();
                if(diff !== 0){
                    return diff;
                }
                return this.width > other.width
            }

        }

        allObjects.push(obj);
    }

    return allObjects.sort((a , b) => a.compareTo(b));
}

console.log(printObj([[10,5], [3,20], [5,12]]));;