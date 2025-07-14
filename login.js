async function login() {
  const email = document.getElementById("username").value.trim();
  const pass  = document.getElementById("password").value.trim();
  const errorBox = document.getElementById("error");

  // Filter hanya untuk email kantor
  if (!email.endsWith("@genetek.co.id")) {
    errorBox.textContent = "Gunakan email kantor @genetek.co.id";
    return;
  }

  try {
    await firebase.auth().signInWithEmailAndPassword(email, pass);
    // Simpan info login di session
    sessionStorage.setItem("loggedIn", "yes");
    sessionStorage.setItem("loginTime", Date.now().toString());
    sessionStorage.setItem("currentUser", email);
    window.location.href = "index.html";
  } catch (err) {
    errorBox.textContent = 
      err.code === "auth/wrong-password" ? "Password salah." :
      err.code === "auth/user-not-found" ? "User tidak ditemukan." :
      "Login gagal: " + err.message;
  }
}
