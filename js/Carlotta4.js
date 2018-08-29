window.onload=function () {
    let Box=document.querySelectorAll(".Box .classification_Box");
    let option1=document.querySelectorAll(".option1");
    let iconFanhui=document.querySelector(".icon-fanhui");
    // let option2=document.querySelector(".option2");
    // let option3=document.querySelector(".option3");

    console.log(iconFanhui);


    for(let i=0;i<option1.length;i++){
        option1[i].onclick=function () {
            for (let j=0;j<Box.length;j++){
                Box[j].classList.remove("hot");
            }
            Box[i].classList.add("hot");
        }
    }
    iconFanhui.onclick=function () {
        open("L-dianpu.com");
        close();
    }

}