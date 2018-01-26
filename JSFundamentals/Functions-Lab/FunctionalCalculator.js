function calculate(a, b, op) {
    let [num1 ,num2] = [a , b];
    let add = () => a + b;
    let devide = () => a/b;
    let multiply = () => a*b;
    let subtract = () => a - b;

    switch (op){
        case '+':
            return console.log(add());
        case '/':
            return console.log(devide());
        case '*':
            return console.log(multiply());
        case '-':
            return console.log(subtract());
    }
}

calculate(3 ,3,'/')