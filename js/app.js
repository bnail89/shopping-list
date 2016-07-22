$("#addItem").click(function(){
    var text = $("#inputName").val() + "<input type='image' id='delete' src='images/trash-can.png' alt='Submit' width='20' height='20'>";
    if(text.length){
        $("<li />", {html: text}).appendTo("ul.itemList")
    }
});

$("ul").on("click","input", function(el){
    $(this).parent().remove()
});