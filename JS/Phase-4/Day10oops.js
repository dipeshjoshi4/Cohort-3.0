
//?BEFORE ES6 - prototype inheritance
    
// function MakeStudents(fname,lname,contact,isVerfied){
//     this.fname = fname;
//     this.lname = lname;
//     this.contact = contact;
//     this.isVerfied = isVerfied;
//     this.showProfile = function () {
//         if(this.isVerfied){
//             console.log(`student Name  ${this.fname} ${this.lname} , ${this.contact}`);
//         }else{
//             console.log("USER IS NOT VERFIED")
//         }
//     }
// }

// let s1 = new MakeStudents("Abhishek","Mishra",98745,true);
// let s2 = new MakeStudents("yash","yadav",254546,false);
// let s3 = new MakeStudents("manav","pancholi",799414,true);
// let s4 = new MakeStudents("anurag","Kulshrestha",45689,true);

// s3.showProfile()
// s2.showProfile()

//?AFTER ES6 - classical inheritance like java cpp

// class MakeStudents {
//     constructor(fname,lname,contact,isVerfied){
//         this.fname = fname;
//         this.lname = lname;
//         this.contact = contact;
//         this.isVerfied = isVerfied;
//     }
//     showProfile = function () {
//         if(this.isVerfied){
//             console.log(`student Name  ${this.fname} ${this.lname} , ${this.contact}`);
//         }else{
//             console.log("USER IS NOT VERFIED");
//         }
//     }
// }

// let s1 = new MakeStudents('Sarthak','Sharma',98789,true);
// let s2 = new MakeStudents('Abhishek','MIshra',88888,true);
// let s3 = new MakeStudents('Dipesh','Joshi',77789,false);

// console.log(s1)
// s1.showProfile()
// s3.showProfile()


//?PROTOTYPE BEGINS


function MakeStudents(fname,lname,contact,isVerfied){
    this.fname = fname;
    this.lname = lname;
    this.contact = contact;
    this.isVerfied = isVerfied;
   //remove this.showProfile()
}

//Add showProfile Differently Function
let showProfile = function () {
    if(this.isVerfied){
        console.log(`student Name  ${this.fname} ${this.lname} , ${this.contact}`);
    }else{
        console.log("USER IS NOT VERFIED")
    }
}


let s1 = new MakeStudents("Abhishek","Mishra",98745,true);
let s2 = new MakeStudents("yash","yadav",254546,false);
let s3 = new MakeStudents("manav","pancholi",799414,true);
let s4 = new MakeStudents("anurag","Kulshrestha",45689,true);

console.log(s3.showProfile()) // s3.showprofile is Not a Function
s2.showProfile()