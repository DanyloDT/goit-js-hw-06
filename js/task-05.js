const inputFieldEl = document.querySelector('#name-input')
const spanFieldEl = document.querySelector('#name-output')

inputFieldEl.addEventListener('input', () => {
    const inputEl = inputFieldEl.value
    spanFieldEl.textContent = inputEl ? inputEl : `Anonymous`
   
})