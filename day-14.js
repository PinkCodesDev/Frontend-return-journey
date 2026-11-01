"use strict";
// DAY 14 — LOCALSTORAGE I TRWAŁE USTAWIENIA PANELU
// Kontynuacja projektu w day-13-dom/index.html.
/*
1. ZAPIS I ODCZYT
localStorage.setItem('projectName', 'PlatinumOS');
localStorage.getItem('projectName');
Dane są parami klucz–wartość. Nieistniejący klucz daje null.
Ponowny zapis pod tym samym kluczem zastępuje wartość.

2. PRZYWRACANIE NAZWY
Odczytaj dane przy starcie i ustaw title.textContent.
Zapisuj nazwę w funkcji kliknięcia po sprawdzeniu trim().
Zmiana DOM działa teraz; localStorage zachowuje dane na później.

3. JSON
const project = { name: 'PlatinumOS', isActive: true };
localStorage.setItem('project', JSON.stringify(project));
const restored = JSON.parse(localStorage.getItem('project'));
stringify: obiekt -> tekst. parse: tekst JSON -> wartość JavaScript.
Przed parsowaniem sprawdzaj, czy zapis istnieje.

4. WSPÓLNY STAN PANELU
Obiekt project przechowuje nazwę i aktywność.
renderProject() pokazuje stan, saveProject() zapisuje go jako JSON.
classList.toggle('active', project.isActive) wymusza obecność klasy
zgodnie z booleanem, zamiast przełączać ją przy każdym renderowaniu.
project.isActive = !project.isActive odwraca stan po kliknięciu.

5. RESET
localStorage.removeItem('project') usuwa wskazany klucz.
Nie używamy clear(), bo usunąłby również inne dane tego originu.
Reset odtwarza kopię defaults, czyści pole i odświeża panel.
Usuwa także stary klucz projectName z pierwszych lekcji.

6. ODPORNOŚĆ NA BŁĘDY
Odczyt, zapis, usuwanie i JSON.parse otaczamy try/catch.
Poprawny JSON nie gwarantuje poprawnej struktury obiektu!
Sprawdzamy niepustą nazwę i boolean isActive.
Uszkodzony zapis: wartości domyślne i komunikat dla użytkownika.
Niedostępny magazyn: panel nadal działa, ale informuje o braku zapisu.
Pierwszy poprawny zapis zastąpi uszkodzone dane.

POWTÓRKA
- Zapisz nazwę i aktywuj projekt; po odświeżeniu oba stany pozostają.
- Pusta nazwa i same spacje nie zmieniają projektu.
- Reset przywraca nazwę domyślną i stan nieaktywny także po odświeżeniu.
- W konsoli ustaw localStorage.setItem('project', '{'); odśwież:
  panel powinien pokazać domyślne ustawienia i komunikat błędu.
- Powtórz z poprawnym JSON o złych typach, np. '{"name":12}'.

URUCHAMIANIE
Otwórz index.html przez lokalny serwer, np. Live Server.
localStorage jest związany z originem (protokół, host, port).
Dla file:// zachowanie może się różnić między przeglądarkami.
To lokalny zapis przeglądarki, nie baza na serwerze ani synchronizacja.
Dane mogą zostać usunięte; nie przechowujemy tu haseł ani sekretów.
*/
console.log('Day 14 — localStorage. Panel: day-13-dom/index.html');
