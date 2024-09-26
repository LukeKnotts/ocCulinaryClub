var correctPassword;
var secondaryPass;
var tertiaryPass
var usersInput;
var failCode = "Incorrect Password";

function updatePassword (setCode, setSecondaryCode, setTertiaryCode){ 
    correctPassword = setCode;
    secondaryPass = setSecondaryCode;
    tertiaryPass = setTertiaryCode;
    failCode = setFail;
    if(failCode == null){
        failCode = "Incorrect Password";
    }
}

function passwordCheck(){
    usersInput = document.getElementById("passwordInput").value;
    var hiddenStuff = document.getElementsByClassName("passProtected");
    var unhiddenStuff = document.getElementsByClassName("passRemoved");
    var a = false;
    switch (usersInput){
        case correctPassword:
            a = true;
            break;
        case secondaryPass:
            if(secondaryPass != null){
                a = true;
                break;
            }
        case tertiaryPass:
            if(tertiaryPass != null){
                a = true;
                break;
            }
        default:
            a = false;
    }

    if (a == true){
        for (var i = 0; i < hiddenStuff.length; i++){
            hiddenStuff[i].style.display = "block";
        }
        for (var i = 0; i < unhiddenStuff.length; i++){
            unhiddenStuff[i].style.display = "none";
        }
    }else{
        document.getElementById("failed").innerHTML = failCode;
        document.getElementById("failed").style.display = "block";
    }
}