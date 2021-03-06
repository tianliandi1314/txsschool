/**
 *main.html
 *@auther Administrator
 *@create 2016-09-05 22:45 2016/9/5
 *Created by Administrator on 2016/9/5.
 **/
'use strict';
var nav=document.getElementById("nav");
var lis=document.querySelectorAll("li");

//给封面添加点击事件
var clicked=true;	//用来判断是否是第一次点击
lis[lis.length-1].onclick=function(){
    /*
     * i:	0		1		2		3		4		5		6	7	8	9	10	11
     * n:	-6		-5		-4		-3		-2		-1		0	1	2	3	4	5
     * 度数：-90		-75		-60		-45		-30		-15		0	15	30	45	60	75
     */
    for(var i=0;i<lis.length;i++){
        //拿i的值减去个lis/2就能够算出来n的值，然后拿n的值乘以15就能算出来各自对应的度数
        var n=i-lis.length/2;

        if(clicked){
            n=n*15;
        }else{
            n=360;
        }

        lis[i].style.transform='rotate('+n+'deg)';
    }
    clicked=!clicked;		//每点击一次就换个值
};

//给每一个li添加点击事件
for(var i=0;i<lis.length-1;i++){
    lis[i].index=i;
    lis[i].onclick=function(){
        /*
         * 点击时候要做的事情
         * 	1、点击的那个图片要转到0deg
         * 	2、点击图片的左边所有图片依次减去15deg
         * 	3、点击图片的右边所有图片依次加上15deg（紧挨着的那个图片要加上30deg）
         */
        var leftDeg=0;		//左边初始值的度数
        var rightDeg=15;		//右边初始值的度数

        //当前图片旋转
        this.style.transform='rotate(0deg)';
        //左边图片旋转
        for(var i=this.index-1;i>=0;i--){
            leftDeg-=15;
            lis[i].style.transform='rotate('+leftDeg+'deg)';
        }

        //右边图片旋转
        for(var i=this.index+1;i<lis.length;i++){
            rightDeg+=15;
            lis[i].style.transform='rotate('+rightDeg+'deg)';
        }

    };
}







//canvas气泡效果
var canvas=document.getElementById("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight+400;
var context=canvas.getContext('2d');
var balls=[];
var colors=['#69D2E7','#A7DBD8','#E0E4CC','#F38630','#FA6900','#FF4E50','#F9D423'];
var timer;

/*
 * 一个圆
 * 	1、半径不同
 * 	2、颜色不同
 * 	3、位置不同
 * 	4、速度不同
 *
 * var ball={
 *	x:x轴的位置,
 * 	y:y轴的位置,
 * 	r:圆的半径,
 * 	vx:x轴的速度,
 * 	vy:y轴的速度,
 * 	color:颜色
 * }
 *
 * 角度转弧度
 * 		角度*π/180
 * 		360*π/180
 */

//在canvas上画圆
function draw(ball){
    context.beginPath();		//开始的路径
    //arc(x轴位置,y轴位置,半径,起始弧度,结束弧度)
    context.arc(ball.x,ball.y,ball.r,0,Math.PI*2);
    context.fillStyle=ball.corlor;	//给圆填充颜色
    context.globalCompositeOperation='lighter';		//合成
    context.fill();
}

//取x到y之间随机数：Math.round(Math.random()*(y-x)+x)
function random(min,max){
    return Math.round(Math.random()*(max-min)+min);
}

//给canvas添加移动事件
var on=true;		//用来让鼠标移动的时候定时器也可以跑
canvas.onmousemove=function(ev){
    //在移动的时候创建两个圆就够了
    for(var i=0;i<2;i++){
        var ball={
            x:random(-5,5)+ev.clientX,
            y:random(-5,5)+ev.clientY+window.pageYOffset,
            r:random(10,45),
            vx:Math.random()-0.5,
            vy:Math.random()-0.5,
            corlor:colors[random(0,colors.length-1)]
        };

        balls.push(ball);
        if(balls.length>300){
            balls.shift();
        }
    }

    //让定时器只开启一次
    if(on){
        clearInterval(timer);
        timer=setInterval(drallBall,30);
        on=false;
    }


    function drallBall(){
        context.clearRect(0,0,canvas.width,canvas.height);

        for(var i=0;i<balls.length;i++){
            //需要在画的时候把球的位置还有半径都改了，这样的话看上去球才会动
            balls[i].x+=balls[i].vx*8;		//通过速度改变x轴的位置
            balls[i].y+=balls[i].vy*8;		//通过速度改变y轴的位置
            balls[i].r=balls[i].r*0.94;		//改变球的半径

            balls[i].index=i;		//添加这个索引为了在下面能够找到它并删除

            //如果小球的半径小于1的话，就不让canvas再画它了
            if(balls[i].r<1){
                balls.splice(balls[i].index,1);
                continue;		//如果小球已经被删了，下面的代码就不用再走了
            }

            draw(balls[i]);


            //如果balls的数组里已经没有东西了，就把定时器清除掉
            if(!balls.length){
                clearInterval(timer);
                on=true;		//让on的值与定时器保持一致
            }
        }
    }
};