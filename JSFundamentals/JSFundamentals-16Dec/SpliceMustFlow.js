function printAllExtract(number) {
    let yield = Number(number[0]);

    if(yield < 100){
        console.log(0)
        console.log(0);
        return;
    }
    const workerConsume = 26;
    let total = 0;
    let days = 0;

    while (yield >= 100){

        total += yield - workerConsume;
        yield -= 10;
        days++;
    }

    console.log(days)
    console.log(total - 26)
}

printAllExtract(['45'])