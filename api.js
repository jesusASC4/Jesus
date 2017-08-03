 var URL = "https://swapi.co/api/people/1/";


 $.ajax({
    url:URL,
    success:function(data){
         console.log(data);
          var gender = data.gender;
          var name = data.name;
          var mass = data.mass;
          var height = data.height;
          var birth_year = data.birth_year;
         $("body").append("<h2>"+name+" is a "+gender+" , weighs" +mass+ " kgs ,is "+height+ "   tall and was born "+birth_year+"</h2>");

    }
});