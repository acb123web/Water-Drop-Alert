var drop = document.getElementById("drop");
var drop1 = document.getElementById("drop1");

function ShowWarning(){
    drop.style.display = "flex";
    drop1.style.display = "none";
}
function closeWarning(){
    drop.style.display = "none";
    drop1.style.display = "none";
}
function ShowSuccess(){
    drop1.style.display = "flex";
    drop.style.display = "none";
}
function closeSuccess(){
    drop1.style.display = "none";
    drop.style.display = "none";
}