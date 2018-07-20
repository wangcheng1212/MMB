$(function () {

    // 渲染导航名称
    var categoryId = getSearch("categoryId");

    $.ajax({
        url: 'http://127.0.0.1:9090/api/getcategorybyid',
        data: {
            categoryid: categoryId,
        },
        dataType: 'json',
        success: function (info) {
            console.log(info);
            $(".n_left").html(template("tpl", info));
        }
    })

    // 渲染商品列表页
    var pageId = getSearch("pageId");
    // console.log(pageId);

    var numPage = 0;
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getproductlist',
        data: {
            categoryid: categoryId,
            pageid: pageId,
        },
        success: function (info) {
            console.log(info);
            $(".r_content ul").html(template("tpl1", info));

            // 分页渲染
            info.pageId = pageId;
            // console.log(pageId);

            info.numPage = numPage = Math.ceil(info.totalCount / info.pagesize); //页数 = 总数 / 每页大小 传入info对象里
            $(".pagenation .page_middle").html(template("tpl2", info));

        }
    })
    // 上一页

    $(".page_left button").on("click", function () {

        if (pageId <= numPage & pageId > 1) {
            var url = location.search;
            console.log(url);
            var newUrl = url.substr(0, url.length - 1) + (+pageId - 1);
            console.log(newUrl);

            //点击的时候跳转
            location.href = newUrl;
        }

    })

    // // 下一页
    $(".page_right button").on("click", function () {

        if (pageId < numPage & pageId >= 1) {
            var url = location.search;
            console.log(url);
            pageId++;
            var newUrl = url.substr(0, url.length - 1) + pageId;

            console.log(newUrl);
            //点击的时候跳转
            location.href = newUrl;
            // }

        }

    })

    // 中间分页
    $(".page_middle").on('change', 'select', function () {
        // console.log("hah");

        var url = location.search;
        var id = $(this).val();
        
        location.href = url.slice(0, url.length - 1) + id;
    })




})