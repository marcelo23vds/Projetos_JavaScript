function calcular() {

    let nome = document.getElementById('txtnome')
    let altura = document.getElementById('txtaltura')
    let peso = document.getElementById('txtpeso')
    let res = document.getElementById('res')

    if (nome.value.length == 0 || altura.value.length == 0 || peso.value.length == 0) {
        window.alert('Preencha todos os campos para obter o resultado!')
    } else {
        
        let n = String(nome.value)
        let a = Number(altura.value)
        let p = Number(peso.value)

        a *= a
        let imc = (p / a)

        res.innerHTML = `${n}, o seu IMC é ${imc.toFixed(2)}<br>`

        if (imc <= 18.5) {
            res.innerHTML += 'Você está abaixo do peso!'
        } if (imc > 18.5 && imc <= 24.9) {
            res.innerHTML += 'Parabéns! você está com o peso ideal.'
        } if (imc > 24.9 && imc <= 29.9) {
            res.innerHTML += 'Você está acima do peso!'
        } if (imc > 29.9) {
            res.innerHTML += 'Cuidado! Você está com Obesidade.'
        }
        
    }
}