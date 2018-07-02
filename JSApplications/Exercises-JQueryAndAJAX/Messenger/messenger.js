function attachEvents() {
    $("#refresh").on("click",refresh);
    $("#submit").on("click",upload);

    let URL = "https://messenger-91ea6.firebaseio.com/.json";

    function refresh() {
        $("#messages").empty();
        $.ajax({
            url: URL,

        }).then(loadInfo);

    }

    function upload() {


        let name = $("#author").val();
        let content = $("#content").val();
        let jsonObect = JSON.stringify({
            author : name,
            content: content,
            timestamp : Date.now()
        });

        $.post(URL , jsonObect).then(refresh)

    }

    function loadInfo(response) {

        for (let obj in response) {
            let messege = response[obj];
            $("#messages").append(messege.author + ": " + messege.content + "\n")
        }
    }
}