const logado = localStorage.getItem('logado')
if (logado !== 'true') {
    window.location.href = 'index.html'
} 

const btn = document.querySelector('#btn')
const resultado = document.querySelector('.resultado')
const mediaApInput = document.querySelector('#media-ap')
const notaPaiInput = document.querySelector('#nota-pai')

mediaApInput.addEventListener('click', () => {
    clearError()
})
notaPaiInput.addEventListener('click', () => {
    clearError()
})


btn.addEventListener('click', () => {
    const mediaApInput = document.querySelector('#media-ap').value.trim()
    const notaPaiInput = document.querySelector('#nota-pai').value.trim()
    
    if (mediaApInput.trim() === '' || notaPaiInput.trim() === '') {
        erroNota('Preencha todos os campos!')
        return
    }

    const mediaAp = parseFloat(mediaApInput)
    const notaPai = parseFloat(notaPaiInput)

    if (isNaN(mediaAp) || isNaN(notaPai)) {
        erroNota('Digite apenas números!') 
        return
    } else {
        const { notaNecessaria, notasPonderadas } = calculoNotas(mediaAp, notaPai)
        validarNotas(notaNecessaria, notasPonderadas)
    }

})

function calculoNotas(notaAp, pai) {
    let notasPonderadas = (notaAp * 0.3) + (pai * 0.3)
    let notaNecessaria = (6 - notasPonderadas) / 0.4
    return {
        notaNecessaria, 
        notasPonderadas
    }
}

function validarNotas(notaNecessaria, notasPonderadas) {
    if (notasPonderadas >= 6.0) {
        resultado.textContent = 'Você já passou direto!'
    } else if (notaNecessaria > 10) {
        resultado.textContent = 'Mesmo com 10 você nao passa.'
    } else {
        resultado.textContent = `Você precisa tirar no mínimo ${notaNecessaria.toFixed(2)} na prova final.`
    }
}

const notaError = document.querySelectorAll('.nota-error')

function erroNota(mensagem) {
    notaError.forEach(function(elemento) {
        elemento.textContent = mensagem
    })
    mediaApInput.classList.add('error')
    notaPaiInput.classList.add('error')
    mediaApInput.value = ''
    notaPaiInput.value = ''
}

function clearError() {
    notaError.forEach(elemento => {
        elemento.textContent = ''
    })
    mediaApInput.classList.remove('error')
    notaPaiInput.classList.remove('error')
}

