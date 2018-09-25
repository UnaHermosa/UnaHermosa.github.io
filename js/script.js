var link = document.querySelector(".button-contacts");
var popup = document.querySelector(".modal-question");
var close = popup.querySelector(".modal-question-close");
var overlay = document.querySelector(".modal-question-overlay");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=first-name]");
var email = popup.querySelector("[name=email-for-feedback]");
var question = popup.querySelector("[name=question]");
        
link.addEventListener("click", function (evt) {
    evt.preventDefault(); 
    popup.classList.add("modal-question-show");
    overlay.classList.add("modal-question-overlay-show");
    login.focus();
 });

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-question-show");
    overlay.classList.remove("modal-question-overlay-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
   if (!login.value||!email.value||!question.value) {
       evt.preventDefault();
       popup.classList.remove("modal-error");
       popup.offsetWidth = popup.offsetWidth;
       popup.classList.add("modal-error");
   }
});

window.addEventListener("keydown", function (evt) {
   if (evt.keyCode === 27) {
       evt.preventDefault();
          if (popup.classList.contains("modal-question-show")) {
          popup.classList.remove("modal-question-show");
          popup.classList.remove("modal-error");
          overlay.classList.remove("modal-question-overlay-show");
    }
  }
});
