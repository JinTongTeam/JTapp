window.onload=function () {
    let select=document.querySelector(".pleaseSelect .back-right");
    let buyworry=document.querySelector(".buyworry .back-right");
    let modal=document.querySelector(".modal");
    let ModalWorry=document.querySelector(".Modal-worry")
    let cross=document.querySelector(".modal .date-top span:nth-child(2)");
    let crosstwo=document.querySelector(".Modal-worry .date-top span:nth-child(2)");
    let btnClose1=document.querySelectorAll(".btn-close1");
    let btnClose2=document.querySelectorAll(".btn-close2");
    console.log(select, buyworry,cross,crosstwo,modal,ModalWorry,btnClose1);
    select.onclick=function () {
        modal.style.display="block";
    }
    cross.onclick=function () {
        modal.style.display="none";
    }
    buyworry.onclick=function () {
        ModalWorry.style.display="block";
    }
    crosstwo.onclick=function () {
        ModalWorry.style.display="none";
    }
    // btnClose1.onclick=function () {
    //     modal.style.display="none";
    // }
    // btnClose2.onclick=function () {
    //     modal.style.display="none";
    // }




}