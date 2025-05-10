document.getElementById('envelope').addEventListener('click', function() {
    let flap = document.querySelector('.flap');
    flap.style.transform = 'rotateX(-180deg)';
    
    setTimeout(function() {
        document.getElementById('letter').style.display = 'block';
    }, 500);
});

document.getElementById('nextPage').addEventListener('click', function() {
    window.location.href = 'final.html'; // ปรับ URL ไปยังหน้าถัดไป
});
