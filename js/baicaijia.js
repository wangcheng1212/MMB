$(function () {


    var titleid = getSearch("titleid") || 0;
    // console.log(titleid);

    // nav
    $.ajax({

        url: 'http://127.0.0.1:9090/api/getbaicaijiatitle',
        dataType: 'json',
        success: function (info) {
            // console.log(info);
            
            info.result[titleid].now = 1;

            $(".main .ms").html(template("tpl", info));
        }

    })
    // 监听tap事件，解决 a标签 不能跳转页面问题
    mui('body').on('tap','a',function(){document.location.href=this.href;});
    // 主体



        $.ajax({
            url: 'http://127.0.0.1:9090/api/getbaicaijiaproduct',
            data: {
                titleid: titleid,
            },
            dataType: 'json',
            success: function (info) {
                console.log(info);
                $(".main li").html(template("tpl1", info));
            }
        })

})