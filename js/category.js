$(function () {

    $.ajax({
        url: 'http://127.0.0.1:9090/api/getcategorytitle',
        dataType: 'json',
        success: function (info) {
            // console.log(info);
            $(".cate_search ul").html(template("tpl", info));
        }
    })

    $(".cate_search>ul").on("tap", ".li_title", function () {

        var id=$(this).data('id');

        // console.log(id);
        
        $.ajax({
            url: 'http://127.0.0.1:9090/api/getcategory',
            dataType: 'json',
            data: {
                titleid: id,
            },
            success: function (info) {
                console.log(info);
                $(".cs_second").html(template("tpl2", info));
            }
        })
    })



})