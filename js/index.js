document.getElementById("currentYear").textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function() {
  var faqTitles = document.getElementsByClassName("faq-title");

  for (var i = 0; i < faqTitles.length; i++) {
    faqTitles[i].addEventListener("click", function() {
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function() {
    var faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(function(question) {
        question.addEventListener("click", function() {
            var answer = this.nextElementSibling;
            this.querySelector("i").classList.toggle("fa-plus");
            this.querySelector("i").classList.toggle("fa-minus");
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
});



