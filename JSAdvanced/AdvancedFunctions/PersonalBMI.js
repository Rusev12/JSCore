function printInfo(args) {
    let obj = {
        name: args[0],
        personalInfo: {
            age: args[1],
            weight: args[2],
            height: args[3]
        },
        BMI: 23,
        status: 'normal'
    };

    return obj;
}

console.log(printInfo(['Peter', 29, 75, 182]));;