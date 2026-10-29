import { API_URL } from './config.mjs';

async function getPost(id) {
    const response = await fetch(`${API_URL}/posts/${id}`);
    const data = await response.json();
    return data;
}

export { getPost };