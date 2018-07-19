$(function () {

    // 首页菜单栏
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getindexmenu',
        dataType: 'json',
        success: function (info) {
            console.log(info);
            $(".nav ul").html(template("tpl", info));

        // 点击更多显示与隐藏
            $(".nav li:nth-child(n+9)").addClass("hidden");
            $(".nav").on("click", "li:nth-child(8)", function () {  
                $(".nav li:nth-child(n+9)").toggleClass("hidden");
            })
        }
    })

    // 首页的折扣列表
    $.ajax({
        url:'http://127.0.0.1:9090/api/getmoneyctrl',
        dataType: 'json',
        success: function (info) {  
            console.log(info);
            $(".r_content ul").html(template("tpl1", info));
        }
    })





})