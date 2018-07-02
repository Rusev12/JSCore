function attachEvents() {
   $("#btnLoad").on("click",loadInfo);
   $("#btnCreate").on("click" , createPerson)
   const URL = 'https://phonebook-nakov.firebaseio.com/phonebook.json';

   function createPerson() {
       let personName = $("#person").val();
       let phone = $("#phone").val();
       $("#person").val('');
       $("#phone").val('');
       let personObj = JSON.stringify({
           person: personName,
           phone: phone
       });


       $.post(URL , personObj).then(loadInfo)

   }

   function loadInfo() {
        $.ajax({
            url: URL
        }).then(loadPhoneNumbers)
   }

   function loadPhoneNumbers(response) {
       $('#phonebook').empty();
       for (let obj in response) {

           let buttonDelete = $('<button id="btnDelete">[Delete]</button>');

           let li = $(`<li>${response[obj].person}: ${response[obj].phone}</li>`);

           li.append(buttonDelete.on("click" , function () {
               $.ajax({
                   method : "DELETE",
                   url: `https://phonebook-nakov.firebaseio.com/phonebook/${obj}.json`
               }).then(loadInfo)
           }));

           $("#phonebook").append(li);

       }

   }

}

