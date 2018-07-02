function attachEvents() {
    let URL = 'https://baas.kinvey.com/appdata/kid_BkoOl3wqM/';
    $('#btnLoadPosts').on("click" , loadPost);
    $('#btnViewPost').on('click' , viewPosts)
    let USERNAME = "Peter";
    let PASSWORD = "p";
    let Base64 = btoa(USERNAME + ":" + PASSWORD);
    let authHeaders = {"Authorization":"Basic " + Base64};


    function viewPosts() {

        let postTitle = $("#posts option:selected").text();
        $('#post-title').text(`${postTitle}`);
        let postId = $("#posts option:selected").val();

        $("#post-comments").empty()
        $.ajax({
            url: URL + `comments?query={"post_id":"${postId}"}`,
            headers: authHeaders
        }).then(function (res) {
            for (let obj of res){
                $('#post-comments').append(`<li>${obj['text']}</li>`)
            }

        })

    }


    function loadPost() {

        $.ajax({
            url: URL + "posts",
            headers : authHeaders

        }).then(function (res) {

            for (let obj of res) {
                $("#posts").append(
                    $(`<option value="${obj["_id"]}">${obj["title"]}</option>`)
                )
            };

        })

    }
}

