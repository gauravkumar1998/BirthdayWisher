function burger(){
    document.getElementById("burger1").classList.toggle("show");
}
window.onclick=function(event){
    if (!event.target.matches('#notify')) {
        document.getElementById("burger1").classList.remove("show");
    }
}