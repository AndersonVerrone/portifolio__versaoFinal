const paginas = document.querySelectorAll('.projetos__container__pagina');
const prev = document.querySelector('.prev');
const indices = document.querySelectorAll('.indice');
const next = document.querySelector('.next');

let marcadorPagina = 0;
let marcadorindice = 0;

const limitePaginas = paginas.length - 1;

next.addEventListener('click', () => {
    if (marcadorPagina < limitePaginas - 1) {
        marcadorPagina++;
        paginas[marcadorPagina - 1].classList.remove('ativo');
        paginas[marcadorPagina].classList.add('ativo');
        indices[marcadorPagina].classList.add('selecionado');
        indices[marcadorPagina - 1].classList.remove('selecionado');
        marcadorindice = marcadorPagina;
    } else if (marcadorPagina === limitePaginas-1) {
        marcadorPagina = paginas.length - 1;
        paginas[marcadorPagina - 1].classList.remove('ativo');
        paginas[marcadorPagina].classList.add('ativo');
        indices[marcadorPagina].classList.add('selecionado');
        indices[marcadorPagina - 1].classList.remove('selecionado');
        marcadorindice = marcadorPagina;
    } 

    verificacao();
})

prev.addEventListener('click', () => {
    console.log(marcadorPagina)
    if (marcadorPagina === 0) {
        marcadorPagina = 0;
        indices[marcadorPagina].classList.add('selecionado');
        indices[marcadorPagina + 1].classList.remove('selecionado');
        marcadorindice = marcadorPagina;
    } else if (marcadorPagina > 0) {
        marcadorPagina--;
        paginas[marcadorPagina + 1].classList.remove('ativo');
        paginas[marcadorPagina].classList.add('ativo');
        indices[marcadorPagina].classList.add('selecionado');
        indices[marcadorPagina + 1].classList.remove('selecionado');
        marcadorindice = marcadorPagina;
    }

    verificacao();
})

function verificacao() {
    if(marcadorPagina === 0) {
        prev.classList.add('desativado');
    } else if (marcadorPagina === limitePaginas) {
        next.classList.add('desativado');
    } else if (marcadorPagina !== 0) {
        prev.classList.remove('desativado'); 
    } 
    if (marcadorPagina < limitePaginas) {
        next.classList.remove('desativado'); 
    } 
}

indices.forEach((indice,idx) => {
    if (indice.classList.contains('selecionado')) {
        marcadorindice = idx;
    }

    indice.addEventListener('click', () => {
        if (indice.classList.contains('selecionado')) {
            marcadorindice = idx;
            marcadorPagina = marcadorindice;
        } else {
            paginas[marcadorindice].classList.remove('ativo');
            paginas[idx].classList.add('ativo');
            indices[idx].classList.add('selecionado');
            indices[marcadorindice].classList.remove('selecionado');
            marcadorindice = idx;
            marcadorPagina = marcadorindice;

            verificacao();
        }
    })
})
