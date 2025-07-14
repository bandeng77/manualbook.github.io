function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  // Daftar user yang diizinkan
  const users = {
    "admin": "berubo",
    "sales": "genetek99",
    "finance": "genetek99",
    "hr": "genetek99",
    "maintenance": "genetek99",
    "engineer": "genetek99"
  };

  // Validasi login
  if (users[user] && users[user] === pass) {
    sessionStorage.setItem("loggedIn", "yes");
    sessionStorage.setItem("loginTime", Date.now().toString());
    sessionStorage.setItem("currentUser", user);
    window.location.href = "index.html";
  } else {
    document.getElementById("error").innerText = "Username atau password salah.";
  }
}

// Cek expired session di halaman index
if (window.location.pathname.includes("index.html")) {
  const loginStatus = sessionStorage.getItem("loggedIn");
  const loginTime = parseInt(sessionStorage.getItem("loginTime"), 10);
  const now = Date.now();
  const timeoutMinutes = 30;
  const timeout = timeoutMinutes * 60 * 1000;

  if (loginStatus !== "yes" || isNaN(loginTime) || now - loginTime > timeout) {
    sessionStorage.clear();
    window.location.href = "login.html";
  }
}
