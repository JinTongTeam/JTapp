window.onload=function () {
    // let select=document.querySelector(".pleaseSelect .back-right");
    let buyworry=document.querySelector(".buyworry .back-right");
    // let modal=document.querySelector(".modal");
    let ModalWorry=document.querySelector(".Modal-worry")
    // let cross=document.querySelector(".modal .date-top span:nth-child(2)");
    let crosstwo=document.querySelector(".Modal-worry .date-top span:nth-child(2)");
    // console.log(select, buyworry,cross,crosstwo,modal,ModalWorry);

    buyworry.onclick=function () {
        ModalWorry.style.display="block";
    }
    crosstwo.onclick=function () {
        ModalWorry.style.display="none";
    }

}