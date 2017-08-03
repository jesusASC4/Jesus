// ID e62eb07d
//KEY 767a58befef3d251181c915da0e3dbad

var MY_ID = "e62eb07d";
var MY_KEY = "767a58befef3d251181c915da0e3dbad";
var bigMacURL = "https://api.nutritionix.com/v1_1/search/bigmac?results=0:5&fields=item_name,brand_name,item_id,nf_calories&appId=e62eb07d&appKey=767a58befef3d251181c915da0e3dbad";

$.ajax({
    url:bigMacURL,
    success:function(data){
         //console.log(data);
         var food = data.hits[0];
         var name = food.fields.item_name;
         var cals = food.fields.nf_calories;

         $("body").append("<h2>This"+name+" has "+cals+" cals|</h2>");

    }
});