console.log("js conneted");
document.getElementById("btn-submit").addEventListener("click", function () {
  //get email
  const user_emeil = document.getElementById("user-email");
  const email = user_emeil.value;

  //get password
  const user_password = document.getElementById("user-password");
  const password = user_password.value;

  if (email === "baaper@bank.com" && password === "aine100") {
    location.href = "bank.html";
  } else {
    alert("pass vule gesis!! tui amar kew na");
  }
});
