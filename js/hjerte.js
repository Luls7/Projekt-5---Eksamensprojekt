let antalhjerter = 5;
let hjerte = Array(antalhjerter);
for (i = 0; i<antalhjerter; i++) {
  hjerte[i] = 0;
}

function changeHjerte(nr) {
    let nrid = "hjerte" + nr
    if (hjerte[nr] === 0) {
        hjerte[nr] = 1;
        document.getElementById(nrid).src = "../image/heartbrown.svg";
    } else {
        hjerte[nr] = 0;
        document.getElementById(nrid).src = "../image/heartred.svg";
    }
}