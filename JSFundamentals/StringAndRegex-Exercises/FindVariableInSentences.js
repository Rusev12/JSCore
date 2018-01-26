function printOnlyVariable(string) {
    let pattern = /\b( _)([A-Za-z0-9]+)\b/g
    let variable = [] ;
    let match;
    while (match = pattern.exec(string)){
        variable.push(match[2].trim());
    }

    console.log(variable.join(','))
}

printOnlyVariable('__invalidVariable _evenMoreInvalidVariable_ _validVariable')