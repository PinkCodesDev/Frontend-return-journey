"use strict";

// DAY 13 — DOM I INTERAKTYWNY PANEL PROJEKTU
// Przykład: otwórz day-13-dom/index.html w przeglądarce.
// main.js wymaga przeglądarkowego document, nie uruchamiaj go w Node.

/*
1. DOM I QUERYSELECTOR
DOM to reprezentacja HTML dostępna dla JavaScriptu.
document.querySelector('#project-title') znajduje element po ID.
document.querySelector('.project-card') znajduje pierwszy element klasy.
Brak pasującego elementu daje null.
Skrypt z defer uruchamia się po przetworzeniu HTML.

2. TEXTCONTENT
title.textContent odczytuje tekst elementu.
title.textContent = 'PlatinumOS' ustawia nowy tekst.
Zmienia się dokument w przeglądarce, nie źródłowy plik na dysku.
Tekst wpisany przez użytkownika ustawiamy przez textContent,
aby nie interpretować go jako HTML.

3. CLASSLIST
card.classList.add('active') dodaje klasę.
card.classList.remove('active') usuwa klasę.
card.classList.toggle('active') przełącza klasę i zwraca boolean:
true oznacza, że po operacji klasa jest obecna.
W classList podajemy nazwę bez kropki. Wygląd określa CSS.

4. ADDEVENTLISTENER
button.addEventListener('click', () => { ... });
Funkcja wykona się po kliknięciu, nie podczas jej rejestrowania.
Przy zmianie rozwiązania zastępujemy poprzedni listener,
żeby jedno kliknięcie nie przełączało klasy dwukrotnie.

5. VALUE I MOMENT ODCZYTU
nameInput.value odczytuje bieżącą zawartość pola input.
Odczyt wewnątrz funkcji kliknięcia pobiera tekst z chwili kliknięcia.
Zmienna z tekstem odczytanym wcześniej nie aktualizuje się sama.
Input używa value, a nagłówek lub akapit — textContent.

6. PANEL KOŃCOWY I WALIDACJA
trim() usuwa białe znaki z początku i końca tekstu.
Gdy newName === '', alert pokazuje komunikat, a return kończy funkcję.
Dotychczasowy nagłówek pozostaje bez zmian.
Wynik toggle zapisujemy jako isActive i przez if/else ustawiamy
status oraz napis przycisku zgodnie z wyglądem panelu.
aria-pressed opisuje stan przycisku dla technologii asystujących.

POWTÓRKA W PRZEGLĄDARCE
- Początek: szara ramka, status nieaktywny.
- Pierwsze kliknięcie: zielony panel, status aktywny.
- Drugie kliknięcie: powrót do stanu nieaktywnego.
- Zapis '  PlatinumOS  ': nagłówek bez skrajnych spacji.
- Zapis samych spacji: komunikat, stary nagłówek pozostaje.
- Odświeżenie: powrót do wartości początkowych.
Nie dodaliśmy trwałego zapisu danych (np. localStorage).
*/

console.log('Day 13 — DOM. Otwórz day-13-dom/index.html w przeglądarce.');
