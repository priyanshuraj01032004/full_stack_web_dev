try{
    console.log(a)
}
catch{
    console.log("a is not defined")
}


// let arr  = [ 1,2,3,4,5]

// arr.forEach((el) => {
//     console.log(el)
// });

let arr = [
    {
        name : "vishal",
        age : 21
    },
    {
        name : "priyanshu",
        age : 21
    },
    {
        name : "vishnu",
        age : 21
    }
];

arr.forEach((boy) => {
    console.log(boy.age);
});