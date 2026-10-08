const cofre = document.getElementById('cofre');
const botao = document.getElementById('botao');
const status = document.getElementById('status');
const display = document.getElementById('display');

let aberto = false;

function atualizarEstado() {
  if (aberto) {
    cofre.classList.add('aberto');
    cofre.classList.remove('fechado');
    status.textContent = 'Aberto';
    status.classList.remove('fechado');
    status.classList.add('aberto');
    display.textContent = 'ABERTO';
    botao.textContent = 'Fechar cofre';
  } else {
    cofre.classList.add('fechado');
    cofre.classList.remove('aberto');
    status.textContent = 'Fechado';
    status.classList.remove('aberto');
    status.classList.add('fechado');
    display.textContent = 'FECHADO';
    botao.textContent = 'Abrir cofre';
  }
}

botao.addEventListener('click', () => {
  aberto = !aberto;
  atualizarEstado();
});

atualizarEstado();
