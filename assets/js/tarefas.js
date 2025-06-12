const logado = localStorage.getItem('logado')
if (logado !== 'true') {
    window.location.href = 'login.html'
} 

const tarefas = [
  { id: '1', titulo: 'Desenvolvimento de APIs', descricao: 'Criar uma API de Gerenciamento Escolar.' },
  { id: '2', titulo: 'Desenvolvimento de Automação', descricao: 'Criar uma automação que faz requisição para uma API.' },
  { id: '3', titulo: 'Engenharia de Requisitos', descricao: 'Elaborar o Diagrama de Fluxo de Dados do projeto.' },

];

let tasksDone = []
const container = document.querySelector('.container')

if (localStorage.getItem('taskDone')) {
    tasksDone = JSON.parse(localStorage.getItem('taskDone'))
}

tarefas.forEach(tarefa => {
    const card = document.createElement('div')
    card.classList.add('task-card')
    card.dataset.id = tarefa.id

    card.innerHTML = `
        <span class="task-title">${tarefa.titulo}</span>
        <p class="task-desc">${tarefa.descricao}</p>
        <div class="check">
            <i class="fa-regular fa-circle check-icon"></i>
            <span class="task-check">Concluído</span>
        </div>
    `

    if (tasksDone.includes(tarefa.id)) {
        card.classList.add('checked')
        const checkIcon = card.querySelector('.check-icon')
        checkIcon.classList.remove('fa-circle')
        checkIcon.classList.add('fa-circle-check')
}

    container.appendChild(card);
})


const cards = document.querySelectorAll('.task-card')
cards.forEach(card => {
    const checkIcon = card.querySelector('.check-icon')

    checkIcon.addEventListener('click', () => {
        if (checkIcon.classList.contains('fa-circle')) {
            checkIcon.classList.remove('fa-circle')
            checkIcon.classList.toggle('fa-circle-check')
            card.classList.toggle('checked')
            tasksDone.push(card.dataset.id)
        
        } else {
            checkIcon.classList.remove('fa-circle-check')
            checkIcon.classList.toggle('fa-circle')
            card.classList.remove('checked')

            if (tasksDone.includes(card.dataset.id)) {
                const pos = tasksDone.indexOf(card.dataset.id)
                tasksDone.splice(pos, 1)
            }
        }
        localStorage.setItem('taskDone', JSON.stringify(tasksDone))
    })

})