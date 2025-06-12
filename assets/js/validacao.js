const loginsAlunos = [
    {nome: 'gabriel', ra: '2401541'}
]

const btn = document.querySelector('#btn')
const alunoRAInput = document.querySelector('#aluno-ra')
const alunoNomeInput = document.querySelector('#aluno-nome')
const loginError = document.querySelectorAll('.login-error')

alunoRAInput.addEventListener('keyup', () => {
    clearError()
})

alunoRAInput.addEventListener('click', () => {
    clearError()
})

btn.addEventListener('click', () => {
    const alunoRA = alunoRAInput.value.trim()
    const alunoNome = alunoNomeInput.value.trim().toLowerCase()

    clearError()

    if (!alunoNome || !alunoRA) {
        erroLogin('Preencha todos os campos.')
        return
    }

    const alunoValido = loginsAlunos.find(aluno => aluno.nome === alunoNome && aluno.ra === alunoRA)

    if (alunoValido) {
        sessionStorage.setItem('alunoNome', alunoValido.nome)

        localStorage.setItem('logado', 'true')

        console.log('aluno cadastrado')
        loginError.forEach(function(elemento) {
            elemento.style.color = '#1F1F21'
            elemento.textContent = 'Entrando...'
        })
        setTimeout(() => {
            window.location.href = 'hub.html'
        }, 1000)
    } else {
        erroLogin('RA ou nome incorretos ou não cadastrados!')
    }
})

function erroLogin(mensagem) {
    loginError.forEach(function(elemento) {
        elemento.textContent = mensagem
    })
    alunoRAInput.classList.add('erro')
    alunoNomeInput.classList.add('erro')
    alunoRAInput.value = ''
    alunoNomeInput.value = ''
}

function clearError() {
    loginError.forEach(function(elemento) {
        elemento.textContent = ''
    })
    alunoRAInput.classList.remove('erro')
    alunoNomeInput.classList.remove('erro')
}