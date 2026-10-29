"use strict";

// ============================================================
// PINKCODES — JAVASCRIPT DAY 11
// TEMAT: ES MODULES — IMPORT, EXPORT I MODULARNA ARCHITEKTURA
// ============================================================

/*
1. EKSPORTY NAZWANE

Moduł może udostępniać wiele funkcji i wartości:
    export const API_URL = 'https://jsonplaceholder.typicode.com';
    export function getPost(id) { ... }

Import wymaga klamer i nazwy zgodnej z eksportem:
    import { getPost } from './api.mjs';

Można też eksportować wcześniej zadeklarowaną funkcję:
    export { getPost };

2. PODZIAŁ ODPOWIEDZIALNOŚCI

Projekt modular-api:
    config.mjs — konfiguracja i adres API.
    api.mjs    — pobieranie danych za pomocą Fetch API.
    logger.mjs — komunikaty aplikacji, sukcesu i błędów.
    main.mjs   — uruchomienie i połączenie modułów.

Pliki .mjs są modułami ES w Node.js. W lokalnych importach
podajemy ścieżkę względną i rozszerzenie, np. './config.mjs'.

3. EKSPORT DOMYŚLNY

Jeden moduł może mieć jeden eksport domyślny:
    export default function log(message) { ... }

Importujemy go bez klamer, pod dowolną lokalną nazwą:
    import log from './logger.mjs';
    // Alternatywnie: import writeLog from './logger.mjs';

4. ŁĄCZENIE EKSPORTÓW

Eksport domyślny i eksporty nazwane mogą istnieć w jednym module:
    import log, { logError, logSuccess } from './logger.mjs';

5. ALIASY IMPORTÓW

Słowo 'as' zmienia lokalną nazwę eksportu nazwanego:
    import { getPost as fetchPost } from './api.mjs';
    const post = await fetchPost(1);

Nie zmieniamy nazwy funkcji w module źródłowym.

6. IMPORT CAŁEGO MODUŁU

    import log, * as logger from './logger.mjs';
    log('Pobieram post...');
    logger.logSuccess('Pobrano post!');
    logger.logError('Wystąpił błąd');

Obiekt przestrzeni nazw logger zawiera eksporty modułu.
Eksport domyślny jest również dostępny jako logger.default.

WAŻNE WNIOSKI Z ĆWICZEŃ

- 'const post' wewnątrz try jest dostępne tylko w tym bloku
  i jego blokach zagnieżdżonych, a nie po zamykającej klamrze.
- Blok try wymaga catch lub finally.
- Komunikat 'Pobieram...' umieszczamy przed await fetchPost(1).
- 'post.id && post.title' nie wyświetla obu wartości.
  Używamy console.log(post.id, post.title) albo console.log(post).
- await fetch(...) czeka na odpowiedź, a await response.json()
  odczytuje treść odpowiedzi jako JSON.
- fetch nie odrzuca obietnicy tylko dlatego, że serwer zwrócił
  HTTP 404 lub 500. Trzeba sprawdzić response.ok i rzucić błąd.
  W aktualnym api.mjs ten warunek pozostaje do dodania:
      if (!response.ok) {
          throw new Error(`Błąd HTTP: ${response.status}`);
      }

URUCHOMIENIE PROJEKTU

    cd modular-api
    node main.mjs

W testowanym środowisku Node wymagał systemowych certyfikatów:
    node --use-system-ca main.mjs

Ta opcja korzysta z systemowego magazynu certyfikatów;
nie wyłącza weryfikacji TLS.
*/

console.log('Day 11 — ES Modules: podsumowanie 6 lekcji.');
console.log('Projekt praktyczny: modular-api/main.mjs');
