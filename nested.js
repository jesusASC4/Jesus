var apiURL = "https://randomuser.me/api"
var natURL = "https://restcountries.eu/rest/v2/alpha?codes="

$.ajax({
    url:apiURL,
    success:function(data){
       myFunction(data);
    }
});


function myFunction(data){
    var firstName = (data.results[0].name.first);
    console.log (firstName)
    var lastName = (data.results[0].name.last);
    var gender = (data.results[0].gender);
    var dob = (data.results[0].dob);
    var country = (data.results[0].nat);
    console.log (country);
    var image = (data.results[0].picture.medium);

    $.ajax({
        url:natURL+country,
        success:function(data2){
            var country = (data2[0].name);
        }
    })
     console.log(country);

    $("body").append("<h2>"+firstName+" "+lastName+"</h2>");
    $("body").append("<h2>"+gender+"</h2>");
    $("body").append("<h2>"+dob+"</h2>");
    $("body").append("<h2>"+country+"</h2>");
    $("body").append("<img src="+image+"'>");
    $("body").append("<h2"+countryName+"</h2>");


}



