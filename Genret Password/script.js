function generatePassword(){
    const length = document.getElementById("length").value;
    const includeUpper = document.getElementById("uppercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;

    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+{}[]<>?";

    let chars = lower;
    if(includeUpper) chars += upper;
    if(includeNumbers) chars += numbers;
    if(includeSymbols) chars += symbols;

    let password = "";
    for(let i = 0; i < length; i++){
        password += chars[Math.floor(Math.random() * chars.length)];
    }

    document.getElementById("password").value = password;
}

function copyPassword(){
    const passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");
    alert("Password Copied!");
}