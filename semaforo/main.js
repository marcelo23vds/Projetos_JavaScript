const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let coresIndex = 0;
let intervalId = null;

const semaforo = (event) => {
    pararAutomatico();
    ligar[event.target.id]();
}

const nextIndex = () => coresIndex = coresIndex < 2 ? ++coresIndex : 0;

const mudarCor = () => {
    const cores = ['verde', 'amarelo', 'vermelho'];
    const cor = cores[coresIndex];
    ligar[cor]();
    nextIndex();
}

const pararAutomatico = () => {
    clearInterval (intervalId);
}

const ligar = {
    'verde':      () => img.src = 'img/verde.png',
    'amarelo':    () => img.src = 'img/amarelo.png',
    'vermelho':   () => img.src = 'img/vermelho.png',
    'automatico': () => intervalId = setInterval(mudarCor, 1000)
}

buttons.addEventListener('click', semaforo);
