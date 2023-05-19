function openFolder(id) {
    changePil(id-1);
    let x = document.getElementById(id);
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

let piltal = 4;
let pil = Array(piltal);
for (i = 0; i<piltal; i++) {
  pil[i] = 0;
}

function changePil(nr) {
  let nrid = "pil" + nr
    if (pil[nr] === 0) {
        pil[nr] = 1;

        document.getElementById(nrid).src = "../image/pilned.svg";
    } else {
        pil[nr] = 0;
        document.getElementById(nrid).src = "../image/pilhojre.svg";
    }
}
