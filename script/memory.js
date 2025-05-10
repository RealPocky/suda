const images = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'];
let cards = [...images, ...images]; // 6 คู่ = 12 ใบ
cards.sort(() => 0.5 - Math.random());

const board = document.getElementById('gameBoard');
let flippedCards = [];
let matchedPairs = 0;

cards.forEach((src, index) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.index = index;

  const cardInner = document.createElement('div');
  cardInner.classList.add('card-inner');

  const front = document.createElement('div');
  front.classList.add('card-front');
  front.innerText = '?'; // ✅ แสดง ?

  const back = document.createElement('div');
  back.classList.add('card-back');
  const img = document.createElement('img');
  img.src = `img/${src}`;
  back.appendChild(img);

  cardInner.appendChild(front);
  cardInner.appendChild(back);
  card.appendChild(cardInner);

  card.addEventListener('click', () => {
    if (flippedCards.length < 2 && !card.classList.contains('flipped')) {
      card.classList.add('flipped');
      flippedCards.push({ index, src, card });

      if (flippedCards.length === 2) {
        const [first, second] = flippedCards;
        if (first.src === second.src) {
          matchedPairs++;
          flippedCards = [];
          if (matchedPairs === 6) {
            Swal.fire({
            title: 'นางฟ้าเค้าเก่งที่สุดดด 💖',
            text: 'เธอสวยที่สุดทุกภาพเลยค้าบบ',
            imageUrl: 'https://cdn-icons-png.flaticon.com/512/833/833472.png', // รูปหัวใจ
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: 'Heart',
            confirmButtonText: 'ไปเกมต่อไป',
            confirmButtonColor: '#ff69b4'
}).then(() => {
  window.location.href = "album.html"; // เปลี่ยนลิงก์ตามต้องการ
});
          }
        } else {
          setTimeout(() => {
            first.card.classList.remove('flipped');
            second.card.classList.remove('flipped');
            flippedCards = [];
          }, 800);
        }
      }
    }
  });

  board.appendChild(card);
});
