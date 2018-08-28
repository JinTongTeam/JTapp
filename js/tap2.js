window.onload=function () {
    let navlis=document.querySelectorAll("nav li");
    let drop=document.querySelectorAll(".drop");
    let dark=document.querySelectorAll(".dark");

    // console.log(drop, navlis,dark,droplis);
    for (let i=0;i<navlis.length;i++) {
        navlis[i].onclick=function () {
            for(let j=0;j<navlis.length;j++){
                drop[j].style.display="none";
                drop[j].style.zIndex="5";
                navlis[j].style.color="#4ebbfe";
            }
            drop[i].style.display="block";
            drop[i].style.zIndex="10";
            navlis[i].style.color="#36d681";
    }
    }
    let droplis1=document.querySelectorAll(".drop1 li");
    dropOnclik(droplis1);
    let droplis2=document.querySelectorAll(".drop2 li");
    dropOnclik(droplis2);
    let droplis3=document.querySelectorAll(".drop3 li");
    dropOnclik(droplis3);
    function dropOnclik(droplisflag) {
        for(let i=0;i<droplisflag.length;i++){
            droplisflag[i].onclick=function () {
                window.open("tap2.html");
            }
        }
    }

};