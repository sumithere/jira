// alert("Hello from JS")


// get -> first elment 
// let inputBox = document.querySelector(".input-box");
// let ul = document.querySelector(".task-list");
// // listener
// // document -> form -> value // rest -> textContent
// inputBox.addEventListener("keydown", function (object) {
//     //    console.log("event object ",object);
//     console.log("event");
//     if (object.key == "Enter" && inputBox.value != "") {
//         let value = inputBox.value;
//         // console.log("value ", value);
//         // create 
//         let li = document.createElement("li");
//         // append 
//         ul.appendChild(li);
//         li.textContent = value;
//         // set Attribute
//         li.setAttribute("class", "task");
//         li.addEventListener("dblclick", delFN);
//         inputBox.value = "";
//     }
// })

// function delFN() {
//     // li.remove();
//     // console.log("i was dbl clicked",li.innerText)
//     li.remove();
// }

let inputBox=document.querySelector(".input-box");

let taskList=document.querySelector(".task-list");

inputBox.addEventListener("keydown",function(object){
    if(object.key=="Enter" && inputBox.value!=""){
        let li=document.createElement("li");
        let value=inputBox.value;
        taskList.appendChild(li);
        li.textContent=value;
        li.setAttribute("class","task");
        li.addEventListener("dblclick", function(){
            li.remove();
        });
        inputBox.value="";
    }
})

