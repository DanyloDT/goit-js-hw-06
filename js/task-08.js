const formEl = document.querySelector('.login-form')


const onSubmit = event => {
    event.preventDefault();

    const { email, password } = event.target.elements;
    
    if (email.value === "" || password.value === "") {
        const message = `Всі поля повинні бути заповнені`
        alert(message)
        return
    }

    console.log({ email: email.value, password: password.value });
    
    event.target.reset()
}

formEl.addEventListener('submit', onSubmit)