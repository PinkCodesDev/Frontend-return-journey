export default function log(message) {
    console.log(`[APP] ${message}`);
}

export function logError(message) {
    console.error(`[ERROR] ${message}`);
}

export function logSuccess(message) {
    console.log(`[SUCCESS] ${message}`);
}

