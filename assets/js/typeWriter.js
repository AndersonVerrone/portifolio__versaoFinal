const title = document.querySelector('.inicio__container__textos__cargo');


function typeWrite(element) {
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((letra,i) => {
        setTimeout(() => {
            element.innerHTML += letra;
        }, 75 * i);        
    });
}



typeWrite(title)
