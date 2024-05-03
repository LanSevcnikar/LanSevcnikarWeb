var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  console.log(coll[i]);
  console.log(coll[i].nextElementSibling);
  // set each nextElementSibiling of the coll[i] to display none

  try {
    coll[i].nextElementSibling.style.display = "none";
    coll[i].nextElementSibling.style.display = "none";

    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  } catch (error) {
    console.log(error);
  }
}
