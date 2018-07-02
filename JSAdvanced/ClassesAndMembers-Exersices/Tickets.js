function getAllTickets(arrOfTickets , sortCriteria) {
    let allTickets = [];
    let order = sortCriteria;
    class Ticket{
        constructor(destination , price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

    }

    for (let obj of arrOfTickets) {
        let args = obj.split('|');
        let destination = args[0];
        let price = Number(args[1]);
        let status = args[2];

        let ticket = new Ticket(destination , price , status);
        allTickets.push(ticket);
    }

    function compare(a,b) {

        switch (order){
            case "destination":
                if (a.destination.toString() < b.destination.toString())
                    return -1;
                if (a.destination.toString() > b.destination.toString())
                    return 1;
                return 0;
                break;
            case "price":
                if (a.price > b.price)
                    return 1;
                if (a.destination < b.price)
                    return -1;
                return 0;
                break;

            case "status":
                if (a.status.toString() > b.status.toString())
                    return 1;
                if (a.status.toString() < b.status.toString())
                    return -1;
                return 0;
                break;

        }

    }


    return allTickets.sort(compare);

}

console.log(getAllTickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'

));
