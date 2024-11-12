const rememberMe = document.querySelector('.remember');
const form = document.querySelector('form');
const getName = document.querySelector('#entername');
const button = document.querySelector('#submitname');

const greeting = document.querySelector('.personal-greeting');

form.addEventListener('submit', function(e) {
    e.preventDefault();
});

button.addEventListener('click', function() {
    localStorage.setItem('name', getName.value);    

    nameDisplayCheck();
});

function nameDisplayCheck() {
    if (localStorage.getItem('name')) {
        let name = localStorage.getItem('name');
        greeting.textContent = `Привет, ${name}!`;
        rememberMe.style.display = 'none';
    } else {
        greeting.textContent = 'Привет!';

        rememberMe.style.display = 'block';
    }
}

document.body.onload = nameDisplayCheck;
console.log(localStorage.getItem('name'));


