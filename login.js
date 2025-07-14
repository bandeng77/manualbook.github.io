(function () {
  // ----- CONFIGURASI -----
  const users = {
    admin: "berubo",
    sales: "genetek99",
    finance: "genetek99",
    hr: "genetek99",
    maintenance: "genetek99",
    engineer: "genetek99",
  };
  const TIMEOUT_MIN = 30;                 // durasi sesi (menit)
  const TIMEOUT_MS  = TIMEOUT_MIN * 60_000;

  // ----- FUNCTION LOGIN -----
  window.login = function () {
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();

    if (users[user] && users[user] === pass) {
      sessionStorage.setItem("loggedIn", "yes");
      sessionStorage.setItem("loginTime", Date.now().toString());
      sessionStorage.setItem("currentUser", user);
      // beri sedikit waktu agar storage tersimpan
      setTimeout(() => (window.location.href = "index.html"), 50);
    } else {
      document.getElementById("error").innerText =
        "Username atau password salah.";
    }
  };

  // ----- CEK VALIDITAS SESI (DIPANGGIL OTOMATIS) -----
  const onLoginPage = window.location.pathname.endsWith("login.html");
  const loginStatus = sessionStorage.getItem("loggedIn");
  const loginTime   = parseInt(sessionStorage.getItem("loginTime"), 10);
  const expired     = !loginTime || Date.now() - loginTime > TIMEOUT_MS;

  if (!onLoginPage && (loginStatus !== "yes" || expired)) {
    sessionStorage.clear();
    window.location.replace("login.html");
  }
})();
