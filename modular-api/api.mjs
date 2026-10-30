import { API_URL } from './config.mjs';
import { HttpError } from './errors.mjs';

async function getPost(id) {
    if (!Number.isInteger(id)) {
        throw new TypeError('ID posta musi być liczbą całkowitą');
    }
    if (id <= 0) {
        throw new RangeError('ID posta musi być większe od zera');
    }

    const response = await fetch(`${API_URL}/posts/${id}`);
    if (!response.ok) {
        throw new HttpError(response.status, id);
    }
    const data = await response.json();
    return data;
}

export { getPost };
