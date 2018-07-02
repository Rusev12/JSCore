function printTable(arrOfJSON) {
    let html = '<table>\n';

    for (let obj of arrOfJSON) {
        let objArgs = JSON.parse(obj);
        html+= '    <tr>\n';

        html+= `        <td>${objArgs.name}</td>\n`;
        html+= `        <td>${objArgs.position}</td>\n`;
        html+= `        <td>${objArgs.salary}</td>\n`

        html+= '    <tr>\n'

    }



    html+= '</table>'

    return html
}


console.log(printTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}',
]));