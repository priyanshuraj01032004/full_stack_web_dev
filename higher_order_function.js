function multiplegreet(func, count){
    for(let i=0 ; i<count ; i++){
        func();
    }
}

let greet = function(){
    console.log("radha")
}
// function greet (){
//     console.log("radha")
// }

multiplegreet(greet,5)