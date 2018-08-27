window.onload=function () {
    let navTop=document.querySelector(".navtop");
    let nav1=document.querySelectorAll(".navtop .nav1");
    let concent=document.querySelectorAll(".concent");
    console.log(concent);
    for(let i=0;i<nav1.length;i++){
        nav1[i].onclick=function () {
            for(let j=0;j<nav1.length;j++){
                concent[j].style.zIndex="5";
            }
            concent[i].style.zIndex="10";
        }
    }
}