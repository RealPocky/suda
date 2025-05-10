document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // ไม่ให้รีเฟรชหน้า
  
    const usernameInput = document.getElementById("username").value.trim();
    const passwordInput = document.getElementById("password").value.trim();
  
    // ✅ เก็บ user/pass หลายชุดใน object
    const accounts = [
        { username: "Micky", password: "08/07/24" },
        { username: "micky", password: "08/07/24" },
        { username: "Suda", password: "08/07/24" },
        { username: "suda", password: "08/07/24" }
    ];
    // ✅ ตรวจสอบว่าตรงกับบัญชีใดบัญชีหนึ่งไหม
    const matched = accounts.find(
        acc => acc.username === usernameInput && acc.password === passwordInput
    );
    
    if (matched) {
        // ล็อกอินสำเร็จ
        window.location.href = "index.html"; // ไปยังหน้าหลัก
      } else {
        // ไม่ถูกต้อง
        document.getElementById("error-msg").textContent = "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง 💔";
      }
    });
  