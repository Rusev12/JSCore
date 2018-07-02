function printJSONInventory(arr) {

    let heroData = [];

    for (let row of arr) {
        let heroArgs = row.split(' / ');
        let hero = {};

        hero.name = heroArgs[0];

        hero.level = Number(heroArgs[1]);

        hero.items = heroArgs[2].split(', ');

        heroData.push(hero);
    }

    console.log(JSON.stringify(heroData))


}
printJSONInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);