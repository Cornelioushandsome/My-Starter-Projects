const PasswordResult = document.getElementById("PasswordResult");

const CopyButton = document.getElementById("CopyButton");
const GenerateButton = document.getElementById("GenerateButton");

const PasswordLength = document.getElementById("PasswordLength");
const AllowSymbols = document.getElementById("AllowSymbols");
const AllowUppercase = document.getElementById("AllowUppercase");
const AllowLowercase = document.getElementById("AllowLowercase");
const AllowNumbers = document.getElementById("AllowNumbers");

function GeneratePassword(){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()-=_+|{}[]:;'?/<>,.`~";

    let allowedChars="";
    let password = "";

    allowedChars+=AllowSymbols.checked ? symbolChars: "";
    allowedChars+=AllowLowercase.checked ? lowercaseChars: "";
    allowedChars+=AllowUppercase.checked ? uppercaseChars: "";
    allowedChars+=AllowNumbers.checked ? numberChars: "";

    if(allowedChars.length === 0){
        allowedChars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-=_+|{}[]:;'?/<>,.`~";
        AllowSymbols.checked=true;
        AllowLowercase.checked=true;
        AllowUppercase.checked=true;
        AllowNumbers.checked=true;
    }

    for(let i=0; i<PasswordLength.value;i++){
        const randomIndex=Math.floor(Math.random()*allowedChars.length);
        password+=allowedChars[randomIndex];
    }

    return password;
}

CopyButton.onclick=function(){
    PasswordResult.select();
    PasswordResult.setSelectionRange(0, 40);

    navigator.clipboard.writeText(PasswordResult.value)
        .then(() => {
            window.alert("Copied: " + PasswordResult.value);
        })
        .catch(err =>{
            window.alert("Failed to copy: ", err);
        });
}

GenerateButton.onclick=function(){
    PasswordResult.value=GeneratePassword();
}