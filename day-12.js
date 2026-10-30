"use strict";

// ============================================================
// PINKCODES — JAVASCRIPT DAY 12
// TEMAT: OBSŁUGA BŁĘDÓW I WALIDACJA DANYCH
// Materiał do późniejszej powtórki — przykład w modular-api.
// ============================================================

/*
1. THROW NEW ERROR I RESPONSE.OK

fetch nie odrzuca obietnicy z powodu samego statusu HTTP 404/500.
response.ok jest true dla statusów 200–299. Po fetch sprawdzamy:
    if (!response.ok) {
        throw new Error(`Błąd HTTP: ${response.status}`);
    }
throw przerywa zwykłe wykonywanie funkcji. W funkcji async powoduje
odrzucenie obietnicy, które przechwytuje catch otaczający await.

W komunikacie ${id} odczytuje ID, a ${id = 999999} przypisuje wartość.
Testowe ID ustawiamy przy wywołaniu fetchPost(999999).

2. WALIDACJA PRZED ŻĄDANIEM

Najpierw sprawdzamy argument, potem wysyłamy żądanie:
    if (!Number.isInteger(id)) { ... }
    if (id <= 0) { ... }

Number.isInteger('1') to false — tekst nie jest liczbą.
Number.isInteger(1.5) to false — ułamek nie jest liczbą całkowitą.
Dodatnie ID nie gwarantuje istnienia posta. Nadal sprawdzamy HTTP.
Walidacja po stronie klienta nie zastępuje walidacji na serwerze.

3. TRY / CATCH / FINALLY

try: operacja, która może się nie udać.
catch: reakcja na przechwycony błąd.
finally: porządki po sukcesie lub błędzie, np. wyłączenie ładowania.

    try {
        const post = await fetchPost(1);
        console.log(post);
    } catch (error) {
        console.error(error.message);
    } finally {
        console.log('Zakończono próbę pobrania posta.');
    }

Komunikat sukcesu należy do try, nie do finally.
Zmienna const post zadeklarowana w try nie jest dostępna poza nim.

4. RODZAJE BŁĘDÓW

TypeError — w naszym przykładzie argument nie jest liczbą całkowitą.
RangeError — liczba całkowita jest poza zakresem (ID <= 0).
Error — ogólny błąd.
error.name to nazwa rodzaju błędu, error.message to opis.

5. ROZPOZNAWANIE BŁĘDÓW PRZEZ INSTANCEOF

    if (error instanceof RangeError) {
        console.error(`Sprawdź zakres ID: ${error.message}`);
    }

Nie porównujemy tekstu komunikatów, żeby rozpoznać rodzaj błędu.
Uwaga: fetch też może rzucić TypeError przy błędzie sieciowym.
Dlatego main.mjs nie zakłada, że każdy TypeError to błędne ID.

6. WŁASNY BŁĄD HTTP — ĆWICZENIE KOŃCOWE

errors.mjs definiuje klasę HttpError rozszerzającą Error.
constructor(status, postId) przyjmuje dane nowego błędu.
super(...) ustawia komunikat przez konstruktor klasy Error.
this.name nadaje nazwę, a this.status zachowuje kod HTTP.

api.mjs używa:
    throw new HttpError(response.status, id);

main.mjs rozpoznaje go przez:
    error instanceof HttpError

Dla statusu 404 pokazuje informację o braku posta. Dla innych
statusów wyświetla komunikat błędu. Nie ukrywamy awarii w api.mjs
przez zwrócenie pustego obiektu — przekazujemy błąd do main.mjs.
process.exitCode = 1 informuje terminal, że program się nie powiódł.

PLAN POWTÓRKI

W modular-api/main.mjs zmieniaj argument fetchPost i obserwuj wynik:
    1      — sukces;
    '1'    — TypeError, bez wysyłania żądania;
    1.5    — TypeError, bez wysyłania żądania;
    -3     — RangeError, bez wysyłania żądania;
    0      — RangeError, bez wysyłania żądania;
    999999 — HttpError 404 po odpowiedzi serwera.

Po każdej próbie powinien pojawić się komunikat z finally.
Po powtórce przywróć fetchPost(1).

URUCHOMIENIE Z GŁÓWNEGO FOLDERU JS

    node modular-api/main.mjs
    node --test modular-api/api.test.mjs

Jeżeli lokalny Node wymaga systemowego magazynu certyfikatów:
    node --use-system-ca modular-api/main.mjs
Nie wyłączaj weryfikacji TLS.
*/

console.log('Day 12 — obsługa błędów i walidacja danych.');
console.log('6 lekcji do powtórki w tym pliku. Przykład: modular-api.');
