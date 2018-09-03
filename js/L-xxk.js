window.onload=function () {
  let xxk=document.querySelector(".xxk") ;
  let lis=xxk.querySelectorAll("li");
  let main=document.querySelector("main");
  let list=main.querySelectorAll("ul");
    console.log(xxk, lis, main, list);
    for (let i=0;i<lis.length;i++){
        lis[i].onclick=function () {
            for (let j=0;j<lis.length;j++){
                list[j].style.display="none";
            }
            list[i].style.display="block";
        }
    }
};