async function login() {
  const email = document.getElementById("username").value.trim();
  const pass  = document.getElementById("password").value.trim();
  const errorBox = document.getElementById("error");

  // filter domain
  if (!email.endsWith("@genetek.co.id")) {
    errorBox.textContent = "Gunakan email kantor @genetek.co.id";
    return;
  }

  try {
    await firebase.auth().signInWithEmailAndPassword(email, pass);
    // sukses: simpan tanda login di sessionStorage
    sessionStorage.setItem("loggedIn", "yes");
    sessionStorage.setItem("loginTime", Date.now().toString());
    sessionStorage.setItem("currentUser", email);
    window.location.href = "index.html";
  } catch (err) {
    errorBox.textContent = err.code === "auth/wrong-password"
      ? "Password salah."
      : "Login gagal.";
  }
}
