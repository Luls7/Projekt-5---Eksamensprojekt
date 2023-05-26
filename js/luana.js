function mydag() {
    document.getElementById("contentdag").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropdag')) {
      let dropdowns = document.getElementsByClassName("dag");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

function mymaaned() {
    document.getElementById("contentmaaned").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropmaaned')) {
      let dropdowns = document.getElementsByClassName("maaned");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

function myaar() {
    document.getElementById("contentaar").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropaar')) {
      let dropdowns = document.getElementsByClassName("aar");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  