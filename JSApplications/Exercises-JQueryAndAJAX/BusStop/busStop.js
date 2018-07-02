function getInfo() {
    let busId = $("#stopId").val();
    let URLS = `https://judgetests.firebaseio.com/businfo/${busId}.json`;

    console.log(URLS);

    $.ajax({
        url: URLS,
        success : displayRepos,
        error: displayError
    });


    function displayRepos(respos) {
        $('#stopName').empty();

        $("#buses").empty();

        $('#stopName').text(respos.name);

        let buses = respos.buses;

        let keys = Object.keys(respos.buses);

        for (let i = 0; i < keys.length; i++) {
            let li = $(`<li>Bus ${keys[i]} arrives in ${buses[keys[i]]}</li>`)
            $("#buses").append(li)

        }
    }

    function displayError(err) {
        $("#buses").empty();
        $('#stopName').text("Error");
    }

}