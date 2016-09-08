//海葵对象
var AmeObj=function(){
    this.rootX=[];//海葵的宽度；
    this.ameX=[];///海葵X、Y轴位置；
    this.ameY=[];
    this.range=0;
    this.num=90;
};

AmeObj.prototype.init=function(){
    for(var i=0;i<this.num;i++){
        this.rootX[i]=i*16+Math.random()*10;
        
        this.ameY[i]=400+Math.random()*10
    }
};
AmeObj.prototype.draw=function(){
    this.range+=0.2*Math.random();
    var l=Math.sin(this.range);
    ctx2.lineCap='round';
    ctx2.lineWidth=15;
    ctx2.strokeStyle="rgba(238,244,56,0.5)";
    for(var i=0;i<this.num;i++){
        this.ameX[i]=this.rootX[i]+l*20;
        ctx2.beginPath();
        ctx2.moveTo(this.rootX[i],600);
        ctx2.quadraticCurveTo(this.ameX[i],this.ameY[i],this.ameX[i],this.ameY[i]);
        ctx2.stroke();
        
    }
    
};

