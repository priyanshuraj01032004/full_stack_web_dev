let student = {
    name : "vishal",
    age : 21 ,
    marks :[21,22,23,24],
    username : "vishal@123",
    password : "ok@123"
};

let {username:user , password:secret} = student;
console.log(user,secret)