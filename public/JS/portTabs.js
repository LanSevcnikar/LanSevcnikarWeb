function openTab(tab) {
    var i;
    var x = document.getElementsByClassName("skill");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(tab).style.display = "block";  
  }