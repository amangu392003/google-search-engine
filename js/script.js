function dict(){
    var x =document.getElementById("search").value;
    const url ="https://en.wikipedia.org/wiki/";
    var url1 = url + x;
    var win = window.open(url1, '_blank');
    win.focus;
}
function scholar(){
    var x =document.getElementById("search").value;
    const url ="http://www.google.com/search?q=";
    var url1 = url + x;
    var win = window.open(url1, '_blank');
    win.focus;
}