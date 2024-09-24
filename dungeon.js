var code;
var correctPassword = "friend";
var secondaryPass = "Friend"

function passwordCheck(){
    code = document.getElementById("name").value;
    var hiddenStuff = document.getElementsByClassName("passProtected");
    var unhiddenStuff = document.getElementsByClassName("passRemoved");
    if (code == correctPassword || code == secondaryPass){
        for (var i = 0; i < hiddenStuff.length; i++){
            hiddenStuff[i].style.display = "block";
        }
        for (var i = 0; i < unhiddenStuff.length; i++){
            unhiddenStuff[i].style.display = "none";
        }
    }else{
        var h = document.getElementById("failed");
        h.innerHTML = "\"" + code + "\" didn't work..."
    }
}