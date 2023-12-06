let loginForm = document.getElementById("CommentForm");

CommentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let cmqname = document.getElementById("name").value;
  let telegram = document.getElementById("telegram").value;
  let hometown = document.getElementById("home-town").value;
  let cmq1 = document.getElementById("cmq1");
  var cmq1value = cmq1.value;
  let cmq2 = document.getElementById("cmq2");
  var cmq2value = cmq2.value;

  let result = document.getElementById("reviewresult");

  result.innerHTML =
    "Name" +
    cmqname +
    "<br>Telegram: " +
    telegram +
    "<br>HomeTown: " +
    hometown +
    "<br>Model Purchase: " +
    cmq1value +
    "<br>Comment: " +
    cmq2value;
});
