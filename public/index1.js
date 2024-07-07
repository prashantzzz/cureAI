//anas
document.addEventListener("DOMContentLoaded", function () {
  const { Client } = Appwrite;
  const client = new Client();
  const signupForm = document.querySelector("#signupform");
  const loginForm = document.querySelector("#loginform");

  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("65f28458b660f4d34292");

  const account = new Appwrite.Account(client);

  const authHandler = async () => {
    const user = await account.get();

    if (user) {
      console.log("entered");
      const authBtnP = document.getElementById("auth-btn-phone");
      const authBtnD = document.getElementById("auth-btn-desktop");
      authBtnP.innerHTML = "Logout";
      authBtnD.innerHTML = "Logout";
      authBtnP.addEventListener("click", logout);
      authBtnD.addEventListener("click", logout);
    } else {
      console.log("not entered");
      authBtnP.innerHTML = "Login / Signup";
      authBtnD.innerHTML = "Login / Signup";
      authBtnP.removeEventListener("click", logout);
      authBtnD.removeEventListener("click", logout);
      authBtnP.addEventListener("click", () => {
        authHandler();
        window.location.href = "LoginSignup.html";
      });
      authBtnD.addEventListener("click", () => {
        authHandler();
        window.location.href = "LoginSignup.html";
      });
    }
  };

  const logout = async () => {
    account
      .deleteSession("current")
      .then((r) => location.reload())
      .catch((e) => console.log(e));
    authHandler();
  };

  authHandler();

  if (signupForm) {
    signupForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!signupForm.querySelector("#email").value.includes("@gmail.com")) {
        alert("Enter Valid Email Address");
        return;
      }
      if (signupForm.querySelector("#password").value.length < 8) {
        alert("The password should be at least 8 characters");
        return;
      }
      account
        .create(
          Appwrite.ID.unique(),
          signupForm.querySelector("#email").value,
          signupForm.querySelector("#password").value
        )
        .then((r) => {
          localStorage["user"] = JSON.stringify(r);
          alert("Account created successfully");
          window.location.href = "LoginSignup.html";
          authHandler(); 
        })
        .catch((error) => {
          if (error.code === 409) {
            alert("Account already exists. Please login instead.");
            window.location.href = "LoginSignup.html";
          }
        });
    });
  }

  loginForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!loginForm.querySelector("#email").value.includes("@gmail.com")) {
      alert("Enter Correct Email Credentials");
      return;
    }
    if (loginForm.querySelector("#password").value.length < 8) {
      alert("Enter Correct Password");
      return;
    }
    account
      .createEmailSession(
        loginForm.querySelector("#email").value,
        loginForm.querySelector("#password").value
      )
      .then((r) => {
        localStorage["user"] = JSON.stringify(r);
        alert("Logged in successfully");
        authHandler();
        window.location.href = "index.html";
      })
      .catch((error) => {
        console.log(error);
        alert("Invalid Credentails");
      });
  });
});
