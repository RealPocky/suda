let notReconcileButton = document.getElementById('notReconcile');
let reconcileButton = document.getElementById('reconcile');
let heartImage = document.getElementById('heart');

notReconcileButton.addEventListener('click', function() {
    // ลดขนาดของปุ่ม "ไม่ดีกันหรอก"
    notReconcileButton.style.transform = 'scale(0.8)';

    // ขยายขนาดของปุ่ม "ดีนกันก็ได้"
    reconcileButton.style.transform = 'scale(1.2)';
});

reconcileButton.addEventListener('click', function() {
    
    Swal.fire({
        title: "สัญญาจะไม่ทำเธอเสียใจแบบนี้อีก",  // ข้อความหัวข้อ
        text: "ขอโทษจากใจและรักเธอมากๆ (แคปหน้าจอมาบอกกันด้วยนะ) 💖",  // ข้อความใน SweetAlert
        imageUrl: "https://cdn-icons-png.flaticon.com/512/833/833472.png",  // ไอคอนรูปหัวใจที่ต้องการแสดง
        imageWidth: 100,
        imageHeight: 100,
        showConfirmButton: false,  // ซ่อนปุ่ม
        timer: 5000,  // ให้ SweetAlert ปิดเองหลังจาก 5 วินาที
        allowOutsideClick: false,  // ป้องกันไม่ให้คลิกนอกเพื่อปิด
        didOpen: () => {
            heartImage.style.display = 'block';  // แสดงรูปหัวใจ
            heartImage.style.transform = 'scale(1.5)';  // ขยายรูปหัวใจ
        }
    });
});