function submitForm(e) {
  e.preventDefault();
  let name = document.forms["welcome_form"]["name"].value;

  sessionStorage.setItem("name", name);

  location.href = "quiz.html";
}

function submitFormspree(e) {
  e.preventDefault();

  location.href = "end.html";
}
