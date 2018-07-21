$(function () {  

    var productId = getSearch("productId");
    console.log(productId);
    
    // 商品详情

    $.ajax({
        url: 'http://mmb.ittun.com/api/getproduct',
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