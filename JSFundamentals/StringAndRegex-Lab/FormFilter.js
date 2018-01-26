function fillForm(name , mail , number , data) {

    data.forEach(line => {

        line = line.replace(/<![A-Za-z]+!>/g , name);
        line = line.replace(/\<@[A-Za-z]+\@>/g , mail);
        line = line.replace(/\<\+[A-Za-z]+\+>/g , number);
        console.log(line);

    })

}

fillForm('Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    ['Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']
)