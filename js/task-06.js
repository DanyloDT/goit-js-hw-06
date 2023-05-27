const inputFieldEl = document.querySelector('#validation-input')
const inputLength = inputFieldEl.dataset.length

const onAddClass = () => {
    if (inputFieldEl.value.length === Number(inputLength)) {
        inputFieldEl.classList.remove('invalid')
        inputFieldEl.classList.add('valid')
       
    } else {
        inputFieldEl.classList.remove('valid')
        inputFieldEl.classList.add('invalid')
        
    }
}


inputFieldEl.addEventListener('blur', onAddClass)