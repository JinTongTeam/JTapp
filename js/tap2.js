window.onload=function () {
    let navlis=document.querySelectorAll("nav li");
    let drop=document.querySelector(".drop");
    let dark=document.querySelector(".dark")
    let span=document.querySelector("nav li span");
    let i=document.querySelector("nav li i");
    console.log(drop, navlis,span,i,dark);
    for (let i=0;i<navlis.length;i++) {
        navlis[i].onclick=function () {
            drop.style.height="11.33rem";
        }

    }
    dark.onclick=function () {
        drop.style.height="0";
    }
}