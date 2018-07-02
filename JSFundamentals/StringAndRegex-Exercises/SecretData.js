function printSecurityText(arrOfText) {

    let patternForName = /(\*[A-Z][a-zA-Z]*)(?= |\t|$)/g;

    let patternForPhone = /(\+[0-9\-]{10})(?= |\t|$)/g;

    let patternForId = /(\![A-Za-z0-9]*)(?= |\t|$)/g;

    let patternForSecretBase = /(\_[A-Za-z0-9]+)(?= |\t|$)/g;

    let securityText = arrOfText.join('\n');

    for (let row of arrOfText) {

        let matchesName = row.match(patternForName);

        let matchPhone = row.match(patternForPhone);

        let matchId = row.match(patternForId);

        let matchBase = row.match(patternForSecretBase);

        if(matchesName !== null){

            for (let i = 0; i < matchesName.length; i++) {
                securityText = securityText.replace(matchesName[i] , '|'.repeat(matchesName[i].length));

            }

        }

        if(matchPhone !== null){

            for (let i = 0; i < matchPhone.length; i++) {
                securityText = securityText.replace(matchPhone[i] , '|'.repeat(matchPhone[i].length));

            }
        }

        if(matchId !== null){
            for (let i = 0; i < matchId.length; i++) {
                securityText = securityText.replace(matchId[i] , '|'.repeat(matchId[i].length));

            }
        }

        if(matchBase !== null){
            for (let i = 0; i < matchBase.length; i++) {

                securityText = securityText.replace(matchBase[i] , '|'.repeat(matchBase[i].length));

            }
        }


    }

    return securityText;

}

console.log(printSecurityText(['Agent *Ivankov  *Ivankovasdasd was in !2491a23BVB34Q the  room when it all happened. !2491a23BVB34Q !2491a23BVB34Q',
    'The person in the room was heavily armed.',
    'Agent *Ivankov had to act quick in order.',
    'He picked up his phone and called some unknown number.',
    'I think it was +555-49-796 !2491a23BVB34Q',
    "I can't really remember...",
    'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21 !2491a23BVB34Q',
    'Then after that he disappeared from my sight.',
    'As if he +555-49-796 s+555-49-796 vanished in the shadows.',
    'A moment, shorter than a second, later, I saw the person flying off the top floor.',
    "I really *Ivankovasd !2491a23BVB34Q don't know what happened there.",
    'This is all I saw, that night.'
]));;