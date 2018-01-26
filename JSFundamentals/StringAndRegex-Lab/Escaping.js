function escaping(text) {
    String.prototype.htmlEscape = function()
    { return this.replace(/</g, '&lt;')
        .replace(/>/g , '&gt;')
        //.replace(/&/g, '&amp;')
        .replace(/"/g , '&quot;')
    };
    console.log('<ul>')
    for (let obj of text) {
        console.log('   <li>' + obj.htmlEscape() + '</li>')
    }
    console.log('</ul>')

}

escaping(['<b>unescaped text</b>', 'normal text'])