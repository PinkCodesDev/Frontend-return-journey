// ======================================================
// DAY 1 — JAVASCRIPT FUNDAMENTALS
// PinkCodes — Frontend Return Journey
// ======================================================


// ======================================================
// 1. CONSOLE.LOG()
// ======================================================

console.log("\n--- 1. CONSOLE.LOG ---");

console.log("Hello, PinkCodes!");
console.log("JavaScript Day 1");


// ======================================================
// 2. VARIABLES — CONST / LET
// ======================================================

console.log("\n--- 2. VARIABLES ---");

{
    const name = "Alan";
    let age = 27;

    console.log(name);
    console.log(age);

    age = 28;

    console.log(age);
}

// const → domyślny wybór
// let   → jeśli wartość będzie ponownie przypisana


// ======================================================
// 3. DATA TYPES
// ======================================================

console.log("\n--- 3. DATA TYPES ---");

{
    const username = "PinkCodes";     // string
    const followers = 0;              // number
    const isDeveloper = true;         // boolean
    const firstClient = null;         // null
    let currentProject;               // undefined

    console.log(username, typeof username);
    console.log(followers, typeof followers);
    console.log(isDeveloper, typeof isDeveloper);
    console.log(firstClient, typeof firstClient);
    console.log(currentProject, typeof currentProject);
}

/*
string
number
boolean
null
undefined

UWAGA:
typeof null → "object"

To stare dziwactwo JavaScriptu.
*/


// ======================================================
// 4. MATHEMATICAL OPERATORS
// ======================================================

console.log("\n--- 4. OPERATORS ---");

{
    const a = 10;
    const b = 3;

    console.log("Addition:", a + b);
    console.log("Subtraction:", a - b);
    console.log("Multiplication:", a * b);
    console.log("Division:", a / b);
    console.log("Modulo:", a % b);
}


// Praktyczny przykład:

{
    const hourlyRate = 50;
    const hoursWorked = 8;

    const dailyPay = hourlyRate * hoursWorked;
    const fiveDayPay = dailyPay * 5;

    console.log(`Daily pay: ${dailyPay}`);
    console.log(`Five day pay: ${fiveDayPay}`);
    console.log(`400 % 3 = ${dailyPay % 3}`);
}


// % = reszta z dzielenia
// NIE procent.

// 10% z 400:

{
    const price = 400;
    const tenPercent = price * 0.10;

    console.log(`10% of ${price} = ${tenPercent}`);
}


// ======================================================
// 5. COMPARISONS
// ======================================================

console.log("\n--- 5. COMPARISONS ---");

{
    const age = 27;
    const requiredAge = 18;
    const username = "PinkCodes";

    console.log(age >= requiredAge);       // true
    console.log(age === 27);               // true
    console.log(username === "PinkCodes"); // true
    console.log(username !== "Kamil");     // true

    console.log(27 === "27");              // false
}


// === sprawdza wartość ORAZ typ

console.log(typeof 27);    // number
console.log(typeof "27");  // string


// ======================================================
// 6. TEMPLATE LITERALS
// ======================================================

console.log("\n--- 6. TEMPLATE LITERALS ---");

{
    const name = "Alan";
    const age = 27;
    const stack = "JavaScript / TypeScript / React";

    console.log(
        `My name is ${name}, I'm ${age} years old and I'm learning ${stack}.`
    );

    console.log(`Next year I will be ${age + 1}.`);
}


// Template literal:
//
// `tekst ${zmienna}`
//
// używa BACKTICKÓW:
//
// ` `
//
// a nie:
// " "
// ' '


// ======================================================
// 7. IF / ELSE IF / ELSE
// ======================================================

console.log("\n--- 7. CONDITIONS ---");

{
    const hoursLearned = 5;

    if (hoursLearned >= 6) {
        console.log("Big coding day");
    } else if (hoursLearned >= 3) {
        console.log("Solid progress");
    } else {
        console.log("Keep going");
    }
}


// Pierwszy pasujący warunek kończy cały łańcuch.


// ======================================================
// 8. LOGICAL OPERATORS
// ======================================================

console.log("\n--- 8. LOGICAL OPERATORS ---");

{
    const age = 27;
    const hasExperience = true;
    const knowsReact = false;

    // && = AND
    // oba warunki muszą być true

    if (age >= 18 && hasExperience) {
        console.log("Can apply");
    }

    // || = OR
    // wystarczy jeden true

    if (knowsReact || hasExperience) {
        console.log("Has useful skills");
    }

    // ! = NOT
    // odwraca boolean

    if (!knowsReact) {
        console.log("Needs React practice");
    }
}


// true  → !true  = false
// false → !false = true


// ======================================================
// 9. FUNCTIONS
// ======================================================

console.log("\n--- 9. FUNCTIONS ---");

{
    function introduce(name, role) {
        console.log(
            `Hello, my name is ${name} and I am a ${role}.`
        );
    }

    introduce("Alan", "Frontend Developer");
    introduce("PinkCodes", "JavaScript Developer");
}


// name / role
// → PARAMETERS

// "Alan" / "Frontend Developer"
// → ARGUMENTS


// ======================================================
// 10. RETURN
// ======================================================

console.log("\n--- 10. RETURN ---");

{
    function calculatePay(hourlyRate, hoursWorked) {
        return hourlyRate * hoursWorked;
    }

    const dailyPay = calculatePay(50, 8);

    console.log(`Daily pay: ${dailyPay}`);
}


// Schemat:
//
// calculatePay(50, 8)
//          ↓
//       50 * 8
//          ↓
//     return 400
//          ↓
// dailyPay = 400


// Funkcja bez return:

{
    function test() {
        console.log("Function executed");
    }

    const result = test();

    console.log("Returned value:", result);
}

// result → undefined


// ======================================================
// 11. ARROW FUNCTIONS
// ======================================================

console.log("\n--- 11. ARROW FUNCTIONS ---");


// Klasyczna funkcja:

{
    function add(a, b) {
        return a + b;
    }

    console.log(add(5, 10));
}


// Arrow function:

{
    const add = (a, b) => {
        return a + b;
    };

    console.log(add(5, 10));
}


// Arrow function — implicit return:

{
    const add = (a, b) => a + b;

    console.log(add(5, 10));
}


// Praktyczny przykład:

{
    const calculatePay = (hourlyRate, hoursWorked) =>
        hourlyRate * hoursWorked;

    const dailyPay = calculatePay(50, 8);

    console.log(`Arrow function daily pay: ${dailyPay}`);
}


// ======================================================
// 12. ARRAYS
// ======================================================

console.log("\n--- 12. ARRAYS ---");

{
    const technologies = [
        "JavaScript",
        "TypeScript",
        "React"
    ];

    console.log(technologies);

    console.log("First:", technologies[0]);
    console.log("Second:", technologies[1]);
    console.log("Third:", technologies[2]);

    console.log("Length:", technologies.length);

    technologies.push("Next.js");

    console.log("After push:", technologies);
    console.log("New length:", technologies.length);
}


// Index:
// 0 → pierwszy element
// 1 → drugi
// 2 → trzeci


// .push() dodaje element na koniec:

{
    const numbers = [1, 2, 3];

    const newLength = numbers.push(4);

    console.log(numbers);
    console.log(newLength);
}


// push() zwraca NOWĄ DŁUGOŚĆ tablicy.


// ======================================================
// 13. CONST + ARRAYS
// ======================================================

console.log("\n--- 13. CONST + ARRAYS ---");

{
    const technologies = ["JavaScript"];

    technologies.push("React");

    console.log(technologies);
}


// To działa mimo const.
//
// const blokuje:
//
// technologies = ["Python"];
//
// czyli przypisanie NOWEJ tablicy.
//
// Nie blokuje zmieniania zawartości istniejącej tablicy.


// ======================================================
// 14. PYTHON VS JAVASCRIPT
// ======================================================

console.log("\n--- 14. PYTHON VS JAVASCRIPT ---");

/*

PYTHON:

daily_pay = 400


JAVASCRIPT:

const dailyPay = 400;


PYTHON:
snake_case

JAVASCRIPT:
camelCase

*/


// ======================================================
// FINAL BOSS
// PINKCODES PROFILE CHECKER
// ======================================================

console.log("\n--- FINAL BOSS ---");

const name = "PinkCodes";
const age = 27;
const experienceYears = 3;
const isLearningReact = true;

const technologies = [
    "JavaScript",
    "TypeScript",
    "React"
];


function getDeveloperStatus(
    age,
    experienceYears,
    isLearningReact
) {
    if (age >= 18 && experienceYears >= 2) {
        return "Ready to return to tech";
    } else if (isLearningReact) {
        return "Learning and building with React";
    } else {
        return "Keep learning and improving";
    }
}


const developerStatus = getDeveloperStatus(
    age,
    experienceYears,
    isLearningReact
);


technologies.push("Next.js");


console.log(`
My name is ${name}.
I'm ${age} years old.
I have ${experienceYears} years of experience.

Technologies:
${technologies}

Number of technologies:
${technologies.length}

Status:
${developerStatus}
`);


// ======================================================
// DAY 1 COMPLETE ✅
// ======================================================

console.log(`
==============================
DAY 1 COMPLETE ✅
==============================

✅ Node.js
✅ console.log()
✅ const / let
✅ Data types
✅ typeof
✅ Operators
✅ Modulo
✅ Comparisons
✅ Template literals
✅ if / else if / else
✅ Logical operators
✅ Functions
✅ Parameters
✅ Arguments
✅ return
✅ Arrow functions
✅ Arrays
✅ Indexes
✅ .length
✅ .push()
✅ Final Boss

==============================
NEXT → DAY 2
==============================
`);