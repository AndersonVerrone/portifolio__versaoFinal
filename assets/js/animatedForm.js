const labels = document.querySelectorAll('.form__controle label');
const textareas = document.querySelectorAll('.form__controle textarea');

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})

textareas.forEach(textarea => {
    textarea.innerHTML = textarea.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})