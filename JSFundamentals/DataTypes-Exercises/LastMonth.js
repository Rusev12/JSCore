
function calcLastMonth(arr) {
    let [day , month , year] = [arr[0] , arr[1] , arr[2]];
    let lastDay = 0;
    if(month == 3){
        if(leapYear(year)){
            lastDay = 29;
            console.log(29);
            return;
        }
        else {
            console.log(28);
            return;
        }
    }


    let date = new Date(year , month , day)
    let lastDays = new Date(year, month -1 , 0);

    console.log(lastDays.getDate());
    function leapYear(year)
    {
        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    }
}


calcLastMonth([13, 12, 2004]);
