const logado = localStorage.getItem('logado')
if (logado !== 'true') {
    window.location.href = 'login.html'
} 

const nomeAluno = sessionStorage.getItem('alunoNome')
const spanNome = document.querySelector('#nome-aluno')

if (nomeAluno) {
    spanNome.textContent += nomeAluno.charAt(0).toUpperCase() + nomeAluno.slice(1)
}

const logoutButton = document.querySelector('.fa-power-off')
logoutButton.addEventListener('click', () => {
    setTimeout(() => {
        localStorage.removeItem('logado')
        window.location.href = 'login.html'
    }, 1000)
})

const cardCalculadora = document.querySelector('.calculadora')
cardCalculadora.addEventListener('click', () => {
    setTimeout(() => {
        window.location.href = 'index.html'
    }, 500)
})

const cardTarefas = document.querySelector('.tarefas')
cardTarefas.addEventListener('click', () => {
    setTimeout(() => {
        window.location.href = 'tarefas.html'
    }, 500)
})