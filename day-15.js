"use strict";
// DAY 15 — TABLICE OBIEKTÓW I LISTA PROJEKTÓW
// Przykład uruchamiaj w przeglądarce: day-15-projects/index.html.
/*
1. TABLICA OBIEKTÓW
Każdy projekt ma id, name i isActive. Tablica przechowuje wiele projektów.
projects[0] to pierwszy obiekt; projects.length to liczba elementów.
ID identyfikuje projekt niezależnie od zmiany lub powtórzenia nazwy.

2. TWORZENIE ELEMENTÓW DOM
document.createElement('li') tworzy element, lecz nie pokazuje go na stronie.
item.textContent = project.name ustawia tekst, bez interpretowania HTML.
list.append(item) dołącza element do listy w dokumencie.

3. RENDEROWANIE LISTY
renderProjects() czyści widok przez list.replaceChildren().
projects.forEach(...) tworzy element li dla każdego projektu.
Czyszczenie zapobiega duplikowaniu widoku przy kolejnym renderowaniu.
Nie usuwa danych z tablicy projects.

4. DODAWANIE PRZEZ FORMULARZ
Zdarzenie submit obsługuje przycisk i Enter w polu.
event.preventDefault() zatrzymuje domyślne wysłanie formularza.
nameInput.value.trim() odczytuje nazwę i usuwa skrajne białe znaki.
Pusta nazwa kończy funkcję przez return.
crypto.randomUUID() tworzy ID nowego projektu (tekst).
projects.push(newProject) dopisuje obiekt do istniejącej tablicy.
renderProjects() aktualizuje widok, form.reset() czyści formularz.
Nowe projekty mają isActive: false; ten dzień nie dodaje przełącznika stanu.

5. USUWANIE PO ID
projects = projects.filter(project => project.id !== id);
filter tworzy nową tablicę z elementów, dla których warunek daje true.
Zachowujemy projekty o ID innym niż usuwane.
projects deklarujemy przez let, ponieważ przypisujemy nową tablicę.
Samo push działa także z const, bo nie przypisuje nowej tablicy.
Listener przycisku korzysta z project.id konkretnego projektu.
Początkowe ID są liczbami, nowe UUID tekstami; zachowujemy ich typy.

6. LOCALSTORAGE
saveProjects() zapisuje JSON.stringify(projects) pod kluczem 'projects'.
Wywołujemy ją po dodaniu i usunięciu, zanim odświeżymy widok.
Przy starcie JSON.parse odtwarza tablicę z tekstu.
Walidujemy tablicę, typy pól, niepuste nazwy i unikalność ID.
Pusta tablica [] jest poprawna: po usunięciu wszystkich projektów
nie przywracamy automatycznie przykładów.
try/catch obsługuje błędny JSON oraz niedostępny lub pełny magazyn.
Błąd odczytu: przykładowe dane i komunikat, bez automatycznego nadpisania.
Błąd zapisu: zmiana pozostaje w pamięci, komunikat ostrzega o braku zapisu.

POWTÓRKA
- Dodaj 'Panel klienta', usuń 'Portfolio', odśwież: zmiany pozostają.
- Dodaj dwie jednakowe nazwy: usunięcie jednej nie usuwa drugiej.
- Wpisz same spacje: projekt nie zostaje dodany.
- Usuń wszystko i odśwież: lista nadal jest pusta.
- Uszkodzony JSON lub niewłaściwe dane powodują komunikat i przykłady.

URUCHAMIANIE
Otwórz index.html przez lokalny serwer, np. Live Server na localhost.
DOM wymaga przeglądarki, a randomUUID bezpiecznego kontekstu
(HTTPS lub localhost). localStorage jest związany z originem.
Nie jest synchronizacją między urządzeniami ani miejscem na sekrety.
*/
console.log('Day 15 — lista projektów. Otwórz day-15-projects/index.html.');
