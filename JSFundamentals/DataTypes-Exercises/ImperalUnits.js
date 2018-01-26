function calcImperalUnits(n) {
    let feets = parseInt(n / 12);
    let remainder = n % 12;
    console.log(`${feets}'-${remainder}"`)
}

calcImperalUnits(11)