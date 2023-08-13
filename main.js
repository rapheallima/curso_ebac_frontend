const form = document.getElementById('form-num')
const blocoA = document.getElementById('num-a')
const blocoB = document.getElementById('num-b')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const mensagemSucesso = `B é maior do que A`

    if (blocoA.value < blocoB.value) {
        blocoB.style.border = '1px solid green'
        const containerResposta = document.querySelector('.messageBoa')
        containerResposta.innerHTML = mensagemSucesso
        containerResposta.style.display = 'block'

        document.querySelector('.messageEmpate').style.display = 'none'
        document.querySelector('.messageRuim').style.display = 'none'

        blocoA.value = ''
        blocoB.value = ''

    } else if (blocoA.value > blocoB.value) {
        blocoA.style.border = '1px solid red'
        document.querySelector('.messageRuim').style.display = 'block'

        document.querySelector('.messageEmpate').style.display = 'none'
        document.querySelector('.messageBoa').style.display = 'none'

        blocoA.value = ''
        blocoB.value = ''
    } else {
        blocoA.style.border = '1px solid yellow'
        blocoB.style.border = '1px solid yellow'
        document.querySelector('.messageEmpate').style.display = 'block'

        document.querySelector('.messageBoa').style.display = 'none'
        document.querySelector('.messageRuim').style.display = 'none'

        blocoA.value = ''
        blocoB.value = ''
    }
})

form.addEventListener('keyup', function (e) {
    e.preventDefault()

    document.querySelector('.messageEmpate').style.display = 'none'
    document.querySelector('.messageBoa').style.display = 'none'
    document.querySelector('.messageRuim').style.display = 'none'

    blocoA.style = ''
    blocoB.style = ''

})

