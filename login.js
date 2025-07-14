function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  const validUser = "admin";
  const validPass = "genetek123";

  if (user === validUser && pass === validPass) {
    sessionStorage.setItem("loggedIn", "yes");
    window.location.href = "index.html";
  } else {
    document.getElementById("error").innerText = "Username atau password salah.";
  }
}

// Di halaman index.html, kita tambahkan juga pengecekan login di bawah ini:
if (window.location.pathname.includes("index.html") && sessionStorage.getItem("loggedIn") !== "yes") {
  window.location.href = "login.html";
}
