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
    $("#page").on("change","option", function () {  
        console.log("haha");
        
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
                $(".main ul").html(template("tpl1", info));
                
                numPage = Math.ceil(info.totalCount / info.pagesize);//页数
                // console.log(numPage);
                
            }
        })
    }


 })