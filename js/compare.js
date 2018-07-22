$(function () {  

    var productId = getSearch("productId");
    console.log(productId);
    
    // 商品详情

    $.ajax({
        url: 'http://127.0.0.1:9090/api/getproduct',
        data: {
            productid : productId ,
        },
        dateType: 'json',
        success: function (info) {  
            console.log(info);
            
            $(".ct").html(template("tpl", info));
        }
    })


})