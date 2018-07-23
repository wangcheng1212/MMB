 $(function () {  

    $.ajax({
        url: 'http://127.0.0.1:9090/api/getbrandtitle',
        dataType: 'json',
        success: function (info) {  
            console.log(info);
            $(".rand_cont").html(template("tpl", info));
        }

    })

    mui('body').on('tap','a',function(){document.location.href=this.href;});
 })