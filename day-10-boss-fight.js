
"use strict";

// ============================================================
// PINKCODES — JAVASCRIPT DAY 10
// BOSS FIGHT: ASTRA VIDEO API CLIENT
// GET / POST / JSON / ASYNC-AWAIT / ERROR HANDLING
// ============================================================

const API_URL = "https://jsonplaceholder.typicode.com";

// ============================================================
// 1. GET — FETCH EXISTING VIDEO
// ============================================================

async function getVideoById(id) {
    try {
        const response = await fetch(`${API_URL}/posts/${id}`);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        const {
            id: videoId,
            title,
            body: description
        } = data;

        return {
            id: videoId,
            title,
            description,
            status: "Fetched"
        };

    } catch (error) {
        console.error("GET Error:", error.message);
        return null;
    }
}

// ============================================================
// 2. POST — CREATE NEW VIDEO
// ============================================================

async function createVideo(video) {
    try {
        const response = await fetch(`${API_URL}/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(video)
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        const { id, title, body, userId } = data;

        return {
            id,
            title,
            body,
            userId,
            status: "Created"
        };

    } catch (error) {
        console.error("POST Error:", error.message);
        return null;
    }
}

// ============================================================
// 3. NEW VIDEO DATA
// ============================================================

const newVideo = {
    title: "Cane Corso",
    body: "Short video about Cane Corso - 55 seconds",
    userId: 1
};

// ============================================================
// 4. FINAL INTEGRATION — API WORKFLOW
// ============================================================

async function runVideoWorkflow() {
    console.log("Astra Video API Client Started");

    // GET — Existing video
    const existingVideo = await getVideoById(1);

    // POST — Create new video
    const createdVideo = await createVideo(newVideo);

    // GET — Non-existing video (404 test)
    const missingVideo = await getVideoById(9999);

    // Return final report
    return {
        existingVideo,
        createdVideo,
        missingVideo,
        totalOperations: 3
    };
}

// ============================================================
// 5. EXECUTE WORKFLOW
// ============================================================

runVideoWorkflow()
    .then(report => {
        console.log("\n========== FINAL API REPORT ==========");
        console.log(report);
        console.log("======================================");
    })
    .catch(error => {
        console.error("Workflow Error:", error.message);
    });

// ============================================================
// PINKCODES — END OF DAY 10 BOSS FIGHT
// ============================================================
