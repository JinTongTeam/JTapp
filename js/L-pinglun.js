window.onload=function () {

    let star=document.querySelectorAll(".star");
    for (num=0;num<star.length;num++){

        let lis=star[num].getElementsByTagName("li");
        let main=document.querySelectorAll(".main-title");
        let h=main[num].getElementsByTagName("h1");
        for (let i=0;i<lis.length;i++){
            lis[i].onclick=function () {
                for (k=0;k<lis.length;k++){
                    lis[k].className="";
                }
                for (j=0;j<=i;j++){
                    lis[j].className="hot";
                }
                for (let n=1;n<h.length;n++){
                    h[n].style.zIndex="-1";
                }
                h[i+1].style.zIndex="10";
            }
        }
    }






};
