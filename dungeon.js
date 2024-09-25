var code;
var correctPassword = "friend";
var secondaryPass = ":3"
var lights;

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

function flashlightToggle(){
    switch(lights){
        case false:
            lights = true;
            q = document.getElementsByClassName("powerOff");
            for(var i = 0; i < q.length; i++){
                q[i].className = "powerOn";
            }
            document.body.style.backgroundColor = "#ffffff";
            break;
        case true:
            lights = false;
            q= document.getElementsByClassName("powerOn");
            for(var i = 0; i < q.length; i++){
                q[i].className = "powerOff";
            }
            document.body.style.backgroundColor = "#000000";
            break;
        default:
            lights = true;
            q = document.getElementsByClassName("powerOff");
            for(var i = 0; i < q.length; i++){
                q[i].className = "powerOn";
            }
            document.body.style.backgroundColor = "#ffffff";
    }
}