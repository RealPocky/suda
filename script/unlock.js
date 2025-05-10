let code = "";
const correctCode = "080724"; 

function press(num) {
  if (code.length < 6) {
    code += num;
    document.getElementById("code-input").value += "*";
  }
}

function clearCode() {
  code = "";
  document.getElementById("code-input").value = "";
}

function submitCode() {
  if (code === correctCode) {
    Swal.fire({
      title: "ปลดล็อกสำเร็จ!",
      text: "ไปดูความทรงจำกันเถอะ 💞",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/833/833472.png",
      imageWidth: 100,
      confirmButtonText: "ไปต่อเลย",
      confirmButtonColor: "#ff69b4"
    }).then(() => {
      window.location.href = "album.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "ลองใหม่นะที่รัก 💔",
      text: "ดูคำใบ้อีกทีสิ",
      confirmButtonText: "ตกลง",
      confirmButtonColor: "#ff6f91"
    });
    clearCode();
  }
}
