function autoFill() {
    document.getElementById("username").value = "exampleUser";
    document.getElementById("password").value = "password123";
}

function login() {
    alert("Đăng nhập thành công!");
    window.location.href = "google.com"; // Địa chỉ trang bạn muốn chuyển đến
}

// Gọi hàm autoFill khi trang được tải
window.onload = autoFill;
