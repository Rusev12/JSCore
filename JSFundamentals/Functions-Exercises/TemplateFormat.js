function printQuiz(input) {

    printHeader();
    for (let i = 0; i < input.length; i+=2) {
        let [question , answer] =  [input[i] , input[i + 1]]
        printQuestion(question)
        printAnswer(answer)
    }

    printFooter();

    function printHeader() {
        console.log('<?xml version="1.0" encoding="UTF-8"?>')
        console.log('<quiz>')

    }
    function printQuestion(question) {
        console.log(' <question>')
        console.log(`  ${question}`)
        console.log(' </question>')
    }
    function printAnswer(answer) {
        console.log(' <answer>')
        console.log(`  ${answer}`)
        console.log(' </answer>')
    }
    function printFooter(){
        "use strict";
        console.log('</quiz>')
    } {

    }
}

printQuiz(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]

)