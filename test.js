var namey;
function updateText(){
    namey = document.getElementById("name").value;
    if (namey == ""){
        document.getElementById("greeting").innerHTML = "";
    }else if(namey == "Rob" || namey == "rob"){
        document.getElementById("greeting").innerHTML = "Hello " + namey + "! Its bad to see you >:)";
    }else{
        document.getElementById("greeting").innerHTML = "Hello " + namey + "! Its good to see you :)";
    }
}
function uhoh(){
    var b = document.getElementById("secret");
    if (namey == ":3"){
        b.style.display = "block";
    }
}
