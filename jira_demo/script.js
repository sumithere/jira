let cSelector = document.querySelectorAll(".filter");
let main=documeent.querySelector(".main-cointainer");
for(let i=0;i<4;i++){
    cSelector[i].addEventListener("click",function(){
        let classes=cSelector[i].getAttribute("class");
        let classsArr=classes.split(" ");
        let colour=classsArr[1];

        let mainClasses=main.getAttribute("class");
        let mainArr=mainClasses.split(" ");
        mainArr[1]=colour;
        mainClasses=mainArr.join(" ");
        mainClasses.setAttribute("class",mainClasses);
    })
}