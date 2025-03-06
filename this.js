const student = {
    name :"vishal",
    age:21,
    eng:88,
    math:96,
    science:90,
    getavg(){
        let avg =  (this.eng + this.math + this.science)/3
        console.log(avg)
    }


};
// console.log(student.getavg)

student.getavg();