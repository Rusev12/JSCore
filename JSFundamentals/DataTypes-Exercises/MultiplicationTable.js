function printTable(n) {
    console.log('<table border="1">')
    let firstRow = '';
    firstRow+=' <tr><th>x</th>'
    for(i =1; i<=n; i++){
        firstRow += `<th>${i}</th>`;
    }


    firstRow += '</tr>';
    console.log(firstRow);
    for(i =1; i<=n; i++){
        let counter = i;
        let currentRow = '';
        currentRow += ` <tr><th>${i}</th>` + `<td>${i}</td>`;
        let c= i*2
        for(j = 1; j<= n-1; j++){

            currentRow += `<td>${c }</td>`
            c += i;
        }

        currentRow+= '</tr>';

        console.log(currentRow);
        currentRow = '';

    }

    console.log('</table>')
}

printTable(5)