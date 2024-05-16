
document.getElementById("btn-mision").onclick = function() {
    document.getElementById("main").style.display = "none";
    document.getElementById("vision").style.display = "none";
    document.getElementById("nosotras").style.display = "none";
    document.getElementById("contacto").style.display = "none";
    document.getElementById("mision").style.display = "block";

}
document.getElementById("btn-vision").onclick = function() {
    document.getElementById("main").style.display = "none";
    document.getElementById("mision").style.display = "none";
    document.getElementById("nosotras").style.display = "none";
    document.getElementById("contacto").style.display = "none";
    document.getElementById("vision").style.display = "block";
}
document.getElementById("btn-nosotras").onclick = function() {
    document.getElementById("main").style.display = "none";
    document.getElementById("mision").style.display = "none";
    document.getElementById("vision").style.display = "none";
    document.getElementById("contacto").style.display = "none";
    document.getElementById("nosotras").style.display = "block";
}
document.getElementById("btn-contacto").onclick = function() {
    document.getElementById("main").style.display = "none";
    document.getElementById("mision").style.display = "none";
    document.getElementById("vision").style.display = "none";
    document.getElementById("nosotras").style.display = "none";
    document.getElementById("contacto").style.display = "block";
}
document.getElementById("btn-home").onclick = function() {
    document.getElementById("main").style.display = "block";
    document.getElementById("mision").style.display = "none";
    document.getElementById("vision").style.display = "none";
    document.getElementById("nosotras").style.display = "none";
    document.getElementById("contacto").style.display = "none";
}
