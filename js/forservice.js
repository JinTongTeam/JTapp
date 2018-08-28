window.onload=function () {
    let optionslis=document.querySelectorAll(".options li");
    let bottomBoxlists=document.querySelectorAll(".bottomBox");
    console.log(optionslis, bottomBoxlists);
    for (let i=0;i<optionslis.length;i++){
        optionslis[i].onclick=function () {
            for (let j=0;j<optionslis.length;j++){
                optionslis[j].classList.remove("botm");
                bottomBoxlists[j].style.display="none";
            }
            optionslis[i].classList.add("botm");
            bottomBoxlists[i].style.display="block";
        }
    }

}