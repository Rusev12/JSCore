function loadCommits() {
    $("#commits").empty();
   let username = $("#username").val();
   let repo = $("#repo").val();

   $.ajax({
        url : `https://api.github.com/repos/${username}/${repo}/commits`,

   }).then(function (res) {
       for (let obj of res) {
           $("#commits").append(`<li>${obj.commit.author.name}: ${obj.commit.message}</li>`)
       }
   }).catch(function (err) {
       $("#commits").append(`<li>Error: ${err.status} (${err.statusText})</li>`)
   })
}