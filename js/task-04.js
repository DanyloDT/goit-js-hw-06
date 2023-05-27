const increment = document.querySelector('button[data-action="increment"]')
const decrement = document.querySelector('button[data-action="decrement"]')
const value = document.querySelector('#value')

let counterValue = 0

increment.addEventListener('click', () => {
    value.textContent = counterValue += 1
    
})

decrement.addEventListener('click', () => {
    value.textContent = counterValue -= 1
})

