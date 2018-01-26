function printLinks(arrOfString) {
    let pattern = /\bwww\.[A-Za-z0-9\-]+\.([a-z\.]+)+\b/g;

    let matches = [];

    for (let line of arrOfString) {
        let link = line.match(pattern)
        matches.push(link)

    }

    return matches.filter(e => e!== null).join('\n')

}

console.log(printLinks([
    'Join WebStars now for free, at www.web-stars.com',
    'You can also support our partners:',
    'Internet - www.internet.com',
    'WebSpiders - www.webspiders101.com',
    'Sentinel - www.sentinel.-ko'
]));