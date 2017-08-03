var apiURL = "https://media3.giphy.com/media/qg5pk8s2h5kJy/giphy.gif";
var api_key = "42537b82781542f48d79b01d77d53246"
// $.ajax({
//     url:apiURL,
//     success:function(data){
//         myFunction(data);
//     }
// });


var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=nfl+fails&api_key="+api_key+"&limit=5");
xhr.done(function(data) {
     console.log("success got data", data); 
     var imageURL = data.data[0].images.original.url;
     $("#mainImage").attr("src",imageURL);
     console.log(imageURL)
});

// function myFunction(data){
//     var NBA = data.results[0].name.first;
    

//     console.log(data.results[0].location.state);
//     var state = data.results[0].location.state;
//     $("body").append("<h2>" +firstName+" "+lastName+" "+state+" </h2>");
    
// }