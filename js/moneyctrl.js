 $(function () {  


    var pageid = 0;
    var numPage = 0;
    // 第一次加载时渲染
    render();

    
    // 分页
    // 下一页
    $(".page_right button").on('click', function () {  
        
        if(pageid >= 0 && pageid < numPage){
            pageid++;
            render();
        }
    })
    // 上一页
    $(".page_left button").on('click', function () {  
        
        if(pageid > 0 && pageid <= numPage){
            pageid--;
            render();
        }
    })

    // 中间
    $(".page_middle select").on("change", function () {  
        
        console.log("haha");
        
        // pageid =
        // location.href =
    })


//  渲染函数
    function render() {  

        $.ajax({
            url:'http://127.0.0.1:9090/api/getmoneyctrl',
            dataType: 'json',
            data:{
                pageid: pageid,
            },
            success: function (info) {  
                console.log(info);
                $(".main ul").html(template("tpl1", info));//渲染主体
                $(".page_middle select").html(template("tpl2", info));//渲染分页

                numPage = Math.ceil(info.totalCount / info.pagesize);//页数
                info.numPage = numPage;
                info.pageid = pageid;
                console.log(numPage);
                console.log(pageid);
            }
        })
    }


 })