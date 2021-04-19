const readline = require('readline-sync');
console.log("User registration system using JavaScript");
const Validation = () => {
    let fname = readline.question("Enter the firstname: ");
    let fnameRgx = /[A-Z][a-z]*/;
    if (fnameRgx.test(fname) == true){
        console.log("Valid First name");
    }
    else{
        console.log("Firstname invalid please input proper way");
        return false;
    }

    let lname = readline.question("Enter the last name: ");
    let lnameReg = /[A-Z]+([ '-][a-zA-Z]+)*/
    if (lnameReg.test(lname) == true){
        console.log("Valid Last name");
    }
    else{
        console.log("Lastname invalid please input proper way");
        return false;
    }

    let email = readline.question("Enter the email: ");
    let emailReg = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (emailReg.test(email) == true){
        console.log("Valid Email");
    }
    else{
        console.log("Email invalid please input proper way");
        return false;
    }

    let phnum = readline.question("Enter the phone number: ");
    let phnumReg = RegExp('^([9]{1}[1]{1})\\s{0,1}[0-9]{10}$');
    if (phnumReg.test(phnum) == true){
        console.log("Valid phone number");
    }
    else{
        console.log("Phone number invalid please input proper way");
        return false;
    }

    let pswd1 = readline.question("Enter the password(min:8 char): ");
    let pswd1Reg = /^[A-Za-z0-9]{8,}/;
    if (pswd1Reg.test(pswd1) == true){
        console.log("Valid password");
    }
    else{
        console.log("password invalid please input proper way");
        return false;
    }
    let pswd2 = readline.question("Enter the password(min:8 char): ");
    let pswd2Reg = /^[A-Za-z0-9]{8,}/;
    if (pswd2Reg.test(pswd2) == true){
        console.log("Valid password");
    }
    else{
        console.log("password invalid please input proper way");
        return false;
    }
        
let pswd3 = readline.question("Enter the password(min:8 char): ");
let pswd3Reg = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/;
if (pswd3Reg.test(pswd3) == true){
    console.log("Valid password");
}
else{
    console.log("password invalid please input proper way");
    return false;
}

let pswd4 = readline.question("Enter the password: ");
let pswd4Reg =RegExp ("^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[a-z])(?=.*[#?!@$%^&*-]).{8,}$");
if (pswd4Reg.test(pswd4) == true){
    console.log("Valid password");
}
else{
    console.log("password invalid please input proper way");
    return false;
}
}
Validation();