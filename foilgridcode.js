var namey;
function updateText(){
    namey = document.getElementById("name").value;
}
function uhoh(){
    var b = document.getElementById("secret");
    if (namey == "hello"){
        b.style.display = "block";
    }
    var d = document.getElementById("passowrd-ui");
    if (namey == "hello"){
        d.style.display = "inline";
    }
}
