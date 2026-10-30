// Własny typ błędu pozwala rozpoznać HTTP bez analizowania tekstu.
export class HttpError extends Error {
    constructor(status, postId) {
        super(`Błąd pobierania posta ${postId}. HTTP: ${status}`);
        this.name = 'HttpError';
        this.status = status;
    }
}
