
"use strict";

// ============================================================
// PINKCODES — JAVASCRIPT DAY 10
// TOPIC: FETCH API, HTTP & JSON
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
    console.log(
        `${colors.yellow}${message}${colors.reset}`
    );
}

function errorLog(label, error) {
    console.error(
        `${colors.red}${label}:${colors.reset}`,
        error.message ?? error
    );
}

// API CONFIGURATION

const API_URL = "https://jsonplaceholder.typicode.com";


// ============================================================
// 1. HTTP FUNDAMENTALS
// ============================================================

function explainHTTP() {

    section("1. HTTP FUNDAMENTALS");

    /*
    HTTP = Hypertext Transfer Protocol.

    HTTP allows clients and servers to communicate.

    CLIENT:
    JavaScript frontend, browser, React application.

    SERVER:
    Backend written in Python, Node.js, etc.

    REQUEST -> SERVER -> RESPONSE
    */

    info("HTTP METHODS");

    const methods = [
        ["GET", "Retrieve resources"],
        ["POST", "Submit data / create resources"],
        ["PUT", "Replace a resource"],
        ["PATCH", "Partially update a resource"],
        ["DELETE", "Delete a resource"]
    ];

    methods.forEach(([method, description]) => {
        result(method, description);
    });

    info("HTTP STATUS CODES");

    const statusCodes = {
        200: "OK",
        201: "Created",
        400: "Bad Request",
        401: "Unauthorized",
        403: "Forbidden",
        404: "Not Found",
        500: "Internal Server Error"
    };

    Object.entries(statusCodes).forEach(
        ([status, description]) => {
            result(status, description);
        }
    );

    /*
    MENTAL MODEL:

    GET    -> Read
    POST   -> Create / Submit
    PUT    -> Replace
    PATCH  -> Update selected properties
    DELETE -> Remove

    HTTP 2xx -> Successful response.
    HTTP 4xx -> Client-side request problem.
    HTTP 5xx -> Server-side problem.

    These are common REST API conventions.
    */
}


// ============================================================
// 2. JSON — STRINGIFY & PARSE
// ============================================================

function explainJSON() {

    section("2. JSON — STRINGIFY & PARSE");

    /*
    JSON = JavaScript Object Notation.

    JSON is a text-based data exchange format.

    JSON.stringify():
    JavaScript value -> JSON string

    JSON.parse():
    JSON string -> JavaScript value
    */

    const video = {
        id: 15,
        title: "Rottweiler",
        duration: 45,
        analytics: {
            views: 150000,
            likes: 8500
        },
        status: "Completed"
    };

    // OBJECT -> JSON STRING

    const videoJSON = JSON.stringify(video);

    result("Original Object", video);
    result("JSON String", videoJSON);

    result("Original Type", typeof video);
    result("JSON Type", typeof videoJSON);

    // JSON STRING -> OBJECT

    const parsedVideo = JSON.parse(videoJSON);

    result("Parsed Object", parsedVideo);
    result("Parsed Type", typeof parsedVideo);

    // NESTED DESTRUCTURING

    const {
        title,
        analytics: { views, likes }
    } = parsedVideo;

    const videoSummary = {
        title,
        views,
        likes
    };

    result("Video Summary", videoSummary);

    /*
    IMPORTANT:

    JSON.stringify() serializes a value as JSON.

    JSON.parse() parses valid JSON text.

    JSON is not exactly the same as JavaScript
    object syntax.

    JSON property names require double quotes.

    JSON cannot represent undefined, functions,
    or other arbitrary JavaScript values.

    JSON.parse() throws SyntaxError for invalid JSON.
    */

    // INVALID JSON EXAMPLE

    try {
        JSON.parse("{invalid json}");
    } catch (error) {
        errorLog("JSON Parsing Error", error);
    }
}


// ============================================================
// 3. FETCH API — GET REQUEST
// ============================================================

async function getUserById(id) {

    section("3. FETCH API — GET");

    /*
    fetch() sends HTTP requests.

    By default, fetch() uses GET.

    fetch() returns a Promise.

    response.json() reads and parses JSON
    response content asynchronously.
    */

    try {
        info(`Fetching user with ID: ${id}`);

        const response = await fetch(
            `${API_URL}/users/${id}`
        );

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        result("HTTP Status", response.status);
        result("Response OK", response.ok);

        const user = await response.json();

        // NESTED DESTRUCTURING

        const {
            name,
            email,
            address: { city }
        } = user;

        const userSummary = {
            name,
            email,
            city
        };

        result("User Summary", userSummary);

        return userSummary;

    } catch (error) {
        errorLog("GET Request Error", error);
        return null;
    }

    /*
    MENTAL MODEL:

    1. fetch(url) sends a request.
    2. await waits for the HTTP response.
    3. response.ok checks status 200-299.
    4. response.json() parses JSON data.
    5. Destructuring extracts properties.
    6. return provides data to the caller.
    */
}


// ============================================================
// 4. HTTP STATUS & ERROR HANDLING
// ============================================================

async function getPostById(id) {

    section("4. HTTP STATUS & ERROR HANDLING");

    /*
    IMPORTANT:

    fetch() does NOT reject its Promise
    automatically for HTTP 404 or 500.

    It can reject for network-related failures.

    We must check response.ok ourselves.
    */

    try {
        info(`Fetching post with ID: ${id}`);

        const response = await fetch(
            `${API_URL}/posts/${id}`
        );

        result("HTTP Status", response.status);
        result("Response OK", response.ok);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        const {
            id: postId,
            title,
            body: description
        } = data;

        const post = {
            id: postId,
            title,
            description,
            status: "Fetched"
        };

        result("Fetched Post", post);

        return post;

    } catch (error) {
        errorLog("GET Request Failed", error);

        return null;
    }

    /*
    MENTAL MODEL:

    response.ok
    -> true for HTTP 200-299.

    !response.ok
    -> true when the response is unsuccessful.

    throw new Error(...)
    -> throws an exception.

    catch(error)
    -> handles the exception.

    return null
    -> provides a predictable failure result.

    NOTE:

    In larger applications, we may choose
    to rethrow the error instead, allowing
    higher-level code to handle it.
    */
}


// ============================================================
// 5. FETCH API — POST REQUEST
// ============================================================

async function createVideo(video) {

    section("5. FETCH API — POST");

    /*
    POST sends data to a server.

    fetch(url, options)

    options can include:

    method  -> HTTP method
    headers -> request metadata
    body    -> data sent to the server

    Content-Type: application/json
    indicates a JSON request body.
    */

    try {
        info("Creating a new video...");

        const response = await fetch(
            `${API_URL}/posts`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(video)
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        result("HTTP Status", response.status);

        // READ SERVER RESPONSE

        const data = await response.json();

        // DESTRUCTURING

        const {
            id,
            title,
            body,
            userId
        } = data;

        const createdVideo = {
            id,
            title,
            body,
            userId,
            status: "Created"
        };

        result("Created Video", createdVideo);

        return createdVideo;

    } catch (error) {
        errorLog("POST Request Failed", error);

        return null;
    }

    /*
    MENTAL MODEL:

    method: "POST"
    -> Specifies the HTTP method.

    headers
    -> Describes the request content.

    JSON.stringify(video)
    -> Converts the JS object to JSON text.

    response.json()
    -> Reads and parses the server's response.

    return createdVideo
    -> Returns the resulting JavaScript object.

    JSONPlaceholder simulates POST requests.

    Created resources are NOT permanently saved.
    */
}


// ============================================================
// 6. API WORKFLOW — INTEGRATION
// ============================================================

function createAPIReport(
    existingPost,
    createdVideo,
    missingPost
) {

    section("6. API WORKFLOW — INTEGRATION");

    /*
    Functions can be combined into a larger
    application workflow.

    Data returned by one operation can be
    used elsewhere in our application.

    We can also reuse concepts from Day 08:

    - Object shorthand
    - Optional chaining
    - Nullish coalescing
    - Array methods
    */

    const operations = [
        existingPost,
        createdVideo,
        missingPost
    ];

    const successfulOperations = operations.filter(
        operation => operation !== null
    );

    const report = {
        totalOperations: operations.length,
        successfulOperations: successfulOperations.length,
        failedOperations:
            operations.length - successfulOperations.length,

        existingPost,
        createdVideo,
        missingPost,

        fetchedTitle: existingPost?.title ?? "Unavailable",
        createdTitle: createdVideo?.title ?? "Unavailable"
    };

    result("Total Operations", report.totalOperations);
    result("Successful Operations", report.successfulOperations);
    result("Failed Operations", report.failedOperations);

    result("Final API Report", report);

    return report;

    /*
    IMPORTANT:

    ?. safely reads optional properties.

    ?? provides a fallback when a value
    is null or undefined.

    filter() selects successful results.

    Functions returning values are easier
    to reuse in larger applications.
    */
}


// ============================================================
// 7. FINAL MENTAL MODEL
// ============================================================

function finalSummary() {

    section("7. FINAL MENTAL MODEL");

    console.log(`
1. HTTP
   Protocol for client-server communication.

2. GET
   Retrieve data from a server.

3. POST
   Send data, often to create a resource.

4. PUT
   Replace a resource.

5. PATCH
   Partially update a resource.

6. DELETE
   Remove a resource.

7. JSON.stringify()
   JavaScript value -> JSON string.

8. JSON.parse()
   JSON string -> JavaScript value.

9. fetch()
   Sends HTTP requests and returns a Promise.

10. async / await
    Handles asynchronous operations.

11. response.ok
    Indicates HTTP status 200-299.

12. response.status
    Contains the numeric HTTP status code.

13. response.json()
    Reads and parses a JSON response body.

14. throw new Error()
    Creates and throws an exception.

15. try / catch
    Handles errors during execution.

16. return
    Makes results available to other functions.

17. JSONPlaceholder
    Public testing API that simulates POST.
`);

    console.log(
        colors.green +
        "\n========================================" +
        "\n          DAY 10 COMPLETE" +
        "\n========================================" +
        colors.reset
    );

    console.log(
        colors.magenta +
        "\nNEXT: DAY 11 — MODULES & DEBUGGING" +
        colors.reset
    );
}


// ============================================================
// MAIN PROGRAM — RUN ALL LESSONS
// ============================================================

async function main() {

    console.log(
        colors.magenta +
        "\nPINKCODES | JAVASCRIPT DAY 10 — FETCH API" +
        colors.reset
    );

    // SECTION 1 — HTTP
    explainHTTP();

    // SECTION 2 — JSON
    explainJSON();

    // SECTION 3 — GET
    const user = await getUserById(1);

    // SECTION 4 — HTTP ERRORS

    // Successful request
    const existingPost = await getPostById(1);

    // Expected HTTP 404
    const missingPost = await getPostById(9999);

    // SECTION 5 — POST

    const video = {
        title: "Cane Corso",
        body: "Short video about Cane Corso - 55 seconds",
        userId: 1
    };

    const createdVideo = await createVideo(video);

    // SECTION 6 — INTEGRATION

    const report = createAPIReport(
        existingPost,
        createdVideo,
        missingPost
    );

    // SECTION 7 — SUMMARY
    finalSummary();

}

// ============================================================
// START APPLICATION
// ============================================================

main().catch(error => {
    errorLog("Unexpected Application Error", error);
});

// ============================================================
// PINKCODES — END OF DAY 10
// ============================================================
