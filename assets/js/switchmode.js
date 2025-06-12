const iconLua = document.querySelector('#icon-lua')
const darkModeBody = document.querySelector('.body')
const darkModeNav = document.querySelector('.navigation-bar')
const darkModeArrow = darkModeNav.querySelector('#arrow')
const darkModeOff = darkModeNav.querySelector('.fa-power-off')
const darkModeCards = document.querySelectorAll('.card')
const darkModeAlunoNome = document.querySelector('.welcome-nav')
const darkModeTaskCard = document.querySelectorAll('.task-card')

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        darkModeBody.classList.add('dark')
        if(darkModeNav) darkModeNav.classList.add('dark')
        if(darkModeArrow) darkModeArrow.classList.add('dark')
        iconLua.classList.add('dark')
        if (darkModeOff) darkModeOff.classList.add('dark')
        if(darkModeCards) darkModeCards.forEach(function(card) {
        card.classList.add('dark')
    })
        if(darkModeAlunoNome) darkModeAlunoNome.classList.add('dark')

        iconLua.classList.remove('fa-moon')
        iconLua.classList.add('fa-sun')
    }
})

iconLua.addEventListener('click', () => {
    console.log('clique')
    darkModeBody.classList.toggle('dark')
    if (darkModeNav) darkModeNav.classList.toggle('dark')
    if (darkModeArrow) darkModeArrow.classList.toggle('dark')
    if (iconLua) iconLua.classList.toggle('dark')
    if (darkModeOff) darkModeOff.classList.toggle('dark')
    if (darkModeCards) darkModeCards.forEach(function(card) {
        card.classList.toggle('dark')
    })
    if (darkModeAlunoNome) darkModeAlunoNome.classList.toggle('dark')
    if (darkModeTaskCard) darkModeTaskCard.forEach(cards => {
        cards.classList.toggle('dark')
    })

    console.log('Classes antes:', iconLua.classList);

    if (iconLua.classList.contains('fa-moon')) {
        iconLua.classList.remove('fa-moon')
        iconLua.classList.add('fa-sun')
        console.log('Trocou para sol');
    } else {
        iconLua.classList.remove('fa-sun')
        iconLua.classList.add('fa-moon')
        console.log('Trocou para lua');
    }

    const theme = darkModeBody.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', theme)
})