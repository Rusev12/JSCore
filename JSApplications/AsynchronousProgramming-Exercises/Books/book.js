function attachEvents() {
    const BASE_URL = 'https://baas.kinvey.com/appdata/kid_S1IF6V5qf/Books';
    const USERNAME = 'slavi';
    const PASSWORD = 'slavi';
    let BASE_64 = btoa(USERNAME + ":" + PASSWORD);
    const AUTH = {"Authorization": "Basic "+BASE_64};

    $('.load').on('click' , loadAllBooks);
    $('.add').on('click' , addBook);


    function addBook() {
        let title = $('.title').val();
        let author =  $('.author').val();
        let dateOfPublish =  $('.dateOfPublish').val();

        let data = {
            'title' : title,
            'author' : author,
            'dateOfPublish' : dateOfPublish
        }

        request('POST' , BASE_URL , AUTH ,data).then(loadAllBooks)
    }



    function loadAllBooks() {
        request("GET" , BASE_URL , AUTH ).then(function (res) {
            for (let obj of res) {

                $('#main').append($('<div id="books"></div>')
                    .append($(`<div class="book" data-id="${obj._id}"></div>`)
                        .append($('<label>Author</label>'))
                        .append($(`<input type="text" class="author" value="${obj.author}"/>`))
                        .append($('<label>Title</label>'))
                        .append($(`<input type="text" class="title" value="${obj.title}"/>`))
                        .append($('<label>Date Of Publish</label>'))
                        .append($(`<input type="text" class="dateOfPublish" value="${obj.dateOfPublish}"/>`))
                        .append($('<button class="update" >Update</button>'))
                        .append($('<button class="delete">Delete</button>'))))


            }


            $('.delete').on('click', deleteBook);
            $('.update').on('click', updateBook)

        });

    }
    function updateBook () {
        let id = $(this).parent().attr('data-id');

        let title = $(this).parent().find('.title').val();
        let author = $(this).parent().find('.author').val();
        let dateOfPublish = $(this).parent().find('.dateOfPublish').val();

        let obj = {
            'title' : title,
            'author' : author,
            'dateOfPublish' : dateOfPublish
        };

        request('PUT', BASE_URL + '/' + id , AUTH , obj).then(loadAllBooks)
}

    function deleteBook() {
        let id = $(this).parent().attr('data-id');

        $.ajax({
            method : "DELETE",
            url : BASE_URL + '/' + id,
            headers: AUTH

        }).then(function () {
            console.log("S")
        })
    }

}



function request(method , urlPath  , auth , data) {
    return $.ajax({
        method : method,
        url : urlPath,
        headers : auth,
        data : data
    })
}