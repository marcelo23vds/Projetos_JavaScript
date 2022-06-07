const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function verifLampQuebra () { //função para verifiar se a lampada está quebrada
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn () {
    if (!verifLampQuebra () ) {
        lamp.src = './img/acesa.png';
    }
}

function lampOff () {
    if (!verifLampQuebra () ) {
        lamp.src = './img/apagada.png';
    }
}

function lampQuebra () {
    lamp.src = './img/quebrada.png'
}

turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener ('click', lampOff);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampQuebra);