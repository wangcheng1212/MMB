$(function () {  

    var couponid = getSearch("couponId");
    // console.log(couponid);
    
    $.ajax({

        url: 'http://127.0.0.1:9090/api/getcouponproduct',
        dataType: 'json',
        data: {
            couponid: couponid,
        },
        success: function (info) {  
            console.log(info);
            $(".main ul").html(template("tpl", info));
        }
        
    })

    // $(".main ul").on("click", "a" , function () {  
    //     var mask = mui.createMask(callback);//callback为用户点击蒙版时自动执行的回调；
    // })
})