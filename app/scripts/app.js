

$(document).ready(function(){
    $(".bb-swap").click(function(){
        $("#content").load("templates/bike-barn.html");
    });
    $(".td-swap").click(function(){
        $("#content").load("templates/to-do.html");
    });
});