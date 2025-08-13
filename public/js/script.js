$(document).ready(function(){
    $("#button_dog").click(function(){
        $.getJSON("https://dog.ceo/api/breeds/image/random", function(data){
            $("#dog_image").attr("src", data.message);
        });
    });
});