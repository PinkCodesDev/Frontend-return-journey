const title = document.querySelector('#project-title');
const button = document.querySelector('#activate-button');
const status = document.querySelector('#project-status');
const card = document.querySelector('.project-card');
const nameInput = document.querySelector('#project-name');
const saveNameButton = document.querySelector('#save-name-button');
const resetButton = document.querySelector('#reset-button');
const storageMessage = document.querySelector('#storage-message');
const STORAGE_KEY = 'project';
const defaults = { name: 'PlatinumOS - centrum dowodzenia', isActive: false };
let project = { ...defaults };

// Odczyt i JSON.parse mogą zgłosić błąd. Sprawdzamy też strukturę danych.
try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved !== null) {
        const parsed = JSON.parse(saved);
        if (!parsed || typeof parsed.name !== 'string' || !parsed.name.trim()
            || typeof parsed.isActive !== 'boolean') {
            throw new Error('Niepoprawne ustawienia projektu');
        }
        project = { name: parsed.name.trim(), isActive: parsed.isActive };
    } else {
        // Zachowaj nazwę zapisaną podczas pierwszych lekcji Day 14.
        const oldName = localStorage.getItem('projectName');
        if (oldName && oldName.trim()) project.name = oldName.trim();
    }
} catch (error) {
    storageMessage.textContent = 'Nie udało się odczytać ustawień. Użyto wartości domyślnych.';
}

function renderProject() {
    title.textContent = project.name;
    card.classList.toggle('active', project.isActive);
    status.textContent = project.isActive ? 'Status: aktywny' : 'Status: nieaktywny';
    button.textContent = project.isActive ? 'Dezaktywuj projekt' : 'Aktywuj projekt';
    button.setAttribute('aria-pressed', String(project.isActive));
}

function saveProject() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(project));
        storageMessage.textContent = 'Ustawienia zapisane.';
    } catch (error) {
        storageMessage.textContent = 'Zmiana działa teraz, ale nie udało się jej zapisać na później.';
    }
}

button.addEventListener('click', () => {
    project.isActive = !project.isActive;
    renderProject();
    saveProject();
});

saveNameButton.addEventListener('click', () => {
    const newName = nameInput.value.trim();
    if (!newName) {
        alert('Wpisz nazwę projektu.');
        nameInput.focus();
        return;
    }
    project.name = newName;
    renderProject();
    saveProject();
});

resetButton.addEventListener('click', () => {
    project = { ...defaults };
    nameInput.value = '';
    renderProject();
    try {
        // Usuwamy tylko klucze tego ćwiczenia, nie całe localStorage.
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem('projectName');
        storageMessage.textContent = 'Przywrócono ustawienia domyślne i usunięto zapis.';
    } catch (error) {
        storageMessage.textContent = 'Panel zresetowany, ale nie udało się usunąć zapisu z przeglądarki.';
    }
});

renderProject();
