function spiralArray (edge) {
    var arr = Array(edge),
        x = 0, y = edge ,
        total = edge * edge--,
        dx = 1, dy = 0,
        i = 1, j = 0;
    while (y) arr[--y] = [];
    while (i <= total) {
        arr[y][x] = i++;
        x += dx; y += dy;
        if (++j == edge) {
            if (dy < 0) {x++; y++; edge -= 2}
            j = dx; dx = -dy; dy = j; j = 0;
        }
    }
    for (let k = 0; k < arr.length; k++) {

        console.log(arr[k].join(" "))
    }

}

// T E S T:
spiralArray(5);
//for (y= 0; y < edge; y++) console.log(arr[y].join(" "));
