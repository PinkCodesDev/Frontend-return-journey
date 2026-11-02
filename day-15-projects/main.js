let projects = [
    { id: 1, name: 'PlatinumOS', isActive: true },
    { id: 2, name: 'Portfolio', isActive: false },
    { id: 3, name: 'Task Manager', isActive: false },
    { id: 4, name: 'Notatki', isActive: false }
];

const STORAGE_KEY = 'projects';
const storageMessage = document.querySelector('#storage-message');

// Poprawny JSON musi też mieć oczekiwaną strukturę i unikalne ID.
try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved !== null) {
        const parsed = JSON.parse(saved);
        if (!Array.isArray(parsed) || !parsed.every((project) =>
            project !== null && typeof project === 'object'
            && ((typeof project.id === 'string' && project.id.trim() !== '')
                || (Number.isSafeInteger(project.id) && project.id > 0))
            && typeof project.name === 'string' && project.name.trim() !== ''
            && typeof project.isActive === 'boolean')
            || new Set(parsed.map((project) => project.id)).size !== parsed.length) {
            throw new Error('Niepoprawna struktura zapisanych projektów');
        }
        projects = parsed;
    }
} catch (error) {
    storageMessage.textContent = 'Nie udało się odczytać listy. Pokazano przykładowe projekty.';
}

function saveProjects() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
        storageMessage.textContent = 'Lista zapisana.';
    } catch (error) {
        storageMessage.textContent = 'Zmiana działa teraz, ale zapis na później się nie powiódł.';
    }
}

const list = document.querySelector('#project-list');

function deleteProject(id) {
    projects = projects.filter((project) => {
        return project.id !== id;
    });

    saveProjects();
    renderProjects();
}

function renderProjects() {
    list.replaceChildren();

    projects.forEach((project) => {
        const item = document.createElement('li');
        const name = document.createElement('span');
        name.textContent = project.name;

        const deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.textContent = 'Usuń';

        deleteButton.addEventListener('click', () => {
            deleteProject(project.id);
        });

        item.append(name, ' ', deleteButton);
        list.append(item);
    });
}

renderProjects();

const form = document.querySelector('#project-form');
const nameInput = document.querySelector('#project-name');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();

    if (name === '') {
        alert('Wpisz nazwę projektu.');
        nameInput.focus();
        return;
    }

    const newProject = {
        id: crypto.randomUUID(),
        name: name,
        isActive: false
    };

    projects.push(newProject);
    saveProjects();
    renderProjects();
    form.reset();
    nameInput.focus();
});
