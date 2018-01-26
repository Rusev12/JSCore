function printInfoAboutEmployee(employees) {
    let pattern = /^([A-Z][a-zA-Z]+) - ([0-9]+) - ([A-Za-z0-9\- ]+)/g
    let match = [];
    for (let emp of employees) {
        while (match = pattern.exec(emp)){
            console.log(`Name: ${match[1]}`)
            console.log(`Position: ${match[3]}`)
            console.log(`Salary: ${match[2]}`)

        }
    }
}

printInfoAboutEmployee(['Jonathan - 2000 - Manager',
'Peter- 1000- Chuck',
'George - 1000 - Team Leader']
)