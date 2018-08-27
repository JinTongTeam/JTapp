window.onload=function () {
    let beginlis=document.querySelectorAll(".begin ul li");
    let xxkBox=document.querySelectorAll(".xxkBox");
    let navlis=document.querySelectorAll("nav li");
    let drop=document.querySelectorAll(".drop");
    console.log(beginlis, xxkBox,navlis,drop);
    for (let i=0;i<beginlis.length;i++) {
        beginlis[i].onclick=function () {
            for (let j=0;j<beginlis.length;j++) {
                xxkBox[j].style.zIndex="5";
                beginlis[j].style.color="#3bacfe";
                beginlis[j].style.background="#fafafa";
            }
            xxkBox[i].style.zIndex="10";
            beginlis[i].style.color="#fff";
            beginlis[i].style.background="#3bacfe"
        }
    }

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
                window.open("bag2.html");
            }
        }
    }
}