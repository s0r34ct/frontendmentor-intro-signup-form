const form = document.querySelector('form')
// const errorsDiv = document.querySelector('.errors-list')
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const firstnameErrorField = document.querySelector('#firstname-error')
const firstnameInputField = document.querySelector('#firstname')

const lastnameErrorField = document.querySelector('#lastname-error')
const lastnameInputField = document.querySelector('#lastname')

const emailErrorField = document.querySelector('#email-error')
const emailInputField = document.querySelector('#email')

const passwordErrorField = document.querySelector('#password-error')
const passwordInputField = document.querySelector('#password')

form.addEventListener('submit', event => {
    event.preventDefault()

    const firstname = event.target[0].value
    const lastname = event.target[1].value
    const email = event.target[2].value
    const password = event.target[3].value


    if (!firstname) {
        firstnameErrorField.innerText = 'First Name cannot be empty'
        firstnameInputField.classList.add('invalid')
    }
    else {
        firstnameErrorField.innerText = ''
        firstnameInputField.classList.remove('invalid')
    }

    if (!lastname) {
        lastnameErrorField.innerText = 'Last Name cannot be empty'
        lastnameInputField.classList.add('invalid')
    }
    else {
        lastnameErrorField.innerText = ''
        lastnameInputField.classList.remove('invalid')
    }

    if (!email) {
        emailErrorField.innerText = "Email cannot be empty"
        emailInputField.classList.add('invalid')
    }
    else {
        emailErrorField.innerText = ''
        emailInputField.classList.remove('invalid')
    }

    if (email && !emailRegex.test(email)) {
        emailErrorField.innerText = 'This doesnt look like an email'
        emailInputField.classList.add('invalid')
    }

    if (!password) {
        passwordErrorField.innerText = "Password cannot be empty"
        passwordInputField.classList.add('invalid')
    }
    else {
        passwordErrorField.innerText = ''
        passwordInputField.classList.remove('invalid')
    }



})