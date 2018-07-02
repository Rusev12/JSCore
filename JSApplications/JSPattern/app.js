$(() => {
    const  app =  Sammy('#main',function () {

        this.use('Handlebars' , 'hbs');

        this.get('#/index.html' , (ctx) => {
            ctx.swap('<h1>Hello</h1>');

        });

        this.get('#/about' , (ctx) => {
            ctx.swap('<h1>About</h1>')

        });

        this.get('#/contact' , (ctx) => {
            ctx.swap('<h1>Contact</h1>')
        });


        this.get('#/login' , (ctx) => {
           ctx.swap('<form action="#/login" method="post">\n' +
               '  User: <input name="user" type="text">\n' +
               '  Pass: <input name="pass" type="password">\n' +
               '  <input type="submit" value="Login">\n' +
               '</form>\n')
        });

        this.post('#/login' , (ctx) => {
            "use strict";
            console.log(ctx.params.pass);
        });

        this.get('#/hello/:name' , (ctx) => {

           ctx.title = 'Hello';
           ctx.name = ctx.params.name;
            ctx.partial('./Tempates/Greetings.hbs')

        })
    });

    app.run();
});