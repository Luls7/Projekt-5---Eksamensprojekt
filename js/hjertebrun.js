let antalhjerterbrun = 19;
let hjertebrun = Array(antalhjerterbrun);
for (i = 0; i<antalhjerterbrun; i++) {
    hjertebrun[i] = 0;
}

function changeHjertebrun(nr) {
    let nrid = "hjerte" + nr
    if (hjertebrun[nr] === 0) {
        hjertebrun[nr] = 1;
        document.getElementById(nrid).src = "../image/heartred.svg";
    } else {
        hjertebrun[nr] = 0;
        document.getElementById(nrid).src = "../image/heartbrown.svg";
    }
}