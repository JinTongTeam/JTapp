window.onload=function () {
    let Point2=document.querySelectorAll(".Discount_point2");
    let teshu=document.querySelectorAll(".teshu");
    let out=document.querySelector(".out");
    let Eject=document.querySelector(".Eject");
    let Close=document.querySelector(".Close");
    console.log(Close);


        for(let i=0;i<teshu.length;i++){
            teshu[i].onclick=function () {
                for(let j=0;j<teshu.length;j++){
                    Point2[j].classList.remove("hot");
                }Point2[i].classList.add("hot");
            }
        }

    out.onclick=function () {
        open("Carlotta6.html");
        close();
    }
    Close.onclick=function () {
        open("Carlotta6.html");
        close();
    }


}