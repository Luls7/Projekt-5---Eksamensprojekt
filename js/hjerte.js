let hjerte = 0
function changeHjerte() {
    if (hjerte === 0) {
        hjerte = 1;
        document.getElementById("redhjerte").src = "../image/heartbrown.svg";
    } else {
        hjerte = 0;
        document.getElementById("redhjerte").src = "../image/heartred.svg";
    }
}