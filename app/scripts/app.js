

$(document).ready(function(){
	//$("#content").load("templates/home.html")
    $(".bb-swap").click(function(){
        $("#content").load("templates/bike-barn.html");
    });
    $(".td-swap").click(function(){
        $("#content").load("templates/to-do.html");
    });
    $(".main-return").click(function(){
        $("#content").load("templates/home.html");
    });
});