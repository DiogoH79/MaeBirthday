// Código para abrir/fechar a cartinha
const card = document.getElementById('card');
card.addEventListener('click', () => {
  card.classList.toggle('open');
});

// Código para criar os corações animados que sobem pela tela
const heartsContainer = document.querySelector('.hearts-container');

function createHeart() {
  const heart = document.createElement('span');
  heart.classList.add('heart');
  heart.textContent = '💖';

  // posição horizontal aleatória (5% a 95%)
  const leftPercent = Math.random() * 90 + 5;
  heart.style.left = leftPercent + '%';

  // começar na parte de baixo da tela (100%)
  heart.style.top = '100%';

  // delay aleatório da animação (0 a 5s)
  const delay = Math.random() * 5;
  heart.style.animationDelay = delay + 's';

  heartsContainer.appendChild(heart);

  // remover coração após animação terminar
  heart.addEventListener('animationend', () => {
    heart.remove();
  });
}

// criar um coração a cada 700ms
setInterval(createHeart, 700);
