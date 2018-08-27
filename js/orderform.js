window.onload=function () {
    let modal=document.querySelector(".modal");
    let modarr=document.querySelector(".mod");
    let close=document.querySelector(".close");
    let tablis=document.querySelectorAll(".tab li");
    let timeLists=document.querySelectorAll(".time-list ul");

    // console.log(tablis, timeLists,close,modarr);
    modarr.onclick=function(){
        modal.style.display="block";
    }
    close.onclick=function(){
        modal.style.display="none";
    }
    for(let i=0;i<tablis.length;i++){
        tablis[i].onclick=function () {
            for (let j=0;j<tablis.length;j++){
                timeLists[j].style.display="none";
                tablis[j].classList.remove("selected");
            }
            timeLists[i].style.display="flex";
            tablis[i].classList.add("selected");
        }
    }

}