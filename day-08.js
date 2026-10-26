
"use strict";

// ============================================================
// PINKCODES — JAVASCRIPT DAY 08
// TOPIC: MODERN JAVASCRIPT — ES6+ FUNDAMENTALS
// ============================================================

// TERMINAL COLORS
const colors = {
    cyan: "\x1b[36m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    magenta: "\x1b[35m",
    reset: "\x1b[0m"
};

function section(title) {
    console.log(
        `\n${colors.cyan}========== ${title} ==========`
        + colors.reset
    );
}

function result(label, value) {
    console.log(`${colors.green}${label}:${colors.reset}`, value);
}

console.log(
    colors.magenta +
    "\nPINKCODES | JAVASCRIPT DAY 08 — ES6+ FUNDAMENTALS" +
    colors.reset
);


// ============================================================
// 1. OBJECT DESTRUCTURING
// ============================================================

section("1. OBJECT DESTRUCTURING");

/*
Destructuring extracts object properties into variables.

Instead of:
const name = project.name;
const budget = project.budget;

We can extract both in one statement.
*/

{
    const project = {
        name: "Astra Video Studio",
        budget: 12000,
        spent: 4500
    };

    const { name, budget, spent } = project;

    const remainingBudget = budget - spent;

    result("Project", name);
    result("Budget", budget);
    result("Spent", spent);
    result("Remaining Budget", remainingBudget);
}

/*
MENTAL MODEL:
Object Destructuring = extract properties into variables.
Property names must match unless explicitly renamed.
*/


// ============================================================
// 2. SPREAD OPERATOR (...)
// ============================================================

section("2. SPREAD OPERATOR");

/*
Spread unpacks properties or array elements.

Common uses:
- Copying objects
- Updating properties
- Combining objects
- Combining arrays
*/

{
    const project = {
        name: "Astra Video Studio",
        status: "In Progress",
        budget: 15000
    };

    const updatedProject = {
        ...project,
        status: "Completed",
        priority: "High"
    };

    result("Original Project", project);
    result("Updated Project", updatedProject);
}

{
    const technologies = ["JavaScript", "Python"];
    const additional = ["React", "FastAPI"];

    const allTechnologies = [
        ...technologies,
        ...additional
    ];

    result("Original Technologies", technologies);
    result("Combined Technologies", allTechnologies);
}

/*
MENTAL MODEL:
Spread = UNPACK.

Object: {...object}
Array:  [...array]

Spread creates a shallow copy, not a deep copy.
*/


// ============================================================
// 3. REST OPERATOR (...)
// ============================================================

section("3. REST OPERATOR");

/*
Rest collects multiple values into one structure.

Rest in function parameters collects arguments into an array.
*/

{
    function calculateCosts(...costs) {
        return costs.reduce(
            (total, cost) => total + cost,
            0
        );
    }

    result(
        "Total Costs",
        calculateCosts(1000, 2500, 1500)
    );

    result(
        "Additional Costs",
        calculateCosts(500, 700, 1200, 900)
    );
}

// REST WITH OBJECT DESTRUCTURING

{
    const project = {
        name: "Astra Video Studio",
        budget: 15000,
        status: "Completed",
        priority: "High"
    };

    const { name, ...details } = project;

    result("Project Name", name);
    result("Remaining Properties", details);
}

/*
MENTAL MODEL:
Spread = UNPACK values.
Rest   = COLLECT values.

Same syntax (...), different purpose.
*/


// ============================================================
// 4. OPTIONAL CHAINING (?.)
// ============================================================

section("4. OPTIONAL CHAINING");

/*
Optional Chaining safely accesses nested properties.

If the value before ?. is null or undefined,
JavaScript returns undefined instead of throwing
a property-access TypeError.
*/

{
    const video1 = {
        title: "Rottweiler",
        analytics: {
            views: 150000,
            likes: 8500
        }
    };

    const video2 = {
        title: "Doberman"
    };

    result(
        "Video 1 Views",
        video1.analytics?.views
    );

    result(
        "Video 2 Views",
        video2.analytics?.views
    );

    result(
        "Missing Owner",
        video2.owner?.profile?.name
    );
}

/*
MENTAL MODEL:
?. = SAFE ACCESS

Particularly useful when working with APIs
that may return incomplete data.
*/


// ============================================================
// 5. NULLISH COALESCING (??)
// ============================================================

section("5. NULLISH COALESCING");

/*
?? provides a fallback only for:
- null
- undefined

|| provides a fallback for every falsy value,
including 0, false, "" and NaN.
*/

{
    const views = 0;
    const likes = null;
    const active = false;

    result("0 || 100", views || 100);
    result("0 ?? 100", views ?? 100);

    result("null ?? 500", likes ?? 500);

    result("false || true", active || true);
    result("false ?? true", active ?? true);
}

// OPTIONAL CHAINING + NULLISH COALESCING

{
    const video = {
        title: "Rottweiler"
    };

    const views = video.analytics?.views ?? 0;
    const likes = video.analytics?.likes ?? 0;

    result("Safe Views", views);
    result("Safe Likes", likes);
}

/*
MENTAL MODEL:
|| = fallback when LEFT is FALSY.
?? = fallback when LEFT is NULL or UNDEFINED.
?. = safely access a property.

0 ?? 100       -> 0
0 || 100       -> 100
false ?? true  -> false
false || true  -> true
*/


// ============================================================
// 6. NESTED OBJECT DESTRUCTURING
// ============================================================

section("6. NESTED DESTRUCTURING");

/*
Nested Destructuring extracts values from objects
inside other objects.
*/

{
    const store = {
        name: "TechStore",
        finances: {
            revenue: 45000,
            costs: 18000
        },
        products: {
            bestseller: {
                name: "Gaming Mouse",
                price: 250,
                sold: 120
            }
        }
    };

    const {
        name,
        finances: { revenue, costs },
        products: {
            bestseller: {
                price,
                sold
            }
        }
    } = store;

    const profit = revenue - costs;
    const bestsellerRevenue = price * sold;

    result("Store Name", name);
    result("Store Profit", profit);
    result("Bestseller Revenue", bestsellerRevenue);
}

/*
MENTAL MODEL:
Nested Destructuring follows the object's structure.

store -> finances -> revenue
store -> products -> bestseller -> price

Intermediate objects must exist for this syntax.
*/


// ============================================================
// 7. IMMUTABILITY
// ============================================================

section("7. IMMUTABILITY");

/*
Immutability means updating data without mutating
the original object or array.

const does NOT make object properties immutable.

Spread helps create updated copies.
*/

{
    const project = {
        name: "Astra Video Studio",
        status: "In Progress",
        analytics: {
            views: 25000,
            likes: 1500,
            comments: 300
        },
        tags: ["AI", "Video", "Editing"]
    };

    const updatedProject = {
        ...project,
        status: "Completed",
        analytics: {
            ...project.analytics,
            views: 50000,
            likes: 3000
        },
        tags: [
            ...project.tags,
            "Automation"
        ]
    };

    result("Original Project", project);
    result("Updated Project", updatedProject);

    result(
        "Original Views",
        project.analytics.views
    );

    result(
        "Updated Views",
        updatedProject.analytics.views
    );

    result(
        "Same Object?",
        project === updatedProject
    );
}

/*
IMPORTANT:
Spread creates a SHALLOW COPY.

When updating nested data, create copies
at every level that needs to change.

Never mutate nested objects through shared references
if you want to preserve the original data.
*/


// ============================================================
// 8. FINAL MENTAL MODEL
// ============================================================

section("8. FINAL MENTAL MODEL");

console.log(`
1. DESTRUCTURING
   Extract properties into variables.

2. SPREAD (...)
   Unpack arrays and object properties.

3. REST (...)
   Collect multiple values into one structure.

4. OPTIONAL CHAINING (?.)
   Safely access potentially missing properties.

5. NULLISH COALESCING (??)
   Provide defaults for null and undefined.

6. NESTED DESTRUCTURING
   Extract values from nested objects.

7. IMMUTABILITY
   Update data without changing the original.
`);


// ============================================================
// DAY 08 COMPLETE
// ============================================================

console.log(
    colors.green +
    "\n========================================" +
    "\n       DAY 08 COMPLETE ✅" +
    "\n========================================" +
    colors.reset
);

console.log(
    colors.magenta +
    "\nNEXT: DAY 09 — ASYNCHRONOUS JAVASCRIPT" +
    colors.reset
);

// ============================================================
// PINKCODES — END OF DAY 08
// ============================================================
