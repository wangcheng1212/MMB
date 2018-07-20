$(function () {  

    // 商品详情
    var productId = getSearch("productId");
    console.log(productId);
    
    $.ajax({
        url: 'http://mmb.ittun.com/api/getproduct',
        data: {
            productid : productId ,
        },
        dateType: 'json',
        success: function (info) {  
            console.log(info);

            
        }
    })


})