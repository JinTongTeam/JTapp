window.onload=function () {
    let Box=document.querySelectorAll(".manaddr-left");
    let mark=document.querySelectorAll(".manaddr-left div");
    console.log(Box, mark);
    for (let i=0;i<Box.length;i++){
        Box[i].onclick=function () {
            for (let j=0;j<Box.length;j++) {
                mark[j].classList.remove("mark");
            }
        }
        mark[i].classList.add("mark");
    }
}