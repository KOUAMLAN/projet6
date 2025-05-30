function login() {
  let button = document.querySelector("#login-submit");
  let error = document.querySelector("#login-error");
  let userInfo = {
    email: document.getElementById("signin-email"),
    password: document.getElementById("signin-password"),
  };

  button.addEventListener("click", (e) => {
    e.preventDefault();

    fetch("http://localhost:5678/api/users/login", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userInfo.email.value,
        password: userInfo.password.value,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 404) {
          error.innerHTML = "Cette adresse mail est inconnue.";
          error.removeAttribute("hidden");
        } else if (response.status === 401) {
          error.innerHTML = "Veuillez vérifier votre mot de passe.";
          error.removeAttribute("hidden");
        }
        return false;
      })
      .then((data) => {
        if (data) {
          sessionStorage.setItem("token", data.token);
          window.location = "index.html";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
}
login();
