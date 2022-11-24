const nav = document.querySelector('.cabecalho')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('ativo')
    } else {
        nav.classList.remove('ativo')
    }
}