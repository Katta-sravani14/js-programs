
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    readline.question('Please enter your first name ', name =>{
        console.log("Hello "+ name +" ,How are you?");
        readline.close();
    })