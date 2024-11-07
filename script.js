// Data Admin Login
const adminUsername = "admin";
const adminPassword = "1234";

// Redirect ke halaman login
function redirectToLogin() {
    window.location.href = "login.html";
}

// Fungsi Login
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === adminUsername && password === adminPassword) {
        window.location.href = "admin.html";
    } else {
        const errorMessage = document.getElementById("error-message");
        errorMessage.textContent = "Username atau password salah!";
        errorMessage.style.color = "red";
    }
}

// Fungsi Menampilkan Data User
function displayUserData() {
    const userInfo = document.getElementById("user-info");
    const biodata = localStorage.getItem("biodata") || "Biodata belum tersedia";
    const experience = localStorage.getItem("experience") || "Pengalaman belum tersedia";
    userInfo.innerHTML = `<p><strong>Biodata:</strong> ${biodata}</p><p><strong>Pengalaman:</strong> ${experience}</p>`;
}

// Fungsi Simpan Data dari Admin
function saveData() {
    const biodata = document.getElementById("biodata").value;
    const experience = document.getElementById("experience").value;
    localStorage.setItem("biodata", biodata);
    localStorage.setItem("experience", experience);
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Data berhasil disimpan",
        showConfirmButton: false,
        timer: 1500
      });
}

// Fungsi Hapus Data dari Admin
function clearData() {
    if (confirm("Apakah Anda yakin ingin menghapus data?")) {
        localStorage.removeItem("biodata");
        localStorage.removeItem("experience");
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Data berhasil dihapus",
            showConfirmButton: false,
            timer: 1500
          });
    }
}

// Inisialisasi di Halaman User
if (window.location.pathname.endsWith("index.html")) {
    displayUserData();
}

// Inisialisasi di Halaman Admin
if (window.location.pathname.endsWith("admin.html")) {
    document.getElementById("biodata").value = localStorage.getItem("biodata") || "";
    document.getElementById("experience").value = localStorage.getItem("experience") || "";
}
