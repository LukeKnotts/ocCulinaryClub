var correctPassword;
var usersInput;
var failCode;

function updatePassword (setCode, setFail){ 
    correctPassword = setCode;
    failCode = setFail;
    if(failCode == null){
        failCode = "Incorrect Password"
    }
}

function passwordCheck(){
    usersInput = document.getElementById("passwordInput").value;
    var hiddenStuff = document.getElementsByClassName("passProtected");
    var unhiddenStuff = document.getElementsByClassName("passRemoved");
    if (usersInput == correctPassword){
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