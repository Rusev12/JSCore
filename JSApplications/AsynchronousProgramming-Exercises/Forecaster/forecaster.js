function attachEvents() {
    $("#submit").on("click" , loadInfo);

    const URL = 'https://judgetests.firebaseio.com/';

    let validDestinations = [
        'London',
        'Barcelona',
        'New York'
    ];

    let symbols = {
        'Sunny' : '&#x2600',
        'Partly sunny': '&#x26C5',
        'Overcast' : '&#x2601',
        'Rain' : '&#x2614',
        'Degrees' : '&#176'
    };

    function loadInfo() {
        let destination = $('#location').val();

        if(!validDestinations.includes(destination)){
            $('#forecast').css("display","inline")
            $('#forecast').append("<p>Error</p>")
        }
        else{
            $('p').empty();
            $('#forecast').css("display","inline");
            $('#current span').empty();
            let firstP = $.ajax({
                url : URL + 'locations.json'

            }).then(function some(res) {

                let city = res.filter(e => e.name == destination);
                let code = city[0].code;

                LoadCurrentInfoForWeather(code , firstP);
            })

        }

    }


    function LoadCurrentInfoForWeather(code , firstP) {

        let secondP = $.ajax({
            url : URL + `forecast/today/${code}.json `
        }).then(function (res) {
            let currentCondition = res['forecast'].condition;
            let lowDegree = res['forecast'].low;
            let highDegree = res['forecast'].high;
            let countryName = res.name;

            let span = $(`<span class="condition symbol">${symbols[currentCondition]}</span>`);
            $('#current').append(span);


            let degreeExpression = lowDegree + symbols['Degrees'] + '/' + highDegree + symbols['Degrees'];
            let conditionSpan = $('<span class="condition"></span>');
            let spanForConditions = $(`<span class="forecast-data">${currentCondition}</span>`);
            let spanForDegrees = $(`<span class="forecast-data">${degreeExpression}</span>`);
            let spanForCountryName = $(`<span class="forecast-data">${countryName}</span>`)

            conditionSpan.append(spanForCountryName);
            conditionSpan.append(spanForDegrees);
            conditionSpan.append(spanForConditions);
            $('#current').append(conditionSpan);
            Promise.all([firstP , secondP]).then(function (res) {
                let destination = $('#location').val();

            });
            loadeatherInfoForNextDays(code);


        })
    }


    function loadeatherInfoForNextDays(code) {
        $('#upcoming span').empty();
        $.ajax({
            url: URL + `forecast/upcoming/${code}.json `
        }).then(function (res) {


            for (let i = 0; i < 3; i++) {

                let upcomingSpan = $('<span class="upcoming"></span>');

                let condition = res['forecast'][i].condition;
                let lowDegree = res['forecast'][i].low;
                let highDegree = res['forecast'][i].high;

                let degreeExpression = lowDegree + symbols['Degrees'] + '/' + highDegree + symbols['Degrees'];

                let spanForSymbol = $(`<span class="symbol">${symbols[condition]}</span>`);
                let spanForDegrees = $(`<span class="forecast-data">${degreeExpression}</span>`);
                let spanForConditions = $(`<span class="forecast-data">${condition}</span>`);

                upcomingSpan.append(spanForSymbol);
                upcomingSpan.append(spanForDegrees);
                upcomingSpan.append(spanForConditions);

                $('#upcoming').append(upcomingSpan);

            }
        })
    }


}