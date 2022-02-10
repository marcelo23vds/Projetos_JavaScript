function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora > 4 && hora < 12) {
        // Bom dia!
        img.scr = 'manha.png'
        document.body.style.background = '#daaf80'
    } else if (hora >= 12 && hora < 19) {
        //Boa tarde!
        img.src = 'tarde.png'
        document.body.style.background = '#c36f4f'
    } else {
        //Boa noite!
        img.src = 'noite.png'
        document.body.style.background = '#131c3e'
    }
}