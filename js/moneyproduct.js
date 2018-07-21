 $(function () {  

    var productid = getSearch("productid");
    console.log(productid);
    
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getmoneyctrlproduct',
        data: {
            productid: productid,
        },
        dataType: 'json',
        success: function (info) {  
            console.log(info);
            $(".main").html(template("tpl", info));
        }
    })
 })