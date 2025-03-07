console.log(imgObj.src)

let btn =  document.querySelector('button')
console.log(btn);

btn.onclick = function (){
    alert("button was clicked");
}

btn.addEventListener("click" , sayhello);
btn.addEventListener("click" , sayname);
btn.addEventListener("dblclick" , sayname); //when button is double clicked


function sayName(){
 alert("hello")
}
function sayhello(){
    alert("name")
}


let box = document.querySelector(".classname")
box.addEventListener("mouseenter" , function(){
    console.log("mouse clicked on the box")
})