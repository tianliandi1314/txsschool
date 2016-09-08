/**
 *js.html
 *@auther Administrator
 *@create 2016-09-01 20:01 2016/9/1
 *Created by Administrator on 2016/9/1.
 **/
'use strict';
window.onload=function () {
init();
};
var ck1,ck2,ck3;
var sum=0;
var button1,button2;
var time=0;
var mouse=0;
function  init() {
    var ul=document.querySelector("#ul1");
    var str1="<li><img src='imgs/00.jpg' name='image' onclick='clickMouse(this)'></li>"
    for(var i=0;i<25;i++){
        ul.innerHTML += str1;
    }
    button1 = document.getElementById("start");
}
function  showImage() {
    var images=document.getElementsByClassName("image");
    var index=Math.floor(Math.random()*25);
    images[index].src="image/01.jpg";
    ck1 = setTimeout("stopImage（"+index+")",900);
    sum+=1;
}
function stopImage(index) {
    document.images[index].src="image/00.jpg";
}

function startGame() {
    time=10;
    ck2 = setInterval("showImage()",1000);
}