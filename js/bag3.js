window.onload=function () {
    let navlis=document.querySelectorAll("nav li")
    let xxkBox=document.querySelectorAll(".xxkBox");
    console.log(navlis, xxkBox);
    for (let i=0;i<navlis.length;i++){
        for (let j=0;j<navlis.length;j++){
            xxkBox[j].style.zIndex="5";
            navlis[j].style.color="#88cdfe";
            navlis[j].style.borderBottomColor="#fafafa";
        }
        navlis[i].onclick=function () {
            for (let j=0;j<navlis.length;j++){
                xxkBox[j].style.zIndex="5";
                navlis[j].style.color="#88cdfe";
                navlis[j].style.background="#e7f6ff";
            }
            xxkBox[i].style.zIndex="11";
            navlis[i].style.color="white";
            navlis[i].style.background="#3bacfe"
        }
    }
    let pinglunlis=document.querySelectorAll(".pinglun li");
    let xxkSbox=document.querySelectorAll(".xxkSbox")
    console.log(pinglunlis, xxkSbox);
    for (let i=0;i<pinglunlis.length;i++) {
        pinglunlis[i].onclick=function () {
            for (let j=0;j<pinglunlis.length;j++) {
                xxkSbox[j].style.zIndex="5";
                pinglunlis[j].style.color="#88cdfe";
                pinglunlis[j].style.borderBottomColor="#fafafa"
            }
            xxkSbox[i].style.zIndex="10";
            pinglunlis[i].style.color="#3bacfe"
            pinglunlis[i].style.borderBottomColor="#3bacfe"
        }
    }
}