function splitAndPrint(exp) {
    let args = exp.split(/['\s().,;]/);

    args.filter(e => e != '').forEach( e => console.log(e))
}
splitAndPrint("let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}")