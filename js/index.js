window.onload=function () {
  //  轮播图
    let bannerBox=document.querySelector(".banner-box");
    let img=bannerBox.getElementsByTagName("li");
    let flag=document.querySelector(".banner-flag");
    let bannerLis=flag.querySelectorAll("li");
    console.log(flag,bannerLis);
    next=0;
    now=0;
    setInterval(move,3000);
    function move() {
        for (let i=0;i<img.length;i++){
            bannerLis[i].className="";
        }
        next++;
        if (next>img.length-1){
            next=0;
        }
        img[next].style.left="7.5rem";
        animate(img[now],{left:-750});
        animate(img[next],{left: 0});
        bannerLis[next].className="hot";
        now=next;
    }

//    入驻遮罩页面
    let zzPage=document.querySelector(".all-zz");
    let rzBtn=document.querySelector(".all-ruzhu");
    let close=document.querySelector(".close");
    console.log(zzPage, rzBtn, close);

    rzBtn.onclick=function () {
        zzPage.style.zIndex="998";
    };
    close.onclick=function () {
        zzPage.style.zIndex="-998";
    }
};