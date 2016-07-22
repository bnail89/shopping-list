$("#addItem").click(function() {
    var value = $("#inputName").val() + "<input type='image' id='delete' src='images/trash-can.png' alt='Submit' width='20' height='20'>";
        $("ul").append("<li>" + value + "</li>");
});

$("ul").on("click","input", function(el){
    $(this).parent().remove()
});

$("ul").on("click", "li", function(){
    $(this).wrap("<strike>");
});

