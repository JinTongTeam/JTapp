window.onload=function () {
    let middlelis=document.querySelectorAll(".middle li");
    let xxkbox=document.querySelectorAll(".xxkbox")
    console.log(middlelis, xxkbox);
    for (let i=0;i<middlelis.length;i++) {
        middlelis[i].onclick=function () {
            for (let j=0;j<middlelis.length;j++) {
                xxkbox[j].style.zIndex="5";
                middlelis[j].style.color="b1deff";
                middlelis[j].style.borderBottomColor="#3bacfe"
            }

            xxkbox[i].style.zIndex="10";
            middlelis[i].style.color="white";
            middlelis[i].style.borderBottomColor="#fff"
        }
    }
}