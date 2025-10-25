// Animação de corações e balões
const symbols = ['❤️', '💖', '💘', '🎈', '💞'];
setInterval(() => {
  const el = document.createElement('div');
  el.className = Math.random() > 0.5 ? 'heart' : 'balloon';
  el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  el.style.left = Math.random() * 100 + 'vw';
  el.style.animationDuration = 8 + Math.random() * 5 + 's';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 12000);
}, 800);
