function openFolder(id) {
    changePil();
    let x = document.getElementById(id);
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

let pil = 0
function changePil() {
    if (pil === 0) {
        pil = 1;
        document.getElementById("pil").src = "../image/pilned.svg";
    } else {
        pil = 0;
        document.getElementById("pil").src = "../image/pilhojre.svg";
    }
}
