$(function () {  

    $.ajax({
        url: 'http://127.0.0.1:9090/api/getinlanddiscount',
        dataType: 'json',
        success: function (info) {  
            console.log(info);
            $(".main ul").html(template("tpl", info));
        }
    })


})