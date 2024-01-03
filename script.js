// Menu de Navegação Responsivo
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  navToggle.addEventListener('click', function () {
    navMenu.classList.toggle('show-menu');
  });
});

// Slideshow de Imagens
let currentSlide = 0;
const slides = document.querySelectorAll('.slideshow img');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  slides[index].style.display = 'block';
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000);

// Formulário com Validação
const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const emailInput = document.getElementById('email');
  const emailValue = emailInput.value;

  if (validateEmail(emailValue)) {
    alert('Formulário enviado com sucesso!');
  } else {
    alert('Por favor, insira um e-mail válido.');
  }
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Scroll Suave
document.querySelector('.scroll-to-top').addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contador de Visitas
let visitCount = 0;
const visitCountSpan = document.getElementById('count');

function incrementVisitCount() {
  visitCount++;
  visitCountSpan.textContent = visitCount;
}

incrementVisitCount();

// Toggle de Tema Escuro/Claro
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', function () {
  document.body.classList.toggle('dark-theme');
});

// Animação CSS/JavaScript
const animatedBox = document.querySelector('.animated-box');

animatedBox.addEventListener('click', function () {
  animatedBox.classList.toggle('bounce');
});

// Contador Regressivo
const countdownElement = document.getElementById('countdown');

function startCountdown() {
  let time = 10;

  function updateCountdown() {
    countdownElement.textContent = `Contagem regressiva: ${time} segundos`;
    time--;

    if (time < 0) {
      clearInterval(countdownInterval);
      countdownElement.textContent = 'Contagem regressiva concluída!';
    }
  }

  updateCountdown();
  const countdownInterval = setInterval(updateCountdown, 1000);
}

startCountdown();

// Mapa Interativo (Exemplo utilizando Leaflet.js)
// Consulte a documentação do Leaflet para implementações específicas

// Botões de Compartilhamento
const shareButtons = document.querySelectorAll('.share-buttons button');

shareButtons.forEach((button) => {
  button.addEventListener('click', function () {
    const platform = this.textContent.toLowerCase();
    alert(`Compartilhando no ${platform}`);
  });
});

// Barra de Progresso de Leitura
const readingProgress = document.querySelector('.reading-progress');

window.addEventListener('scroll', function () {
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  const scrollTop = window.scrollY;

  const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
  readingProgress.style.width = `${scrollPercentage}%`;
});

// Autenticação com OAuth (Exemplo básico)
const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', function () {
  alert('Redirecionando para o processo de autenticação com OAuth...');
});

// Sistema de Comentários
// Implemente de acordo com o sistema de comentários que você está utilizando

// Busca em Tempo Real
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', function () {
  const searchTerm = searchInput.value.toLowerCase();
  // Implemente a lógica de busca em tempo real conforme necessário
});

// Jogos Pequenos (Exemplo básico de um jogo da velha)
const gameCanvas = document.getElementById('gameCanvas');
const ctx = gameCanvas.getContext('2d');

let currentPlayer = 'X';
const board = ['', '', '', '', '', '', '', '', ''];

gameCanvas.addEventListener('click', function (event) {
  const rect = gameCanvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const row = Math.floor(y / (gameCanvas.height / 3));
  const col = Math.floor(x / (gameCanvas.width / 3));

  const index = row * 3 + col;

  if (board[index] === '') {
    board[index] = currentPlayer;
    drawBoard();
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
});

function drawBoard() {
  ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 2;

  for (let i = 1; i < 3; i++) {
    const pos = (gameCanvas.width / 3) * i;
    ctx.beginPath();
    // Linhas horizontais
    ctx.moveTo(0, pos);
    ctx.lineTo(gameCanvas.width, pos);
    // Linhas verticais
    ctx.moveTo(pos, 0);
    ctx.lineTo(pos, gameCanvas.height);
    ctx.stroke();
  }

  ctx.font = '40px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  board.forEach((symbol, index) => {
    const row = Math.floor(index / 3);
    const col = index % 3;
    const x = (col + 0.5) * (gameCanvas.width / 3);
    const y = (row + 0.5) * (gameCanvas.height / 3);

    if (symbol !== '') {
      ctx.fillText(symbol, x, y);
    }
  });
}

function checkWinner() {
  // Implemente a lógica de verificação de vencedor conforme necessário
}

drawBoard();


