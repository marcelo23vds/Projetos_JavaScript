function contar() {

    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('ERRO! Faltam dados')
        res.innerHTML = 'Não é possivel contar!'

    } else {
        res.innerHTML = 'Contando... <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo inválido! Considerando o Passo 1')
            p = 1
        }

        if (i < f) {
            //contagem crescente
            while (i < f) {
                i += p
                if (i <= f) {
                    res.innerHTML += `\u{23E9} ${i}` 
                } else {
                    break
                }
            } 
        } else {
            //contagem regressiva
            while (i > f) {
                i -= p
                if (i >= f) {
                    res.innerHTML += `\u{23E9} ${i}`
                } else {
                    break
                }
            }
        }
        res.innerHTML += '\u{1F3C1}'
    }
}