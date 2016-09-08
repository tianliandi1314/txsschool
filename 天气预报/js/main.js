
/**
 *main.html
 *@auther Administrator
 *@create 2016-08-28 18:53 2016/8/28
 *Created by Administrator on 2016/8/28.
 **/
'use strict';
$('#gz').click(function () {
    alert(1);
    $(".gz").css({"transition": "all 1s","top":"0","left":"0","width":"100%","height":"100%","opacity":"1"})
});
$('.cl_gz').click(function () {
    $(".gz").css({
        "transition": "all 1s",
        "width": "0",
        "height": "0",
        "left": "17%",
        "top": "300px",
        "opacity": "0"
    });
});

$('#hy').click(function () {
    $("#div_hy").css({"transition": "all 1s","top":"0","left":"0","width":"100%","height":"100%","opacity":"1"})
});
$('.cl_hy').click(function () {
    $("#div_hy").css({
        "position":"relative",
        "transition": "all 1s",
        "width": "0",
        "height": "0",
        "left": "50%",
        "top": "300px",
        "opacity": "0"
    });
});

$('#bj').click(function () {
    $("#div_bj").css({"transition": "all 1s","top":"0","left":"0","width":"100%","height":"100%","opacity":"1"})
});
$('.cl_bj').click(function () {
    $("#div_bj").css({
        "position":"relative",
        "transition": "all 1s",
        "width": "0",
        "height": "0",
        "left": "85%",
        "top": "300px",
        "opacity": "0"
    });
});

