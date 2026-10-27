
"use strict";

// ============================================================
// PINKCODES — JAVASCRIPT DAY 09
// TOPIC: ASYNCHRONOUS JAVASCRIPT
// ============================================================

// TERMINAL COLORS

const colors = {
    cyan: "\x1b[36m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    magenta: "\x1b[35m",
    red: "\x1b[31m",
    reset: "\x1b[0m"
};

function section(title) {
    console.log(
        `\n${colors.cyan}========== ${title} ==========` +
        colors.reset
    );
}

function result(label, value) {
    console.log(
        `${colors.green}${label}:${colors.reset}`,
        value
    );
}

function info(message) {
    console.log(`${colors.yellow}${message}${colors.reset}`);
}

function errorLog(label, error) {
    console.log(
        `${colors.red}${label}:${colors.reset}`,
        error.message ?? error
    );
}

// Helper for waiting between demonstrations
const sleep = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));


// ============================================================
// MAIN LEARNING PROGRAM
// ============================================================

async function main() {

    console.log(
        colors.magenta +
        "\nPINKCODES | JAVASCRIPT DAY 09 — ASYNC JS" +
        colors.reset
    );


    // ========================================================
    // 1. SYNCHRONOUS VS ASYNCHRONOUS
    // ========================================================

    section("1. SYNCHRONOUS VS ASYNCHRONOUS");

    /*
    SYNCHRONOUS:
    Instructions execute one after another.

    ASYNCHRONOUS:
    Some operations can finish later without
    blocking the remaining synchronous code.
    */

    info("SYNCHRONOUS EXECUTION");

    console.log("1. Start");

    function calculateProfit(revenue, costs) {
        return revenue - costs;
    }

    result("Profit", calculateProfit(10000, 4000));

    console.log("3. End");

    // Expected:
    // 1. Start
    // Profit: 6000
    // 3. End

    info("ASYNCHRONOUS EXECUTION");

    console.log("A. Start");

    setTimeout(() => {
        console.log("B. Async operation completed");
    }, 500);

    console.log("C. Application continues");

    // Expected:
    // A -> C -> B

    await sleep(650);

    /*
    MENTAL MODEL:

    Synchronous code executes first.
    setTimeout schedules a callback for later.

    A timer does NOT pause the whole program.
    */


    // ========================================================
    // 2. SETTIMEOUT AND CALLBACK FUNCTIONS
    // ========================================================

    section("2. SETTIMEOUT & CALLBACKS");

    /*
    CALLBACK:
    A function passed into another function.

    setTimeout(callback, delay)

    delay is expressed in milliseconds.

    1000 ms = 1 second.
    */

    function renderVideo() {
        result(
            "Rendering",
            "Video rendering completed"
        );
    }

    function analyzeVideo() {
        result(
            "Analysis",
            "B-roll analysis completed"
        );
    }

    console.log("Astra Video Studio started");

    setTimeout(renderVideo, 600);
    setTimeout(analyzeVideo, 200);

    console.log("All operations scheduled");

    await sleep(750);

    /*
    EXPECTED ORDER:

    1. Astra Video Studio started
    2. All operations scheduled
    3. B-roll analysis completed
    4. Video rendering completed

    IMPORTANT:

    setTimeout(renderVideo, 600)
    -> Passes the function as a callback.

    setTimeout(renderVideo(), 600)
    -> Calls the function immediately,
       then passes its return value.
    */


    // ========================================================
    // 3. CALL STACK AND EVENT LOOP
    // ========================================================

    section("3. CALL STACK & EVENT LOOP");

    /*
    CALL STACK:
    Tracks currently executing functions.

    It follows LIFO:
    Last In, First Out.

    EVENT LOOP:
    Coordinates when queued asynchronous
    callbacks can execute.

    TASK QUEUE:
    Holds ready tasks such as timer callbacks.

    MICROTASK QUEUE:
    Holds Promise reactions.
    Microtasks run before the next timer task,
    after the current synchronous job finishes.
    */

    info("CALL STACK EXAMPLE");

    function first() {
        console.log("First start");

        second();

        console.log("First end");
    }

    function second() {
        console.log("Second function");
    }

    first();

    // Expected:
    // First start
    // Second function
    // First end

    info("EVENT LOOP EXAMPLE");

    console.log("A");

    setTimeout(() => {
        console.log("B");

        setTimeout(() => {
            console.log("C");
        }, 0);

        console.log("D");
    }, 250);

    function initializeApp() {
        console.log("E");
        console.log("F");
    }

    initializeApp();

    console.log("G");

    // Expected:
    // A -> E -> F -> G -> B -> D -> C

    await sleep(400);

    info("MICROTASK VS TIMER");

    console.log("1. Start");

    setTimeout(() => {
        console.log("4. Timer callback");
    }, 0);

    Promise.resolve().then(() => {
        console.log("3. Promise microtask");
    });

    console.log("2. End");

    // Expected:
    // 1. Start
    // 2. End
    // 3. Promise microtask
    // 4. Timer callback

    await sleep(50);

    /*
    MENTAL MODEL:

    1. Current synchronous code executes.
    2. Promise microtasks are processed.
    3. Ready timer tasks can execute.

    A nested setTimeout(..., 0) does NOT
    interrupt the currently running callback.
    */


    // ========================================================
    // 4. PROMISES — RESOLVE / REJECT
    // ========================================================

    section("4. PROMISES");

    /*
    A Promise represents the eventual result
    of an operation.

    THREE STATES:

    pending   -> waiting
    fulfilled -> success
    rejected  -> failure

    resolve(value) -> fulfills the Promise
    reject(reason) -> rejects the Promise

    .then()  -> handles successful results
    .catch() -> handles rejected Promises
                and errors in the chain
    */

    function validateVideo(duration) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {

                if (duration <= 60) {
                    resolve({
                        duration,
                        status: "Accepted"
                    });
                } else {
                    reject(
                        new Error("Video is too long")
                    );
                }

            }, 400);

        });
    }

    info("PROMISE SUCCESS");

    const successfulValidation = validateVideo(45)
        .then(data => {
            result("Validation success", data);
        })
        .catch(error => {
            errorLog("Validation error", error);
        });

    info("PROMISE REJECTION");

    const failedValidation = validateVideo(90)
        .then(data => {
            result("Validation success", data);
        })
        .catch(error => {
            errorLog("Validation error", error);
        });

    // Wait until both validations finish
    await Promise.all([
        successfulValidation,
        failedValidation
    ]);

    /*
    EXPECTED:

    validateVideo(45)
    -> { duration: 45, status: "Accepted" }

    validateVideo(90)
    -> Error: Video is too long

    IMPORTANT:

    A Promise must be returned if another
    function should await its result.
    */


    // ========================================================
    // 5. ASYNC / AWAIT + TRY / CATCH
    // ========================================================

    section("5. ASYNC / AWAIT");

    /*
    async:
    Declares an asynchronous function.
    An async function always returns a Promise.

    await:
    Waits for a Promise to settle and unwraps
    its fulfilled value.

    try:
    Runs code that may fail.

    catch:
    Handles errors and rejected Promises.

    await pauses the current async function,
    NOT the whole JavaScript program.
    */

    async function checkVideo(duration) {

        try {

            const validation = await validateVideo(
                duration
            );

            result(
                `Video ${duration}s`,
                validation
            );

            return validation;

        } catch (error) {

            errorLog(
                `Video ${duration}s`,
                error
            );

            return null;
        }
    }

    info("STARTING ASYNC VALIDATION");

    const firstCheck = checkVideo(45);
    const secondCheck = checkVideo(90);

    console.log("Dashboard is still running");

    await Promise.all([
        firstCheck,
        secondCheck
    ]);

    /*
    EXPECTED ORDER:

    1. STARTING ASYNC VALIDATION
    2. Dashboard is still running
    3. Video 45s -> Accepted
    4. Video 90s -> Error

    Both validations are started without
    awaiting one before starting the other.
    */


    // ========================================================
    // 6. SEQUENTIAL ASYNC PROCESSING
    // ========================================================

    section("6. SEQUENTIAL ASYNC PROCESSING");

    /*
    for...of + await:

    Each next iteration waits for the current
    asynchronous operation to finish.

    try/catch INSIDE the loop allows processing
    to continue even when an item fails.
    */

    const videos = [
        {
            id: 1,
            title: "Rottweiler",
            duration: 45
        },
        {
            id: 2,
            title: "Doberman",
            duration: 90
        },
        {
            id: 3,
            title: "Cane Corso",
            duration: 60
        }
    ];

    function analyzeDuration(video) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {

                if (video.duration <= 60) {

                    resolve({
                        id: video.id,
                        title: video.title,
                        status: "Accepted"
                    });

                } else {

                    reject(
                        new Error(
                            `Film ${video.title} jest za długi`
                        )
                    );
                }

            }, 300);
        });
    }

    async function processVideos(videos) {

        const accepted = [];
        const rejected = [];

        for (const video of videos) {

            try {

                const result = await analyzeDuration(
                    video
                );

                accepted.push(result);

                resultLog(result);

            } catch (error) {

                rejected.push({
                    title: video.title,
                    reason: error.message
                });

                errorLog("Rejected", error);
            }
        }

        return {
            total: videos.length,
            acceptedCount: accepted.length,
            rejectedCount: rejected.length,
            accepted,
            rejected
        };
    }

    function resultLog(video) {
        result("Processed video", video);
    }

    const report = await processVideos(videos);

    info("FINAL PROCESSING REPORT");

    result("Total", report.total);
    result("Accepted", report.acceptedCount);
    result("Rejected", report.rejectedCount);

    console.log("Full report:");
    console.log(report);

    /*
    MENTAL MODEL:

    for...of + await = sequential processing.

    The next video starts after the previous
    video has been accepted or rejected.

    try/catch inside the loop prevents
    one failure from stopping the queue.

    Returning a report from an async function
    fulfills its Promise with that report.
    */


    // ========================================================
    // 7. FINAL MENTAL MODEL
    // ========================================================

    section("7. FINAL MENTAL MODEL");

    console.log(`
1. SYNCHRONOUS CODE
   Executes instructions in order.

2. SETTIMEOUT
   Schedules callbacks to run later.
   Does not block the program.

3. CALLBACK
   A function passed to another function.

4. CALL STACK
   Tracks currently executing functions.
   Uses Last In, First Out.

5. EVENT LOOP
   Coordinates execution of queued tasks.

6. PROMISE
   Represents an eventual result.
   pending -> fulfilled / rejected.

7. RESOLVE / REJECT
   Resolve = successful completion.
   Reject  = unsuccessful completion.

8. THEN / CATCH
   Handle results and errors of Promises.

9. ASYNC
   Declares a function returning a Promise.

10. AWAIT
    Waits inside an async function.

11. TRY / CATCH
    Handles exceptions and rejected Promises.

12. FOR...OF + AWAIT
    Processes asynchronous tasks sequentially.
`);

    // ========================================================
    // DAY 09 COMPLETE
    // ========================================================

    console.log(
        colors.green +
        "\n========================================" +
        "\n          DAY 09 COMPLETE" +
        "\n========================================" +
        colors.reset
    );

    console.log(
        colors.magenta +
        "\nNEXT: DAY 10 — FETCH API, HTTP & JSON" +
        colors.reset
    );

    // ========================================================
    // PINKCODES — END OF DAY 09
    // ========================================================

}

// Start the learning program
main().catch(error => {
    errorLog("Unexpected error", error);
});
