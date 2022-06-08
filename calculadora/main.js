const display = document.querySelector('#display');
const numeros = document.querySelectorAll('[id*=tecla]');
const operadores = document.querySelectorAll('[id*=operador]');  // o asterisco serve para o querySelectorAll buscar qualquer elemento que tenha como parte do atributo aquela palavra

let novoNumero = true;
let operador;
let numeroAnterior;

const operacaoPendente = () => operador != undefined;

const calcular = () => {
    if (operacaoPendente()) {
        const numeroAtual = parseFloat(display.textContent.replace(',','.')); //replace troca , por .
        novoNumero = true;
        if (operador == '+') {
            atualizarDisplay(numeroAnterior + numeroAtual);
        } else if (operador == '-') {
            atualizarDisplay(numeroAnterior - numeroAtual);
        } else if (operador == '*') {
            atualizarDisplay(numeroAnterior * numeroAtual);
        } else if (operador == '/') {
            atualizarDisplay(numeroAnterior / numeroAtual);
        }
    }
}

const atualizarDisplay = (texto) => {
    if (novoNumero) {
        display.textContent = texto.toLocaleString('BR');
        novoNumero = false;
    } else {
        display.textContent += texto.toLocaleString('BR');;
    }
} //toLocaleString('BR') para trocar para o formato brasileiro, ou seja utilizar "," ao inves de "." no decimal

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);
numeros.forEach (numero => numero.addEventListener('click', inserirNumero)); // forEach varre todos os elementos de um array / pega um número e adiciona ao evento click, quando eu clicar vai inserirNumero

const selecionarOperador = (evento) => {
    if (!novoNumero) {
        calcular();
        novoNumero = true;
        operador = evento.target.textContent;
        numeroAnterior = parseFloat(display.textContent.replace(',','.')); //replace troca , por .
        console.log(operador);
    }
}
operadores.forEach (operador => operador.addEventListener('click', selecionarOperador));

const ativarIgual = () => {
    calcular();
    operador = undefined;
}
document.getElementById('igual').addEventListener('click', ativarIgual);

const limparCalculo = () => {
    display.textContent = '';
    operador = undefined;
    novoNumero = true;
    numeroAnterior = undefined;
}
document.getElementById('limpar').addEventListener('click', limparCalculo);

const removerUltimoNumero = () => display.textContent = display.textContent.slice(0, -1); //slice é um metodo para array, como uma string é um array de caractere pode ser utilizado, (0, -1) é o primeiro caracter 0 e para remover o ultimo é o -1 
document.getElementById('backspace').addEventListener('click', removerUltimoNumero)

const existeDecimal = () => display.textContent.indexOf(',') != -1;
const existeValor = () => display.textContent.length > 0;
const inserirDecimal = () => {
    if (!existeDecimal()) {
        if (existeValor()) {
            atualizarDisplay(',');
        } else {
            atualizarDisplay('0,');
        }
    }
}
document.getElementById('decimal').addEventListener('click', inserirDecimal);
