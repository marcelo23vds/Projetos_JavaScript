function tocaSom (seletorAudio) { 
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') { //elemento.localName deve retornar "audio" quando for um audio
        elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido!')
    }
} 

const ListaDeTeclas = document.querySelectorAll('.tecla'); // referenciando adicionando a uma constante para ficar de mais facil entendimento --- querySelectorAll seleciona todos os elementos de uma lista, neste caso a lista é composta por todos os elementos da classe .tecla

/*let contador = 0;

while (contador < ListaDeTeclas.length) se utilizar o WHILE é necessario criar sempre a variavel externa para utiliza-lo, e no final do laço adicionar o contador++ */

for (let contador = 0; contador < ListaDeTeclas.length; contador++) { // com o FOR você pode declarar a variavel, o "ENQUANTO" e depois adicionar o contador++ tudo dentro dos parenteses

    const tecla = ListaDeTeclas[contador];

    const instrumento = tecla.classList[1]; // classList retorna a lista de classes que estão no teclado --- 0: "tecla" 1: "tecla_x"

    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio)  //#som_{instrumento}
    } // ao clicar chama a function anonima que o objetivo é chamar a função tocaSom

    tecla.onkeydown = function (evento) { //evento é apenas um nome para ficar mais facil o entendimento, normalmente se usa "e" ou "event"
        
        console.log(evento.code) //o codigo do evento é por exemplo ao utilizar a tecla espaço aparece "space" (o evento é apertar a tecla)

        if (evento.code === 'Space' || evento.code === 'Enter') { 
            tecla.classList.add('ativa');    
        }   
    } //onkeydown é quando uma tecla do teclado é apertada --- adicionando uma classe (no CSS está personalizada para ficar vermelha neste exemplo)

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    } //onkeyup é quando uma tecla do teclado é solta --- removendo uma classe

}
