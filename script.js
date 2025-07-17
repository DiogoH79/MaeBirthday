const card = document.getElementById('card');
card.addEventListener('click', () => {
  card.classList.toggle('open');
});

const heartsContainer = document.querySelector('.hearts-container');

function createHeart() {
  const heart = document.createElement('span');
  heart.classList.add('heart');
  heart.textContent = '💖';

  // posição horizontal aleatória dentro do container (de 5% a 95%)
  const leftPercent = Math.random() * 90 + 5;
  heart.style.left = leftPercent + '%';

  // tempo aleatório pra delay da animação, entre 0 e 5s
  const delay = Math.random() * 5;
  heart.style.animationDelay = delay + 's';

  // adiciona ao container
  heartsContainer.appendChild(heart);

  // remove após terminar animação (5s)
  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// cria um novo coração a cada 700ms, para efeito contínuo
setInterval(createHeart, 700);