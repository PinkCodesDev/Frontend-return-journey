
'use strict';

// ============================================================
// PINKCODES - JAVASCRIPT DAY 3
// OBJECTS • DESTRUCTURING • SPREAD • REST • DATA FLOW
// PRACTICAL EXERCISES • FINAL BOSSES
// ============================================================

// ============================================================
// TERMINAL COLORS & SECTION HELPER
// ============================================================

const colors = {
    reset: "\x1b[0m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    cyan: "\x1b[36m",
    magenta: "\x1b[35m",
    blue: "\x1b[34m",
};

function section(title) {
    console.log(
        `\n${colors.cyan}============================================================`
    );
    console.log(title);
    console.log(
        `============================================================${colors.reset}`
    );
}

// ============================================================
// 1. OBJECT BASICS
// ============================================================

section("1. OBJECT BASICS");

{
    const developer = {
        name: "Alan",
        age: 27,
        stack: "JavaScript",
        experience: 3,
        active: true
    };

    console.log("Whole object:", developer);
    console.log("Name:", developer.name);
    console.log("Experience:", developer.experience);
    console.log("Active:", developer.active);
}

/*
An OBJECT stores related properties.

Each property has a KEY and a VALUE:

name: "Alan"
experience: 3

Objects can hold:
- strings
- numbers
- booleans
- arrays
- other objects
- functions

Unlike an array, we usually access object data by
PROPERTY NAME rather than its numeric position.
*/

// ============================================================
// 2. DOT NOTATION AND BRACKET NOTATION
// ============================================================

section("2. DOT AND BRACKET NOTATION");

{
    const user = {
        name: "Julia",
        city: "Warszawa",
        role: "Developer",
        "favorite language": "JavaScript"
    };

    console.log("Dot:", user.name);
    console.log("Bracket:", user["city"]);

    const selectedProperty = "role";
    console.log("Dynamic property:", user[selectedProperty]);

    console.log("Property with spaces:", user["favorite language"]);
}

/*
DOT:
user.name

BRACKET:
user["name"]

DYNAMIC ACCESS:
const key = "city";
user[key];

IMPORTANT:
user.key would look for a property literally named "key".
user[key] uses the VALUE stored in variable key.
*/

// ============================================================
// 3. ADDING AND MODIFYING PROPERTIES
// ============================================================

section("3. ADDING AND MODIFYING PROPERTIES");

{
    const employee = {
        name: "Adam",
        salary: 7000
    };

    employee.salary = 9000;
    employee.department = "Frontend";

    console.log(employee);
}

/*
const employee = {...}

We cannot reassign employee to a different object,
but we CAN change properties inside the object.

employee.salary = 9000;      -> update
employee.department = "..."; -> add
*/

// ============================================================
// 4. DELETE PROPERTY
// ============================================================

section("4. DELETE PROPERTY");

{
    const user = {
        name: "Alan",
        city: "Białystok",
        passwordHint: "example"
    };

    delete user.passwordHint;

    console.log(user);
}

/*
delete user.passwordHint;

Removes the property from the object.

Accessing a missing property normally returns undefined.

NOTE:
Never store actual passwords or secret credentials
in example source code or public repositories.
*/

// ============================================================
// 5. NESTED OBJECTS
// ============================================================

section("5. NESTED OBJECTS");

{
    const developer = {
        name: "Alan",
        company: {
            name: "PinkCodes",
            location: {
                city: "Białystok",
                country: "Poland"
            }
        }
    };

    console.log("Company:", developer.company.name);
    console.log("City:", developer.company.location.city);
}

/*
A property may contain another object.

developer
   |
   company
      |
      location
         |
         city

Each dot takes us one level deeper.
*/

// ============================================================
// 6. ARRAYS INSIDE OBJECTS
// ============================================================

section("6. ARRAYS INSIDE OBJECTS");

{
    const student = {
        name: "Alan",
        skills: ["HTML", "CSS", "JavaScript"]
    };

    console.log("All skills:", student.skills);
    console.log("First skill:", student.skills[0]);

    student.skills.push("React");

    console.log("Updated skills:", student.skills);
}

/*
student.skills is an ARRAY.

student.skills[0] accesses the first element.

Array methods can be used on an array
stored inside an object.
*/

// ============================================================
// 7. OBJECTS INSIDE ARRAYS
// ============================================================

section("7. OBJECTS INSIDE ARRAYS");

{
    const developers = [
        { name: "Alan", stack: "React", experience: 3 },
        { name: "Kamil", stack: "Vue", experience: 1 },
        { name: "Anna", stack: "React", experience: 4 }
    ];

    console.log("First developer:", developers[0]);
    console.log("First name:", developers[0].name);
    console.log("Second stack:", developers[1].stack);
}

/*
developers -> array
developers[0] -> first object
developers[0].name -> property inside first object

Very common structure in applications and APIs.
*/

// ============================================================
// 8. FOR...OF WITH OBJECTS
// ============================================================

section("8. FOR...OF WITH OBJECTS");

{
    const developers = [
        { name: "Alan", experience: 3 },
        { name: "Kamil", experience: 1 },
        { name: "Anna", experience: 4 }
    ];

    for (const developer of developers) {
        console.log(
            `${developer.name} | ${developer.experience} years`
        );
    }
}

/*
for...of iterates through ARRAY ELEMENTS.

Here each element is an object.

Every iteration:
developer = current object
*/

// ============================================================
// 9. FILTER OBJECTS
// ============================================================

section("9. FILTER OBJECTS");

{
    const developers = [
        { name: "Alan", stack: "React", experience: 3 },
        { name: "Kamil", stack: "Vue", experience: 1 },
        { name: "Anna", stack: "React", experience: 4 }
    ];

    const qualifiedDevelopers = developers.filter(
        developer =>
            developer.stack === "React" &&
            developer.experience >= 3
    );

    console.log(qualifiedDevelopers);
}

/*
filter() creates a NEW ARRAY containing elements
that pass the test.

&& means ALL conditions must be true.

>= means greater than OR equal to.
<= means less than OR equal to.

Examples:

experience >= 3 -> at least 3 years
salary <= 11000 -> maximum 11000 PLN
progress < 100  -> less than 100%
*/

// ============================================================
// 10. MAP OBJECTS
// ============================================================

section("10. MAP OBJECTS");

{
    const developers = [
        { name: "Alan", stack: "React" },
        { name: "Julia", stack: "Vue" }
    ];

    const formattedDevelopers = developers.map(
        developer => ({
            label: `${developer.name.toUpperCase()} - ${developer.stack.toUpperCase()}`,
            active: true
        })
    );

    console.log(formattedDevelopers);
}

/*
map() transforms elements and returns a NEW ARRAY.

To return an object directly from an arrow function,
wrap the object literal in parentheses:

developer => ({
    label: developer.name
})

IMPORTANT:
After map(), the new objects may have different keys.

Original:
{ name, stack }

New:
{ label, active }

The new object DOES NOT automatically keep
all original properties.
*/

// ============================================================
// 11. FILTER + MAP + DATA FLOW
// ============================================================

section("11. FILTER + MAP + DATA FLOW");

{
    const developers = [
        { name: "Alan", stack: "React", experience: 3 },
        { name: "Kamil", stack: "Vue", experience: 1 },
        { name: "Anna", stack: "React", experience: 4 }
    ];

    const result = developers
        .filter(
            developer =>
                developer.stack === "React" &&
                developer.experience >= 3
        )
        .map(developer => ({
            label: `${developer.name.toUpperCase()} - ${developer.stack.toUpperCase()}`,
            experience: developer.experience
        }));

    console.log(result);
}

/*
ORIGINAL DATA
     |
     v
  filter()
     |
     v
SELECTED DATA
     |
     v
   map()
     |
     v
NEW OBJECT STRUCTURE
     |
     v
FINAL RESULT

VERY IMPORTANT:
Always know what data each variable contains.
*/

// ============================================================
// 12. OBJECT DESTRUCTURING
// ============================================================

section("12. OBJECT DESTRUCTURING");

{
    const developer = {
        name: "Alan",
        experience: 3,
        city: "Białystok"
    };

    const { name, experience, city } = developer;

    console.log(name);
    console.log(experience);
    console.log(city);
}

/*
Instead of:

const name = developer.name;
const city = developer.city;

We can write:

const { name, city } = developer;

The names inside {} must match existing properties.

Missing properties give undefined.
*/

// ============================================================
// 13. DESTRUCTURING AN OBJECT FROM AN ARRAY
// ============================================================

section("13. DESTRUCTURING FROM AN ARRAY");

{
    const developers = [
        { label: "ALAN - REACT", experience: 3, city: "Białystok" },
        { label: "ANNA - REACT", experience: 4, city: "Kraków" }
    ];

    const { label, experience, city } = developers[0];

    console.log(
        `First developer: ${label} / ${experience} / ${city}`
    );
}

/*
developers[0] gives us the first object.

Destructuring extracts properties
from that object.

If developers is empty,
developers[0] is undefined.

Destructuring undefined causes an error,
so check for an existing first element when
processing potentially empty data.
*/

// ============================================================
// 14. ARRAY DESTRUCTURING
// ============================================================

section("14. ARRAY DESTRUCTURING");

{
    const technologies = [
        "JavaScript",
        "React",
        "TypeScript"
    ];

    const [first, second, third] = technologies;

    console.log(first);
    console.log(second);
    console.log(third);
}

/*
Object destructuring uses PROPERTY NAMES.

Array destructuring uses POSITIONS.
*/

// ============================================================
// 15. OBJECT SPREAD
// ============================================================

section("15. OBJECT SPREAD");

{
    const developer = {
        name: "Alan",
        stack: "JavaScript",
        experience: 3
    };

    const updatedDeveloper = {
        ...developer,
        stack: "React",
        city: "Białystok"
    };

    console.log("Original:", developer);
    console.log("Updated copy:", updatedDeveloper);
}

/*
...developer copies properties into a NEW OBJECT.

Properties written after the spread can overwrite
properties copied from the original.

Spread creates a SHALLOW copy.
Nested objects are not deeply cloned.
*/

// ============================================================
// 16. ARRAY SPREAD
// ============================================================

section("16. ARRAY SPREAD");

{
    const frontend = ["HTML", "CSS"];
    const programming = ["JavaScript", "TypeScript"];

    const fullStack = [
        ...frontend,
        ...programming,
        "React"
    ];

    console.log(fullStack);
}

/*
Spread expands arrays into their elements.

It is often used to combine arrays
without modifying the originals.
*/

// ============================================================
// 17. REST SYNTAX WITH OBJECTS
// ============================================================

section("17. REST SYNTAX WITH OBJECTS");

{
    const developer = {
        name: "Alan",
        stack: "React",
        experience: 3,
        city: "Białystok"
    };

    const { name, ...details } = developer;

    console.log("Name:", name);
    console.log("Remaining details:", details);
}

/*
REST collects the remaining properties.

SPREAD = expands / copies
REST   = collects

The syntax looks the same: ...
The behavior depends on the context.
*/

// ============================================================
// 18. REST SYNTAX WITH ARRAYS
// ============================================================

section("18. REST SYNTAX WITH ARRAYS");

{
    const technologies = [
        "JavaScript",
        "React",
        "TypeScript",
        "Node.js"
    ];

    const [first, ...remaining] = technologies;

    console.log("First:", first);
    console.log("Remaining:", remaining);
}

// ============================================================
// 19. OBJECT.KEYS()
// ============================================================

section("19. OBJECT.KEYS()");

{
    const developer = {
        name: "Alan",
        stack: "React",
        experience: 3
    };

    const keys = Object.keys(developer);

    console.log(keys);
}

/*
Object.keys() returns an array of
an object's own enumerable property names.
*/

// ============================================================
// 20. OBJECT.VALUES()
// ============================================================

section("20. OBJECT.VALUES()");

{
    const developer = {
        name: "Alan",
        stack: "React",
        experience: 3
    };

    const values = Object.values(developer);

    console.log(values);
}

/*
Object.values() returns an array of
the object's own enumerable property values.
*/

// ============================================================
// 21. OBJECT.ENTRIES()
// ============================================================

section("21. OBJECT.ENTRIES()");

{
    const developer = {
        name: "Alan",
        stack: "React",
        experience: 3
    };

    const entries = Object.entries(developer);

    console.log(entries);

    for (const [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
}

/*
Object.entries() returns pairs:

[
    ["name", "Alan"],
    ["stack", "React"],
    ["experience", 3]
]

Each pair is an array.

We use array destructuring:
const [key, value] = pair;
*/

// ============================================================
// 22. FUNCTION WITH OBJECT
// ============================================================

section("22. FUNCTION WITH OBJECT");

{
    function createDeveloper(name, stack, experience) {
        return {
            name,
            stack,
            experience
        };
    }

    const developer = createDeveloper(
        "Alan",
        "React",
        3
    );

    console.log(developer);
}

/*
Object property shorthand:

return { name, stack, experience };

means:

return {
    name: name,
    stack: stack,
    experience: experience
};

return sends the result outside the function.
*/

// ============================================================
// 23. FUNCTION + FILTER + MAP + RETURN
// ============================================================

section("23. FUNCTION + FILTER + MAP + RETURN");

{
    const developers = [
        { name: "Alan", stack: "React", experience: 3 },
        { name: "Kamil", stack: "Vue", experience: 1 },
        { name: "Anna", stack: "React", experience: 4 }
    ];

    function getSeniorReactDevelopers(array) {
        return array
            .filter(developer =>
                developer.stack === "React" &&
                developer.experience >= 3
            )
            .map(developer => ({
                label: `${developer.name.toUpperCase()} - ${developer.stack.toUpperCase()}`,
                experience: developer.experience
            }));
    }

    const seniorReactDevelopers =
        getSeniorReactDevelopers(developers);

    console.log(seniorReactDevelopers);
}

/*
Pass data into the function.
Filter it.
Transform it.
Return the new array.
Save it in a variable.

DO NOT repeat expensive or unnecessary
function calls if the result can be reused.
*/

// ============================================================
// 24. ORIGINAL FINAL BOSS - REACT DEVELOPERS
// ============================================================

section("24. ORIGINAL FINAL BOSS - REACT DEVELOPERS");

{
    const developers = [
        {
            name: "Alan",
            stack: "React",
            experience: 3,
            city: "Białystok"
        },
        {
            name: "Kamil",
            stack: "Vue",
            experience: 1,
            city: "Warszawa"
        },
        {
            name: "Anna",
            stack: "React",
            experience: 4,
            city: "Kraków"
        },
        {
            name: "Robert",
            stack: "Angular",
            experience: 5,
            city: "Gdańsk"
        }
    ];

    function getSeniorReactDevelopers(array) {
        return array
            .filter(developer =>
                developer.stack === "React" &&
                developer.experience >= 3
            )
            .map(developer => ({
                label: `${developer.name.toUpperCase()} - ${developer.stack.toUpperCase()}`,
                experience: developer.experience,
                city: developer.city
            }));
    }

    const seniorReactDevelopers =
        getSeniorReactDevelopers(developers);

    for (const developer of seniorReactDevelopers) {
        console.log(
            `${developer.label} | ${developer.experience} years | ${developer.city}`
        );
    }

    console.log(
        `Total senior React developers: ${seniorReactDevelopers.length}`
    );

    const { label, experience, city } =
        seniorReactDevelopers[0];

    console.log(
        `First developer: ${label} / ${experience} / ${city}`
    );
}

/*
EXERCISE:

1. Filter React developers.
2. Require at least 3 years.
3. Create a new object with label, experience, city.
4. Print each result.
5. Count the results.
6. Destructure the first result.

MAIN LESSON:
The original object has name and stack.
The mapped object has label.

Use the NEW properties after map().
*/

// ============================================================
// 25. FINAL BOSS 1 - RECRUITMENT SYSTEM
// ============================================================

section("25. FINAL BOSS 1 - RECRUITMENT SYSTEM");

{
    const candidates = [
        { name: "Alan", stack: "React", experience: 3, salary: 9000, city: "Białystok" },
        { name: "Kamil", stack: "Vue", experience: 2, salary: 6500, city: "Warszawa" },
        { name: "Anna", stack: "React", experience: 5, salary: 14000, city: "Kraków" },
        { name: "Robert", stack: "Angular", experience: 4, salary: 11000, city: "Gdańsk" },
        { name: "Julia", stack: "React", experience: 4, salary: 10500, city: "Poznań" }
    ];

    function getReactCandidates(array) {
        return array
            .filter(candidate =>
                candidate.stack === "React" &&
                candidate.experience >= 3 &&
                candidate.salary <= 11000
            )
            .map(candidate => ({
                label: `${candidate.name.toUpperCase()} - ${candidate.stack.toUpperCase()}`,
                experience: candidate.experience,
                salary: candidate.salary,
                city: candidate.city
            }));
    }

    const qualifiedCandidates =
        getReactCandidates(candidates);

    for (const candidate of qualifiedCandidates) {
        console.log(
            `${candidate.label} | ${candidate.experience} years | ${candidate.salary} PLN | ${candidate.city}`
        );
    }

    console.log(
        `Total qualified candidates: ${qualifiedCandidates.length}`
    );

    const { label, salary, city } =
        qualifiedCandidates[0];

    console.log(
        `First candidate: ${label} / ${salary} PLN / ${city}`
    );
}

/*
REQUIREMENTS:

stack === "React"
experience >= 3
salary <= 11000

EXPECTED:
ALAN - REACT
JULIA - REACT

IMPORTANT:
"Maximum 11000" = <= 11000
not >= 11000.
*/

// ============================================================
// 26. FINAL BOSS 2 - EMPLOYEE MANAGEMENT
// ============================================================

section("26. FINAL BOSS 2 - EMPLOYEE MANAGEMENT");

{
    const employees = [
        { name: "Adam", department: "Frontend", experience: 4, salary: 12000, city: "Warszawa" },
        { name: "Julia", department: "Backend", experience: 2, salary: 8000, city: "Kraków" },
        { name: "Marta", department: "Frontend", experience: 5, salary: 15000, city: "Gdańsk" },
        { name: "Piotr", department: "Frontend", experience: 3, salary: 9500, city: "Poznań" },
        { name: "Kamil", department: "DevOps", experience: 6, salary: 18000, city: "Wrocław" },
        { name: "Ola", department: "Frontend", experience: 4, salary: 10500, city: "Białystok" }
    ];

    function getQualifiedEmployees(array) {
        return array
            .filter(employee =>
                employee.department === "Frontend" &&
                employee.experience >= 3 &&
                employee.salary <= 12000
            )
            .map(employee => ({
                label: `${employee.name.toUpperCase()} - ${employee.department.toUpperCase()}`,
                experience: employee.experience,
                salary: employee.salary,
                city: employee.city
            }));
    }

    const qualifiedEmployees =
        getQualifiedEmployees(employees);

    for (const employee of qualifiedEmployees) {
        console.log(
            `${employee.label} | ${employee.experience} years | ${employee.salary} PLN | ${employee.city}`
        );
    }

    console.log(
        `Total qualified employees: ${qualifiedEmployees.length}`
    );

    const { label, salary, city } =
        qualifiedEmployees[0];

    console.log(
        `First employee: ${label} / ${salary} PLN / ${city}`
    );
}

/*
REQUIREMENTS:

department === "Frontend"
experience >= 3
salary <= 12000

EXPECTED QUALIFIED:
ADAM, PIOTR, OLA

MAIN LESSON:
Every required condition must be included.
Do not forget department while checking
experience and salary.
*/

// ============================================================
// 27. FINAL BOSS 3 - ORDER MANAGEMENT
// ============================================================

section("27. FINAL BOSS 3 - ORDER MANAGEMENT");

{
    const orders = [
        { id: 101, customer: "Adam", category: "Electronics", total: 1500, status: "Completed", city: "Warszawa" },
        { id: 102, customer: "Julia", category: "Clothing", total: 350, status: "Pending", city: "Kraków" },
        { id: 103, customer: "Marta", category: "Electronics", total: 2400, status: "Completed", city: "Gdańsk" },
        { id: 104, customer: "Piotr", category: "Electronics", total: 850, status: "Completed", city: "Poznań" },
        { id: 105, customer: "Kamil", category: "Furniture", total: 3200, status: "Completed", city: "Wrocław" },
        { id: 106, customer: "Ola", category: "Electronics", total: 1800, status: "Pending", city: "Białystok" },
        { id: 107, customer: "Karolina", category: "Electronics", total: 1100, status: "Completed", city: "Łódź" }
    ];

    function getQualifiedOrders(array) {
        return array
            .filter(order =>
                order.category === "Electronics" &&
                order.status === "Completed" &&
                order.total >= 1000
            )
            .map(order => ({
                label: `${order.customer.toUpperCase()} - #${order.id}`,
                total: order.total,
                city: order.city,
                status: order.status
            }));
    }

    const qualifiedOrders =
        getQualifiedOrders(orders);

    for (const order of qualifiedOrders) {
        console.log(
            `${order.label} | ${order.total} PLN | ${order.city} | ${order.status}`
        );
    }

    console.log(
        `Total qualified orders: ${qualifiedOrders.length}`
    );

    const { label, total, city } = qualifiedOrders[0];

    console.log(
        `First order: ${label} / ${total} PLN / ${city}`
    );
}

/*
REQUIREMENTS:

category === "Electronics"
status === "Completed"
total >= 1000

EXPECTED:
ADAM - #101
MARTA - #103
KAROLINA - #107

MAIN LESSON:
"Minimum 1000" = >= 1000.

If filter() returns [],
array[0] is undefined.

Always understand why a result is empty
before trying to destructure it.
*/

// ============================================================
// 28. FINAL BOSS 4 - PRODUCT INVENTORY SYSTEM
// ============================================================

section("28. FINAL BOSS 4 - PRODUCT INVENTORY");

{
    const products = [
        { id: 1, name: "Laptop Lenovo", category: "Electronics", price: 4200, stock: 12, active: true },
        { id: 2, name: "Biurko IKEA", category: "Furniture", price: 899, stock: 8, active: true },
        { id: 3, name: "Monitor Samsung", category: "Electronics", price: 1350, stock: 0, active: true },
        { id: 4, name: "Klawiatura Logitech", category: "Electronics", price: 450, stock: 25, active: true },
        { id: 5, name: "Laptop ASUS", category: "Electronics", price: 5800, stock: 6, active: false },
        { id: 6, name: "Monitor LG", category: "Electronics", price: 1750, stock: 15, active: true },
        { id: 7, name: "Fotel Gamingowy", category: "Furniture", price: 1299, stock: 10, active: true }
    ];

    function getAvailableProducts(array) {
        return array
            .filter(product =>
                product.category === "Electronics" &&
                product.price >= 1000 &&
                product.stock > 0 &&
                product.active === true
            )
            .map(product => ({
                label: product.name.toUpperCase(),
                price: product.price,
                stock: product.stock,
                availability: "Available"
            }));
    }

    const availableProducts =
        getAvailableProducts(products);

    for (const product of availableProducts) {
        console.log(
            `${product.label} | ${product.price} PLN | Stock: ${product.stock} | ${product.availability}`
        );
    }

    console.log(
        `Total available products: ${availableProducts.length}`
    );

    const { label, price, stock } = availableProducts[0];

    console.log(
        `First product: ${label} / ${price} PLN / ${stock} pcs`
    );
}

/*
REQUIREMENTS:

category === "Electronics"
price >= 1000
stock > 0
active === true

EXPECTED:
LAPTOP LENOVO
MONITOR LG

MAIN LESSONS:

stock > 0 excludes sold-out products.

active === true selects active products.

"Available" is a STRING.
true is a BOOLEAN.

Both are valid JavaScript values,
but the required output structure matters.
*/

// ============================================================
// 29. ULTIMATE FINAL BOSS - IT PROJECT MANAGEMENT
// ============================================================

section("29. ULTIMATE FINAL BOSS - PROJECT MANAGEMENT");

{
    // Fictional project and client data for learning.

    const projects = [
        { id: 101, name: "DevFlow", client: "Google", category: "Web", budget: 25000, progress: 80, active: true, developer: { name: "Alan", city: "Białystok" } },
        { id: 102, name: "MobileBank", client: "Revolut", category: "Mobile", budget: 45000, progress: 60, active: true, developer: { name: "Julia", city: "Warszawa" } },
        { id: 103, name: "ShopMaster", client: "Shopify", category: "Web", budget: 18000, progress: 100, active: false, developer: { name: "Kamil", city: "Kraków" } },
        { id: 104, name: "AnalyticsPro", client: "Microsoft", category: "Web", budget: 32000, progress: 50, active: true, developer: { name: "Anna", city: "Gdańsk" } },
        { id: 105, name: "QuickLanding", client: "Startup", category: "Web", budget: 6000, progress: 30, active: true, developer: { name: "Piotr", city: "Poznań" } },
        { id: 106, name: "CloudPanel", client: "Amazon", category: "Web", budget: 40000, progress: 90, active: true, developer: { name: "Ola", city: "Wrocław" } },
        { id: 107, name: "CRM System", client: "Salesforce", category: "Web", budget: 22000, progress: 100, active: true, developer: { name: "Robert", city: "Łódź" } }
    ];

    function getQualifiedProjects(array) {
        return array
            .filter(project =>
                project.category === "Web" &&
                project.budget >= 20000 &&
                project.active === true &&
                project.progress >= 50 &&
                project.progress < 100
            )
            .map(project => ({
                label: `${project.name.toUpperCase()} - #${project.id}`,
                client: project.client,
                budget: project.budget,
                progress: project.progress,
                developer: project.developer.name.toUpperCase(),
                city: project.developer.city
            }));
    }

    const qualifiedProjects =
        getQualifiedProjects(projects);

    for (const project of qualifiedProjects) {
        console.log(
            `${project.label} | ${project.client} | ${project.budget} PLN | ${project.progress}% | ${project.developer} (${project.city})`
        );
    }

    console.log(
        `Total qualified projects: ${qualifiedProjects.length}`
    );

    const projectNames = qualifiedProjects.map(
        project => project.label
    );

    console.log("Project names:", projectNames);

    const { label, budget, developer } =
        qualifiedProjects[0];

    console.log(
        `First project: ${label} / ${budget} PLN / ${developer}`
    );
}

/*
REQUIREMENTS:

category === "Web"
budget >= 20000
active === true
progress >= 50
progress < 100

Nested object:
project.developer.name
project.developer.city

RESULTS:
DEVFLOW - #101
ANALYTICSPRO - #104
CLOUDPANEL - #106

IMPORTANT:

projectNames is another transformed array,
created from qualifiedProjects.

qualifiedProjects:
[
    { label, client, budget, progress, developer, city },
    ...
]

projectNames:
[
    "DEVFLOW - #101",
    "ANALYTICSPRO - #104",
    "CLOUDPANEL - #106"
]

THE KEY LESSON:
Different arrays can contain different structures.

Always know which structure you are using.
*/

// ============================================================
// 30. COMMON MISTAKE - WRONG PROPERTY AFTER MAP
// ============================================================

section("30. COMMON MISTAKE - WRONG PROPERTY");

{
    const original = [
        { name: "Alan", stack: "React" }
    ];

    const transformed = original.map(person => ({
        label: `${person.name} - ${person.stack}`
    }));

    console.log("Correct:", transformed[0].label);
    console.log("Missing property:", transformed[0].name);
}

/*
Original object:
{ name, stack }

Transformed object:
{ label }

transformed[0].name -> undefined

DO NOT call:
transformed[0].name.toUpperCase()

That would throw a TypeError.

Use:
transformed[0].label
*/

// ============================================================
// 31. COMMON MISTAKE - EMPTY FILTER RESULT
// ============================================================

section("31. COMMON MISTAKE - EMPTY RESULT");

{
    const products = [
        { name: "Laptop", price: 5000 },
        { name: "Monitor", price: 1500 }
    ];

    const cheapProducts = products.filter(
        product => product.price < 100
    );

    console.log("Results:", cheapProducts);

    if (cheapProducts.length > 0) {
        const { name } = cheapProducts[0];
        console.log("First:", name);
    } else {
        console.log("No matching products found.");
    }
}

/*
filter() can return [].

When an array is empty:
array[0] -> undefined

Avoid destructuring array[0]
before making sure the element exists.
*/

// ============================================================
// 32. DAY 3 MENTAL MODEL
// ============================================================

section("32. DAY 3 MENTAL MODEL");

console.log(`
OBJECT          -> GROUP RELATED DATA

DOT NOTATION    -> object.property

BRACKET         -> object["property"]

NESTED OBJECT   -> object.address.city

ARRAY OF OBJECTS -> [{...}, {...}]

for...of        -> ITERATE OVER OBJECTS IN ARRAY

filter()        -> WHICH OBJECTS SHOULD STAY?

map()           -> HOW SHOULD OBJECTS CHANGE?

DESTRUCTURING   -> EXTRACT VALUES INTO VARIABLES

SPREAD          -> EXPAND / COPY VALUES

REST            -> COLLECT REMAINING VALUES

Object.keys()   -> PROPERTY NAMES

Object.values() -> PROPERTY VALUES

Object.entries()-> [KEY, VALUE] PAIRS

return          -> SEND RESULT OUT OF FUNCTION
`);

// ============================================================
// 33. MOST IMPORTANT DATA FLOW RULE
// ============================================================

section("33. MOST IMPORTANT DATA FLOW RULE");

console.log(`
ORIGINAL ARRAY
      |
      v
   filter()
      |
      v
FILTERED ARRAY
      |
      v
    map()
      |
      v
ARRAY OF NEW OBJECTS
      |
      v
   return
      |
      v
RESULT SAVED TO VARIABLE
      |
      +----> for...of
      |
      +----> .length
      |
      +----> destructuring
      |
      +----> another map()
`);

/*
THE BIGGEST DAY 3 LESSON:

Do not only ask:
"What method should I use?"

Ask:
"What data do I currently have?"
"What are its property names?"
"What data structure will the next step receive?"

This prevents:
- undefined properties
- incorrect destructuring
- unnecessary function calls
- wrong output formats
*/

// ============================================================
// 34. DAY 3 COMPLETE
// ============================================================

section("34. DAY 3 COMPLETE");

console.log(`
✅ Object basics
✅ Dot notation
✅ Bracket notation
✅ Add / update / delete properties
✅ Nested objects
✅ Arrays inside objects
✅ Objects inside arrays
✅ for...of with objects
✅ filter() on objects
✅ map() returning new objects
✅ filter() + map() chaining
✅ Object destructuring
✅ Array destructuring
✅ Spread for objects and arrays
✅ Rest syntax
✅ Object.keys()
✅ Object.values()
✅ Object.entries()
✅ Functions returning objects
✅ Functions returning processed arrays
✅ Original React Developers Final Boss
✅ Recruitment System Final Boss
✅ Employee Management Final Boss
✅ Order Management Final Boss
✅ Product Inventory Final Boss
✅ IT Project Management Ultimate Final Boss
✅ Data flow and debugging patterns
`);

console.log(
    `${colors.green}============================================================`
);

console.log("JAVASCRIPT DAY 3 COMPLETE");

console.log(
    `============================================================${colors.reset}`
);

console.log(
    `${colors.magenta}PinkCodes - Frontend Return Journey 🚀${colors.reset}\n`
);
