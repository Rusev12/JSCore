function printMoviePrice(arr) {
    let [movieName , day] = [arr[0] , arr[1]];
    if (day === 'Sofia'){
        return console.log('error')
    }
    let godfather = {
        monday: 12,
        tuesday: 10,
        wednesday: 15,
        thursday: 12.50,
        friday: 15,
        saturday: 25,
        sunday: 30
    };
    let schindler = {
        monday: 8.50,
        tuesday: 8.50,
        wednesday: 8.50,
        thursday: 8.50,
        friday: 15,
        saturday: 15,
        sunday: 30
    };
    let casablanka = {
        monday: 8,
        tuesday: 8,
        wednesday: 8,
        thursday: 8,
        friday: 8,
        saturday: 10,
        sunday: 10
    };
    let wizardOfOz = {
        monday: 10,
        tuesday: 10,
        wednesday: 10,
        thursday: 10,
        friday: 10,
        saturday: 15,
        sunday: 15
    };


    if(movieName.toLowerCase() == 'the godfather'){

        console.log(godfather[day.toLowerCase()])
    }
    else if(movieName.toLowerCase() == 'schindler\'s list'){
        console.log(schindler[day.toLowerCase()])
    }
    else if(movieName.toLowerCase() == 'casablanca'){
        console.log(casablanka[day.toLowerCase()])
    }
    else if(movieName.toLowerCase() == 'the wizard of oz'){
        console.log(wizardOfOz[day.toLowerCase()])
    }
    else {
        console.log('error')
    }
}

printMoviePrice(['The Godfather',
'Sofia'])