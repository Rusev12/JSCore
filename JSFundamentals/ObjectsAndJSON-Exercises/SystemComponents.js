function printSystem(arrOfStr) {

    let data = new Map();

    for (let row of arrOfStr) {

        let [systemName , componentName , subCompName] = row
            .split(' | ')
            .filter(e => e !== '');

        if(!data.has(systemName)){
            data.set(systemName , new Map())
        }

        if(!data.get(systemName).has(componentName)){
            data.get(systemName).set(componentName , [])
        }

        data.get(systemName).get(componentName).push(subCompName)
    }

    let systemsSorted = Array.from(data.keys()).sort((s1, s2) => sortSystems(s1, s2));
    for(let system of systemsSorted) {
        console.log(system);
        let componentsSorted = Array.from(data.get(system).keys()).sort((c1, c2) => sortComponents(system, c1, c2));

        for(let component of componentsSorted) {
            console.log(`|||${component}`);
            data.get(system).get(component).forEach(sc => console.log(`||||||${sc}`))
        }
    }
    function sortSystems(s1, s2) {
        if(data.get(s1).size != data.get(s2).size) {
            return data.get(s2).size - data.get(s1).size;
        } else {
            return s1.toLowerCase().localeCompare(s2.toLowerCase());
        }
    }

    function sortComponents(system, c1, c2) {
        return data.get(system).get(c2).length - data.get(system).get(c1).length;
    }
}

printSystem(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);