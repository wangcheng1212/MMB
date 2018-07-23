 $(function () {

     var brandtitleid = getSearch("brandTitleId");
     console.log(brandtitleid);

     // 牌子好
     $.ajax({
         url: 'http://127.0.0.1:9090/api/getbrand',
         data: {
             brandtitleid: brandtitleid,
         },
         dataType: 'json',
         success: function (info) {
             console.log(info);
             $(".main .rand_cont").html(template("tpl", info));
         }
     })
     // 销量排名
     $.ajax({
         url: 'http://127.0.0.1:9090/api/getbrandproductlist',
         data: {
             brandtitleid: brandtitleid,
             // pagesize = +4 ,
         },
         dataType: 'json',
         success: function (info) {
             console.log(info);
             $(".num_rand ul").html(template("tpl1", info));

             var productid = info.result[0].productId;

             $.ajax({
                 url: 'http://127.0.0.1:9090/api/getproductcom',
                 data: {
                     productid: productid,

                     // pagesize = +4 ,
                 },
                 dataType: 'json',
                 success: function (info) {
                     console.log(info);
                     $(".newComment ul").html(template("tpl2", info));

                 }
             })


         }
     })
 })