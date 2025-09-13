var Suc,ne,levelC,GamePlace;
function starting(){ 
    if(len==11)location.reload();
    Suc=document.getElementsByClassName("Succ")[0];
    Suc.style.display="none";
    GamePlace=document.getElementsByClassName("par1")[0];
    GamePlace.style.display="block";
    GamePlace.style.display="flex";
    ne=document.getElementsByClassName("statButton")[0];
    ne.innerHTML="Next Level";
    levelC=document.getElementsByClassName("lev1")[0];
    levelC.style.display="block";
    levelC.innerHTML="LEVEL "+(len-4)+" COMPLETED";
}
var len=5;
genAr();
var Area;
function genAr(){
    if(len==11) gameComplete();
    Area=document.getElementsByClassName("GameArea")[0];
    Area.style.width=len*53;
    Area.style.height=len*50;
    contrl();
    genImg();
}
var topA,leftA,topV,leftV,topI,leftI,imgcontorl,Starcontorl,SCon,CBCon;
var Score=0;
function genImg(){
    console.log("i am img gen");
    imgcontorl=document.getElementsByClassName("imgm")[0];
    imgcontorl.style.display="block";
    imgcontorl.style.top=0;
    imgcontorl.style.left=0;
    topA=[];
    leftA=[];
    topV=0;
    leftV=0;
    for(let k=0;k<len;k++){
        topA.push(topV);
        topV+=50;
        leftA.push(leftV);
        leftV+=53;
    }
    console.log(topA,leftA);
    Starcontorl=document.getElementsByClassName("imgS")[0];
    Starcontorl.style.display="block";
    SCon=document.getElementsByClassName("Scdiv")[0];
    SCon.style.display="block";
    CBCon=document.getElementsByClassName("Control_Buttons")[0];
    CBCon.style.display="block";
    CBCon.style.display="flex";    
    randomN();
}
{
    var top_min=0;
    var left_min=0;
    var top_max=(len-1)*50;
    var left_max=(len-1)*53;
    function upfun(){
        if(top_min== 0) out();
        else{
            top_min-=50;
            imgcontorl.style.top=top_min;
            check();
        }
    }
    function leftfun(){
        if(left_min== 0) out();
        else{
            left_min-=53;
            imgcontorl.style.left=left_min;
            imgcontorl.style.transform= `rotateY(180deg)`;
            check();
        }
    }
    function downfun(){
        if(top_min== top_max) out();
        else{
            top_min+=50;
            imgcontorl.style.top=top_min;
            check();
        }
    }
    function rightfun(){
        if(left_min == left_max) out();
        else{
            left_min+=53;
            imgcontorl.style.left=left_min;
            imgcontorl.style.transform= `rotateY(0deg)`;
            check(); 
        }
    }
    randomN();
}

function randomN(){
    topI=topA[Math.floor(Math.random()* topA.length)];
    leftI=leftA[Math.floor(Math.random()* leftA.length)];
    if(top_min===topI && left_min===leftI)randomN();
    Starcontorl.style.top=topI;
    Starcontorl.style.left=leftI;
}
var sol;
function check(){
    if(top_min===topI && left_min===leftI){
        Score+=1;
        sol=document.getElementsByClassName("ScoreVal")[0];
        sol.innerHTML=Score;
        randomN();
        // if(Score==2)setInterval(GameOver,400);//changed
        if(Score==2)GameOver();
    }

}
function contrl() {
    top_min=0;
    left_min=0;
    top_max=(len-1)*50;
    left_max=(len-1)*53;
}
function GameOver(){
    Suc.style.display="block";
    Suc.style.display="flex";
    GamePlace=document.getElementsByClassName("par1")[0];
    GamePlace.style.display="none";
    Score=0;
    sol.innerHTML=Score;
    GameStart();
}
function GameStart(){
    len+=1;
    arR();
}
function arR(){
    Area.style.width=0;
    Area.style.height=0;
    genAr();
}
function out(){
    Suc=document.getElementsByClassName("Succ")[0];
    Suc.style.display="block";
    Suc.style.display="flex";
    GamePlace=document.getElementsByClassName("par1")[0];
    GamePlace.style.display="none";
    Score=0;
    sol=document.getElementsByClassName("ScoreVal")[0];
    sol.innerHTML=Score;
    ne=document.getElementsByClassName("statButton")[0];
    ne.innerHTML="Continue!";
    levelC=document.getElementsByClassName("lev1")[0];
    levelC.innerHTML="OUT";
}
function gameComplete(){
    ne=document.getElementsByClassName("statButton")[0];
    ne.innerHTML="Game Over!";
    levelC=document.getElementsByClassName("lev1")[0];
    levelC.innerHTML="THANK YOU!";
}
