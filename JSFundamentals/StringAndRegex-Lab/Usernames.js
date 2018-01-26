function printEmail(emails) {
    let validEmails = [];

    for (let email of emails) {
        let name = email.split('@')[0];
        let args =  email.split('@')[1].split('.').map(e => e = e[0]).join('');
        validEmails.push(name +'.' + args)
    }

    console.log(validEmails.join(', '))
}

printEmail(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com'])