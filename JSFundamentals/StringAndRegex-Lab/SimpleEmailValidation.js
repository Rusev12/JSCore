function isValid(email) {
    let pattern = /^[A-Za-z0-9]+@[a-z]+\.[a-z]+/gm;

    return pattern.test(email) ? "Valid" : "Invalid"
}

console.log(isValid('invalid@emai1.bg'));