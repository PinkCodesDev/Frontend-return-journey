const title = document.querySelector('#project-title');
const button = document.querySelector('#activate-button');
const status = document.querySelector('#project-status');
const card = document.querySelector('.project-card');

const nameInput = document.querySelector('#project-name');
const saveNameButton = document.querySelector('#save-name-button');

title.textContent = 'PlatinumOS - centrum dowodzenia';
status.textContent = 'Status: nieaktywny';
button.textContent = 'Aktywuj projekt';

button.addEventListener('click', () => {
    const isActive = card.classList.toggle('active');
    if (isActive) {
        status.textContent = 'Status: aktywny';
        button.textContent = 'Dezaktywuj projekt';
    } else {
        status.textContent = 'Status: nieaktywny';
        button.textContent = 'Aktywuj projekt';
    }
    button.setAttribute('aria-pressed', String(isActive));
});

saveNameButton.addEventListener('click', () => {
    const newName = nameInput.value.trim();
    if (newName === '') {
        alert('Wpisz nazwę projektu.');
        nameInput.focus();
        return;
    }
    title.textContent = newName;
});
