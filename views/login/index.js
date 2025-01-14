const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#contrasena-input');0
const form = document.querySelector('#form');
const errorText = document.querySelector('#error-text');

form.addEventListener('submit', async e => {
    e.preventDefault();
    try {
        const user = {
        email : emailInput.value,
        password : passwordInput.value
    }
    await axios.post('/api/login', user);
    window.location.pathname = '/todos/';
    } catch (error) {
        errorText.innerHTML = error.response.data.error
    }
    
});