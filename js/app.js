$('#addItem').click(function(){
    var text = $('#inputName').val() + '<button>x</button>';
    if(text.length){
        $('<li />', {html: text}).appendTo('ul.itemList')
    }
});

$('ul').on('click','button' , function(el){
    $(this).parent().remove()
});