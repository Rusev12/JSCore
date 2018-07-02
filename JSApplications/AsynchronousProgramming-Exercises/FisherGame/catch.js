function attachEvents() {
    $('.catch').empty();
    const BASE_URL = ' https://baas.kinvey.com/appdata/kid_S1IF6V5qf/biggestCatches';
    const USERNAME = 'kamen';
    const PASSWORD = 'litex2012';
    let BASE_64 = btoa(USERNAME + ":" + PASSWORD);
    const AUTH = {"Authorization": "Basic "+BASE_64};

    $('.load').on("click" , loadAllCatches);
    $('.update').on('click' , updateCatches);
    $('.add').on('click' , addCatching);
    $('.delete').on('click' , deleteCatching);

    function addCatching() {
        let angler = $('#addForm .angler').val();
        let weight = Number($('#addForm .weight').val());
        let species = $('#addForm .species').val();
        let location = $('#addForm .location').val();
        let bait = $('#addForm .bait').val();
        let captureTime = +$('#addForm .captureTime').val();

        let catchingData = {
            'angler' : angler,
            'weight' : +weight,
            'species' : species,
            'location' : location,
            'bait' : bait,
            'captureTime' : +captureTime
        };

        $.ajax({
            method : 'POST',
            url: BASE_URL,
            headers : AUTH,
            data : catchingData
        }).then(loadAllCatches)
    }
    

    function loadAllCatches() {

        $('#main').empty();
        $.ajax({
            url: BASE_URL,
            headers : AUTH
        }).then(loadExistingCatches);

        function loadExistingCatches(res) {
            for (let obj of res) {
                $('#main').append($('<div id="catches"></div>')
                    .append($(`<div class="catch" data-id="${obj._id}"></div>`)
                        .append($('<label>Angler</label>'))
                        .append($(`<input type="text" class="angler" value="${obj.angler}"/>`))
                        .append($('<label>Weight</label>'))
                        .append($(`<input type="number" class="weight" value="${obj.weight}"/>`))
                        .append($('<label>Species</label>'))
                        .append($(`<input type="text" class="species" value="${obj.species}"/>`))
                        .append($('<label>Location</label>'))
                        .append($(`<input type="text" class="location" value="${obj.location}"/>`))
                        .append($('<label>Bait</label>'))
                        .append($(`<input type="text" class="bait" value="${obj.bait}"/>`))
                        .append($('<label>Capture Time</label>'))
                        .append($(`<input type="number" class="captureTime" value="${obj.captureTime}"/>`))
                        .append($('<button class="update">Update</button>'))
                        .append($('<button class="delete">Delete</button>'))))
            }

            $('.update').on('click' ,updateCatches);
            $('.delete').on('click' , deleteCatching);

        }

    }
    
    
    function updateCatches() {
        let id = $(this).parent().attr('data-id');
        let angler = $(this).parent().find('.angler').val();
        let weight = Number($(this).parent().find('.weight').val());
        let species = $(this).parent().find('.species').val();
        let location = $(this).parent().find('.location').val();
        let bait = $(this).parent().find('.bait').val();
        let captureTime = +$(this).parent().find('.captureTime').val();

        let obj = {
            'angler' : angler,
            'weight' : +weight,
            'species' : species,
            'location' : location,
            'bait' : bait,
            'captureTime' : +captureTime
        }

        $.ajax({
            url: BASE_URL + "/" + id,
            method : 'PUT',
            headers : AUTH,
            data : obj

        }).then(loadAllCatches)



    }

    function deleteCatching(num) {
        let id = $(this).parent().attr('data-id');

        $.ajax({
            method : 'DELETE',
            url: BASE_URL + '/' + id,
            headers : AUTH,
        }).then(loadAllCatches)

    }
}