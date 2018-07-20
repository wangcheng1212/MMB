mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});

// 回到顶部
$(".back_top").on("click", function () {
    mui('.mui-scroll-wrapper').scroll().scrollTo(0, 0, 100);
})

// 获取id值
function getSearchObj() {
    var search = location.search;
    // console.log(search);
    search = decodeURI(search);
    // console.log(search);
    search = search.slice(1);
    // console.log(search);
    var arr = search.split("&");
    // console.log(arr);
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        var key = arr[i].split("=")[0];
        var value = arr[i].split("=")[1];
        // console.log(key);
        // console.log(value);
        obj[key] = value;
        // console.log(obj);

    }
    return obj;
}

// 获取返回值
function getSearch(key) {  
    return getSearchObj()[key];
}
