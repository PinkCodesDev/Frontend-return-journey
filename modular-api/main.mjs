import { getPost as fetchPost } from './api.mjs';
import log, * as logger from './logger.mjs';

async function startApp() {
    try {
        log('Pobieram post...');


        const post = await fetchPost(1);

        logger.logSuccess(`Pobrano post o ID: ${post.id}`);
        console.log(post);
    } catch (error) {
        logger.logError(`Wystąpił błąd: ${error.message}`);
    }
}

startApp();