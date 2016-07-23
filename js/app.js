$('#input').submit(function(e) {
    e.preventDefault();
    var value = $("#inputName").val();
    $("#inputName").val("");

    var itemHTML = "<li><span class='item'>" + value + "</span><input type='image' class='delete' " + 
    "src='images/trash-can.png' alt='Submit' width='20' height='20'></li>";
    $("#itemList").append(itemHTML);  
})

$("#itemList").on("click",".delete", function(el){
    $(this).parent().remove()
});

$("#itemList").on("click", ".item", function(){
    $(this).wrap("<strike>");
});

