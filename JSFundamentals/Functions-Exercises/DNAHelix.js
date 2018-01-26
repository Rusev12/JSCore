function dnaHelix(n) {
    let couter = 0;
    const dna = 'ATCGTTAGGG';
    let stars = 2;
    let tires = 0;

    for (let i = 0; i < n; i++) {

        if(stars<=2 && stars>=0){
            console.log('*'.repeat(stars) + dna[couter] + '-'.repeat(tires) + dna[couter +1] +'*'.repeat(stars))
            stars--;
            tires += 2;
            couter += 2;
        }
        else if(stars < 0){
            stars =1;
            tires = 2;

            console.log('*'.repeat(stars) + dna[couter] + '-'.repeat(tires) + dna[couter +1 ] + '*'.repeat(stars));
            stars++;
            tires -=2 ;
            couter += 2;

        }
        if(couter === 10){
            couter  =0;
        }

    }


}

dnaHelix(4);;