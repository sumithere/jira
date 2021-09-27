// let { v4: uuidv4 } = require('uuid');
let plusBtn = document.querySelector(".plus");
let mainCointainer = document.querySelector(".main-cointainer");
let modalCointainer = document.querySelector(".modal-cointainer");
let taskBox = document.querySelector(".task_box");
let iColor = "pink";
let cross = document.querySelector(".cross");
let colorSelector = document.querySelectorAll(".modal-color");
let colorLoop = document.querySelector(".ticket_color");
let arr = ["pink", "blue", "green", "black"];
let trash=document.querySelector(".trash");
let taskContainer=document.querySelector(".task-cointainer");

plusBtn.addEventListener("click", function () {
    modalCointainer.style.display = "flex";
    // console.log("hello");
    // alert('hello');
    // taskContainer.click();
    // modalCointainer.click();
    taskBox.click();
})
cross.addEventListener("click", function () {
    modalCointainer.style.display = "none";
})
trash.addEventListener("click", function (e) {
    let ticketContainer = document.querySelectorAll(".ticket_container");
    for(let i=0;i<ticketContainer.length;i++){
        if(ticketContainer[i].classList.contains("border_bold")){
            //         // mainCointainer.removeChild(ticketContainer[i]);
                    ticketContainer[i].remove();
                    // console.log("hello");
                    break;
        }
    }
})
let filterColor = document.querySelectorAll(".filter-color");
for (let i = 0; i < filterColor.length; i++) {
    filterColor[i].addEventListener("click", function (e) {
        let mainColor = filterColor[i].classList[1];
        let ticketContainer = document.querySelectorAll(".ticket_container");
            for (let j = 0; j < ticketContainer.length; j++) {
            let childs = ticketContainer[j].childNodes;
            let ticketColor = childs[0].classList[1];
            if (mainColor != ticketColor) {
                ticketContainer[j].style.display = "none";
            }
            else{
                ticketContainer[j].style.display = "block";
            }
        }
    })
}




document.addEventListener("keydown", function (e) {
    if (e.key == "Enter" && taskBox.value != "") {
        let task = taskBox.value;
        let uniqid = Math.floor(Math.random() * 1000000);
        let taskContainer = document.createElement("div");
        taskContainer.setAttribute("class", "ticket_container");
        taskContainer.innerHTML = `<div class="ticket_color ${iColor}"></div>
        <div class="ticket_desc_container">
            <div class="ticket_id">#${uniqid}</div>
            <div class="ticket_desc">${task}</div>
        </div>`;
        mainCointainer.appendChild(taskContainer);
        taskBox.value = "";
        modalCointainer.style.display = "none";

        colorChange(taskContainer);
        let ticketContainer = document.querySelectorAll(".ticket_container");
        for (let i = 0; i < ticketContainer.length; i++) {
            ticketContainer[i].addEventListener("click", function () {
                //remove every border
                // let color = ticketContainer[i].classList[1];
                for (let j = 0; j < ticketContainer.length; j++) {
                    ticketContainer[j].classList.remove("border_bold");
                }
                //add border
                ticketContainer[i].classList.add("border_bold");
            })
        
        }
    }

})
function colorChange(taskContainer) {
    let cSelctor = taskContainer.querySelector(".ticket_color");
    cSelctor.addEventListener("click", function () {
        let color = cSelctor.classList[1];
        let indx = -1;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == color) {
                indx = i;
            }
        }
        indx = (indx + 1) % 4;
        newcolor = arr[indx];
        cSelctor.classList.remove(color);
        cSelctor.classList.add(newcolor);
    })
}


for (let i = 0; i < colorSelector.length; i++) {
    colorSelector[i].addEventListener("click", function () {
        //remove every border
        let color = colorSelector[i].classList[1];
        iColor = color;
        for (let j = 0; j < colorSelector.length; j++) {
            colorSelector[j].classList.remove("border");
        }
        //add border
        colorSelector[i].classList.add("border");
    })

}

// document.addEventListener("keypress", function (e) {
//     //remove every border
//     if (e.key == "Enter" && modalCointainer.style.display == "flex" && taskBox.value != "") {
//         for (let k = 0; k < colorSelector.length; k++) {
//             if (colorSelector[k].classList.contains("border")) {
//                 flag = true;
//             }
//         }
//         if (flag == true) {
//             let task = taskBox.value;
//             let uniqid = Math.floor(Math.random() * 1000000);
//             let taskContainer = document.createElement("div");
//             taskContainer.setAttribute("class", "ticket_container");
//             taskContainer.innerHTML = `<div class="ticket_color ${iColor}"></div>
//             <div class="ticket_desc_container">
//                 <div class="ticket_id">#${uniqid}</div>
//                 <div class="ticket_desc">${task}</div>
//             </div>`;
//             mainCointainer.appendChild(taskContainer);
//             taskBox.value = "";
//             modalCointainer.style.display = "none";
            
//             colorChange(taskContainer);
//             let ticketContainer = document.querySelectorAll(".ticket_container");
//             for (let i = 0; i < ticketContainer.length; i++) {
//                 ticketContainer[i].addEventListener("click", function(e) {
//                     //remove every border
//                     // let color = ticketContainer[i].classList[1];
//                     for (let j = 0; j < ticketContainer.length; j++) {
//                         ticketContainer[j].classList.remove("border_bold");
//                     }
//                     //add border
//                     ticketContainer[i].classList.add("border_bold");
//                     console.log("border");
//             })
        
//         }
//         }
//     }

// })





