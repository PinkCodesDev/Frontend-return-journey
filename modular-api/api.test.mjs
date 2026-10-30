import test from 'node:test';
import assert from 'node:assert/strict';
import { getPost } from './api.mjs';
import { HttpError } from './errors.mjs';

// Atrapy odpowiedzi umożliwiają testowanie bez internetu.
test('walidacja odrzuca niepoprawne ID przed fetch', async (t) => {
    const fetchMock = t.mock.method(globalThis, 'fetch', async () => {
        throw new Error('Fetch nie powinien zostać wywołany');
    });
    for (const id of ['1', 1.5, undefined, NaN]) {
        await assert.rejects(getPost(id), TypeError);
    }
    for (const id of [-3, 0]) {
        await assert.rejects(getPost(id), RangeError);
    }
    assert.equal(fetchMock.mock.callCount(), 0);
});

test('pobiera i zwraca post dla poprawnego ID', async (t) => {
    const post = { id: 1, title: 'Testowy post' };
    const fetchMock = t.mock.method(globalThis, 'fetch', async () =>
        new Response(JSON.stringify(post), { status: 200 }));
    assert.deepEqual(await getPost(1), post);
    assert.equal(fetchMock.mock.calls[0].arguments[0],
        'https://jsonplaceholder.typicode.com/posts/1');
});

test('zachowuje status 404 i 500 w HttpError', async (t) => {
    for (const status of [404, 500]) {
        const fetchMock = t.mock.method(globalThis, 'fetch', async () =>
            new Response('To nie jest JSON', { status }));
        await assert.rejects(getPost(999999), (error) => {
            assert.ok(error instanceof HttpError);
            assert.equal(error.status, status);
            assert.match(error.message, /999999/);
            return true;
        });
        fetchMock.mock.restore();
    }
});

test('przekazuje błąd połączenia do wywołującego', async (t) => {
    const networkError = new TypeError('fetch failed');
    t.mock.method(globalThis, 'fetch', async () => { throw networkError; });
    await assert.rejects(getPost(1), (error) => error === networkError);
});
