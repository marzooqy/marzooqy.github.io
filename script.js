if(window.innerHeight > window.innerWidth) {
    document.getElementsByClassName('view')[0].setAttribute("style","width: 95%");
} else {
    document.getElementsByClassName('view')[0].setAttribute("style","width: 80%");
}

window.onresize = function(event) {
    if(window.innerHeight > window.innerWidth) {
        document.getElementsByClassName('view')[0].setAttribute("style","width: 95%");
    } else {
        document.getElementsByClassName('view')[0].setAttribute("style","width: 80%");
    }
}