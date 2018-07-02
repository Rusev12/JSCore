function solve() {
    const URL = "https://judgetests.firebaseio.com/schedule";

    let nextStationId  = "depot";
    let stationName = "";

    function depart() {
        $("#depart").prop('disabled',true);
        $("#arrive").prop('disabled',false);

        $.ajax({
            url:URL + `/${nextStationId}.json`,
        }).then(displayResult)
            .catch(displayErrors)

        function displayResult(response) {
            $(".info").text("Next Stop " +response.name);

            nextStationId = response.next;
            stationName = response.name;
        }

        function displayErrors(err) {
            $("#depart").prop('disabled',true);
            $("#arrive").prop('disabled',true);

            $(".info").text("Error");

        }

    }

    function arrive() {
        $("#depart").prop('disabled',false);
        $("#arrive").prop('disabled',true);
        $(".info").text("Arriving at " +stationName);
    }
    return {
        depart,
        arrive
    };
}
let result = solve();