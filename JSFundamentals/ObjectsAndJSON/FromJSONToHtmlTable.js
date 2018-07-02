function printTableHtml(json) {

    let arr = JSON.parse(json);

    let html = "<table>\n";

    let keys = Object.keys(arr[0]);


    //print header
    html += " <tr>";

    for (let key of keys) {
        html += `<th>${key}</th>`
    }

    html += "</tr>\n";


    for (let obj of arr) {
        html += " <tr>";
        let values = Object.values(obj);
        for (let i = 0; i < values.length; i++) {
            //<tr><td>Tomatoes &amp; Chips</td><td>2.35</td></tr>
            html += `<td>${htmlEscape(`${values[i]}`)}</td>`

        }
        html += "</tr>\n";
    }



    html += "</table>";

    function htmlEscape(text) {


        let map = { '"': '&quot;', '&': '&amp;',


            "'": '&#39;', '<': '&lt;', '>': '&gt;' };


        return text.replace(/[\"&'<>]/g, ch => map[ch]);


    }


    return html

}

console.log(printTableHtml('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'));