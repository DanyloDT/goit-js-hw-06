const inputEl = document.querySelector('#font-size-control')
const spanEl = document.querySelector('#text')

inputEl.addEventListener('input', () => {
    const fontSize = inputEl.value + 'px';
    spanEl.style.fontSize = fontSize
    console.log(inputEl.value);
})