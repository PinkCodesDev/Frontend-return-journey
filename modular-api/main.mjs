import { getPost as fetchPost } from './api.mjs';
import log, * as logger from './logger.mjs';
import { HttpError } from './errors.mjs';

async function startApp() {
    try {
        log('Pobieram post...');

        const post = await fetchPost(1);

        logger.logSuccess(`Pobrano post o ID: ${post.id}`);
        console.log(post);
    } catch (error) {
        if (error instanceof HttpError) {
            if (error.status === 404) {
                logger.logError('Nie znaleziono posta o podanym ID.');
            } else {
                logger.logError(error.message);
            }
        } else if (error instanceof RangeError) {
            logger.logError(`Sprawdź zakres ID: ${error.message}`);
        } else if (error instanceof TypeError) {
            // Fetch również może zgłosić TypeError przy awarii sieci.
            logger.logError(`Błąd danych lub połączenia: ${error.message}`);
        } else {
            logger.logError(`Nieoczekiwany błąd: ${error.message}`);
        }
        process.exitCode = 1;
    } finally {
        log('Zakończono próbę pobrania posta.');
    }
}

startApp();
