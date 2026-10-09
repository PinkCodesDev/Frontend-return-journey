// ============================================================
// PINKCODES - JAVASCRIPT DAY 2
// ARRAYS • LOOPS • FILTER • MAP • DATA FLOW
// ============================================================


// ------------------------------------------------------------
// COLORS - only for prettier terminal output
// ------------------------------------------------------------

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
// 1. ARRAYS - QUICK REMINDER
// ============================================================

section("1. ARRAYS - QUICK REMINDER");

{
    const technologies = [
        "JavaScript",
        "React",
        "TypeScript"
    ];

    console.log("Whole array:", technologies);

    console.log("First element:");
    console.log(technologies[0]);

    console.log("Second element:");
    console.log(technologies[1]);

    console.log("Last element:");
    console.log(technologies[technologies.length - 1]);

    console.log("Array length:");
    console.log(technologies.length);
}

/*

ARRAY INDEXES START FROM 0

["JavaScript", "React", "TypeScript"]

      0          1          2


.length tells us HOW MANY elements exist.

technologies.length
→ 3


Last element:

technologies[technologies.length - 1]

3 - 1
→ index 2
→ "TypeScript"

*/


// ============================================================
// 2. PUSH()
// ============================================================

section("2. PUSH()");

{
    const languages = [
        "JavaScript",
        "TypeScript"
    ];

    console.log("Before push:");
    console.log(languages);

    languages.push("React");

    console.log("After push:");
    console.log(languages);
}

/*

push()

Adds element to the END of an array.

BEFORE:

["JavaScript", "TypeScript"]

push("React")

AFTER:

["JavaScript", "TypeScript", "React"]

*/


// ============================================================
// 3. POP()
// ============================================================

section("3. POP()");

{
    const languages = [
        "JavaScript",
        "TypeScript",
        "React"
    ];

    const removedLanguage = languages.pop();

    console.log("Removed:");
    console.log(removedLanguage);

    console.log("Array after pop:");
    console.log(languages);
}

/*

pop()

Removes the LAST element.

IMPORTANT:

pop() also RETURNS the removed value.

*/


// ============================================================
// 4. UNSHIFT()
// ============================================================

section("4. UNSHIFT()");

{
    const frameworks = [
        "React",
        "Vue"
    ];

    frameworks.unshift("Angular");

    console.log(frameworks);
}

/*

unshift()

Adds element to the BEGINNING.

*/


// ============================================================
// 5. SHIFT()
// ============================================================

section("5. SHIFT()");

{
    const frameworks = [
        "React",
        "Vue",
        "Angular"
    ];

    const removedFramework = frameworks.shift();

    console.log("Removed:");
    console.log(removedFramework);

    console.log("Remaining:");
    console.log(frameworks);
}

/*

shift()

Removes FIRST element.

Like pop(), it RETURNS the removed value.

*/


// ============================================================
// 6. INCLUDES()
// ============================================================

section("6. INCLUDES()");

{
    const tools = [
        "VS Code",
        "Git",
        "GitHub"
    ];

    const hasGit = tools.includes("Git");
    const hasReact = tools.includes("React");

    console.log("Has Git:", hasGit);
    console.log("Has React:", hasReact);
}

/*

includes()

ASKS:

"Does this value exist inside the array?"


Returns:

true
or
false


Example:

tools.includes("Git")
→ true

tools.includes("React")
→ false

*/


// ============================================================
// 7. INCLUDES() + IF + PUSH()
// ============================================================

section("7. INCLUDES() + IF + PUSH()");

{
    const skills = [
        "JavaScript",
        "React"
    ];

    const typeScriptExists =
        skills.includes("TypeScript");

    if (!typeScriptExists) {
        skills.push("TypeScript");
    }

    console.log(skills);
}

/*

FLOW:

skills
↓
includes("TypeScript")
↓
false
↓
!false = true
↓
push("TypeScript")

*/


// ============================================================
// 8. INDEXOF()
// ============================================================

section("8. INDEXOF()");

{
    const languages = [
        "JavaScript",
        "Python",
        "React",
        "TypeScript"
    ];

    const reactIndex =
        languages.indexOf("React");

    const javaIndex =
        languages.indexOf("Java");

    console.log("React index:", reactIndex);
    console.log("Java index:", javaIndex);
}

/*

indexOf()

Returns INDEX of element.

React:

["JavaScript", "Python", "React", "TypeScript"]

       0          1        2          3

→ React index = 2


If value does NOT exist:

indexOf()
→ -1

*/


// ============================================================
// 9. CLASSIC FOR LOOP
// ============================================================

section("9. CLASSIC FOR LOOP");

{
    const languages = [
        "JavaScript",
        "TypeScript",
        "Python"
    ];

    for (
        let i = 0;
        i < languages.length;
        i++
    ) {
        console.log(
            `Index ${i}: ${languages[i]}`
        );
    }
}

/*

for loop:

for (
    START;
    CONDITION;
    CHANGE
)

Example:

let i = 0

start at:

0


i < languages.length

continue while condition is true


i++

after each loop:

i = i + 1


IMPORTANT:

i is already the INDEX.

No need to use indexOf().

*/


// ============================================================
// 10. FOR...OF
// ============================================================

section("10. FOR...OF");

{
    const technologies = [
        "JavaScript",
        "React",
        "TypeScript"
    ];

    for (const technology of technologies) {
        console.log(technology);
    }
}

/*

for...of

Used when we care about VALUES.

Each loop:

technology = current array element


FIRST LOOP:

technology = "JavaScript"

SECOND:

technology = "React"

THIRD:

technology = "TypeScript"

*/


// ============================================================
// 11. WHILE LOOP
// ============================================================

section("11. WHILE LOOP");

{
    let number = 1;

    while (number <= 3) {
        console.log(
            `Number: ${number}`
        );

        number++;
    }
}

/*

while()

Runs WHILE condition is true.

IMPORTANT:

Something inside must eventually
make the condition false.

Otherwise:

INFINITE LOOP.

*/


// ============================================================
// 12. BREAK
// ============================================================

section("12. BREAK");

{
    const languages = [
        "JavaScript",
        "Python",
        "TypeScript",
        "Java"
    ];

    for (const language of languages) {

        console.log(
            `Checking: ${language}`
        );

        if (language === "TypeScript") {
            console.log(
                "TypeScript found!"
            );

            break;
        }
    }
}

/*

break

STOPS the entire loop immediately.

After break:

nothing else inside that loop runs.

*/


// ============================================================
// 13. CONTINUE
// ============================================================

section("13. CONTINUE");

{
    const frameworks = [
        "React",
        "Vue",
        "Angular",
        "Next.js"
    ];

    for (const framework of frameworks) {

        if (framework === "Vue") {
            continue;
        }

        console.log(framework);
    }
}

/*

continue

Does NOT stop entire loop.

It skips CURRENT iteration
and continues to the next one.


React
→ printed

Vue
→ continue
→ skipped

Angular
→ printed

Next.js
→ printed

*/


// ============================================================
// 14. FUNCTION + ARRAY
// ============================================================

section("14. FUNCTION + ARRAY");

{
    const skills = [
        "JavaScript",
        "React",
        "TypeScript"
    ];

    function getLastSkill(array) {
        return array[array.length - 1];
    }

    const lastSkill =
        getLastSkill(skills);

    console.log(
        "Last skill:",
        lastSkill
    );
}

/*

skills goes INTO function:

getLastSkill(skills)

Inside function:

array = skills


array[array.length - 1]

returns:

"TypeScript"


return sends value OUTSIDE function.

*/


// ============================================================
// 15. FOREACH()
// ============================================================

section("15. FOREACH()");

{
    const technologies = [
        "JavaScript",
        "React",
        "TypeScript"
    ];

    technologies.forEach(
        technology => {
            console.log(
                `Technology: ${technology}`
            );
        }
    );
}

/*

forEach()

Runs code for EACH element.


IMPORTANT:

forEach() is mainly used
to DO something.

Example:

console.log()
send something
change something


It is NOT mainly used
to create a transformed array.

For that:

map()

*/


// ============================================================
// 16. MAP()
// ============================================================

section("16. MAP()");

{
    const numbers = [
        5,
        10,
        15,
        20
    ];

    const doubledNumbers =
        numbers.map(
            number => number * 2
        );

    console.log(
        "Original:",
        numbers
    );

    console.log(
        "Doubled:",
        doubledNumbers
    );
}

/*

map()

TRANSFORMS EVERY element.

Original:

[5, 10, 15, 20]

Each element:

5  → 10
10 → 20
15 → 30
20 → 40

New array:

[10, 20, 30, 40]


IMPORTANT:

map() CREATES A NEW ARRAY.

*/


// ============================================================
// 17. ARROW FUNCTION INSIDE MAP()
// ============================================================

section("17. ARROW FUNCTION INSIDE MAP()");

{
    const names = [
        "alan",
        "anna",
        "kamil"
    ];

    const upperCaseNames =
        names.map(
            name =>
                name.toUpperCase()
        );

    console.log(
        upperCaseNames
    );
}

/*

THIS:

name => name.toUpperCase()

MEANS:

name => {
    return name.toUpperCase();
}


=>   = arrow function

>=   = greater than or equal


DO NOT CONFUSE THEM :)

*/


// ============================================================
// 18. MAP() + TEMPLATE LITERAL
// ============================================================

section("18. MAP() + TEMPLATE LITERAL");

{
    const names = [
        "alan",
        "anna",
        "adam"
    ];

    const formattedNames =
        names.map(
            name =>
                `USER: ${name.toUpperCase()}`
        );

    console.log(
        formattedNames
    );
}

/*

map() can create completely
new strings.

"alan"

↓

"ALAN"

↓

"USER: ALAN"

*/


// ============================================================
// 19. FILTER()
// ============================================================

section("19. FILTER()");

{
    const prices = [
        50,
        120,
        30,
        200,
        90
    ];

    const expensivePrices =
        prices.filter(
            price => price >= 100
        );

    console.log(
        expensivePrices
    );
}

/*

filter()

SELECTS elements.

It asks a TRUE/FALSE question
for every element.


50 >= 100
→ false
→ removed


120 >= 100
→ true
→ stays


30 >= 100
→ false


200 >= 100
→ true


90 >= 100
→ false


RESULT:

[120, 200]

*/


// ============================================================
// 20. FILTER() WITH OR
// ============================================================

section("20. FILTER() WITH OR");

{
    const roles = [
        "Frontend Developer",
        "Backend Developer",
        "Designer",
        "React Developer",
        "Project Manager"
    ];

    const devRoles =
        roles.filter(
            role =>
                role === "Frontend Developer" ||
                role === "Backend Developer" ||
                role === "React Developer"
        );

    console.log(devRoles);
}

/*

|| = OR / LUB

Keep role if it is:

Frontend Developer

OR

Backend Developer

OR

React Developer


IMPORTANT:

THIS WOULD BE WRONG:

role === "Frontend Developer" &&
role === "React Developer"


One string cannot be BOTH
different values at the same time.

*/


// ============================================================
// 21. FILTER() VS MAP()
// ============================================================

section("21. FILTER() VS MAP()");

console.log(`
FILTER:
Which elements should stay?

MAP:
How should every element change?
`);

/*

FILTER:

["JS", "Python", "React"]

↓

choose JS and React

↓

["JS", "React"]



MAP:

["JS", "React"]

↓

transform every element

↓

["TECH: JS", "TECH: REACT"]

*/


// ============================================================
// 22. FILTER() + MAP()
// ============================================================

section("22. FILTER() + MAP()");

{
    const technologies = [
        "JavaScript",
        "Python",
        "React",
        "Java",
        "TypeScript"
    ];

    const frontendTechnologies =
        technologies.filter(
            technology =>
                technology === "JavaScript" ||
                technology === "React" ||
                technology === "TypeScript"
        );

    const upperCaseTechnologies =
        frontendTechnologies.map(
            technology =>
                technology.toUpperCase()
        );

    console.log(
        "Filtered:",
        frontendTechnologies
    );

    console.log(
        "Mapped:",
        upperCaseTechnologies
    );
}

/*

THIS IS VERY IMPORTANT:

technologies
↓ filter
frontendTechnologies
↓ map
upperCaseTechnologies


DO NOT DO:

technologies
↓ filter
frontendTechnologies

then accidentally:

technologies.map(...)

because you are going BACK
to original data.

*/


// ============================================================
// 23. DATA FLOW
// ============================================================

section("23. DATA FLOW");

console.log(`
DATA
 ↓
CHECK
 ↓
SELECT
 ↓
TRANSFORM
 ↓
RETURN
 ↓
DISPLAY
`);

/*

A useful mental model:

includes()
→ CHECK


filter()
→ SELECT


map()
→ TRANSFORM


return
→ SEND RESULT OUTSIDE FUNCTION


for...of / console.log()
→ DISPLAY

*/


// ============================================================
// 24. FUNCTION + RETURN
// ============================================================

section("24. FUNCTION + RETURN");

{
    function addTax(price) {

        const finalPrice =
            price * 1.23;

        return finalPrice;
    }

    const finalPrice =
        addTax(100);

    console.log(
        finalPrice
    );
}

/*

FUNCTION:

addTax(100)

↓

price = 100

↓

finalPrice = 123

↓

return 123

↓

outside:

finalPrice = 123

*/


// ============================================================
// 25. FUNCTION + FILTER + RETURN
// ============================================================

section("25. FUNCTION + FILTER + RETURN");

{
    const numbers = [
        20,
        80,
        120,
        40,
        200
    ];

    function getBigNumbers(array) {

        const bigNumbers =
            array.filter(
                number =>
                    number >= 100
            );

        return bigNumbers;
    }

    const bigNumbers =
        getBigNumbers(numbers);

    console.log(
        bigNumbers
    );
}

/*

IMPORTANT:

function getBigNumbers(array)

Inside function:

USE:

array.filter(...)

NOT:

numbers.filter(...)


Why?

Because ARRAY is the parameter
given to the function.

*/


// ============================================================
// 26. FUNCTION + FILTER + MAP + RETURN
// ============================================================

section("26. FUNCTION + FILTER + MAP + RETURN");

{
    const numbers = [
        10,
        25,
        40,
        5,
        60
    ];

    function getLargeDoubledNumbers(array) {

        const largeDoubledNumbers =
            array
                .filter(
                    number =>
                        number >= 25
                )
                .map(
                    number =>
                        number * 2
                );

        return largeDoubledNumbers;
    }

    const result =
        getLargeDoubledNumbers(numbers);

    console.log(result);
}

/*

FLOW:

numbers

↓

function(numbers)

↓

array

↓

filter

[25, 40, 60]

↓

map

[50, 80, 120]

↓

return

↓

result

*/


// ============================================================
// 27. STRING FILTER + MAP + RETURN
// ============================================================

section("27. STRING FILTER + MAP + RETURN");

{
    const technologies = [
        "JavaScript",
        "CSS",
        "React",
        "HTML",
        "TypeScript"
    ];

    function getLongTechnologies(array) {

        const longTechnologies =
            array.filter(
                tech =>
                    tech.length >= 6
            );

        const formattedTechnologies =
            longTechnologies.map(
                tech =>
                    `TECH: ${tech.toUpperCase()}`
            );

        return formattedTechnologies;
    }

    const result =
        getLongTechnologies(
            technologies
        );

    console.log(result);
}

/*

JavaScript
→ length >= 6
→ stays

CSS
→ too short
→ removed

React
→ length 5
→ removed

HTML
→ removed

TypeScript
→ stays


Then map():

JavaScript
→ TECH: JAVASCRIPT

TypeScript
→ TECH: TYPESCRIPT

*/


// ============================================================
// 28. FOR...OF + RESULT ARRAY
// ============================================================

section("28. FOR...OF + RESULT ARRAY");

{
    const skills = [
        "SKILL: JAVASCRIPT",
        "SKILL: REACT",
        "SKILL: TYPESCRIPT"
    ];

    for (const skill of skills) {
        console.log(skill);
    }

    console.log(
        `Total skills: ${skills.length}`
    );
}

/*

IMPORTANT:

Things that should happen
FOR EVERY ITEM:

go INSIDE loop.


for (...) {
    console.log(skill);
}


Things that should happen
ONLY ONCE:

go OUTSIDE loop.


console.log(
    `Total: ${skills.length}`
);

*/


// ============================================================
// 29. COMMON ERROR - WRONG ARRAY
// ============================================================

section("29. COMMON ERROR - WRONG ARRAY");

console.log(`
MOST IMPORTANT DAY 2 LESSON:

Always know WHICH ARRAY
currently contains your data.
`);

/*

Example:

const filtered =
    original.filter(...);

const formatted =
    filtered.map(...);


NOT:

const filtered =
    original.filter(...);

const formatted =
    original.map(...);


That would ignore the filtered result.

*/


// ============================================================
// 30. FULL DATA PIPELINE
// ============================================================

section("30. FULL DATA PIPELINE");

{
    const courses = [
        "JavaScript",
        "CSS",
        "React",
        "HTML"
    ];


    // CHECK

    const typeScriptExists =
        courses.includes("TypeScript");


    // ADD IF MISSING

    if (!typeScriptExists) {
        courses.push("TypeScript");
    }


    // PROCESS DATA

    function getFrontendCourses(array) {

        const frontendCourses =
            array
                .filter(
                    course =>
                        course === "JavaScript" ||
                        course === "React" ||
                        course === "TypeScript"
                )
                .map(
                    course =>
                        `COURSE: ${course.toUpperCase()}`
                );

        return frontendCourses;
    }


    // RECEIVE RETURNED ARRAY

    const frontendCourses =
        getFrontendCourses(courses);


    // DISPLAY EACH ELEMENT

    for (
        const course of frontendCourses
    ) {
        console.log(course);
    }


    // DISPLAY COUNT ONCE

    console.log(
        `Total courses: ${frontendCourses.length}`
    );
}


// ============================================================
// 31. FINAL BOSS - DAY 2
// ============================================================

section("31. FINAL BOSS - DAY 2");

{
    const skills = [
        "JavaScript",
        "CSS",
        "Python",
        "React",
        "HTML"
    ];


    // CHECK IF TYPESCRIPT EXISTS

    const typeScriptExists =
        skills.includes("TypeScript");


    // ADD TYPESCRIPT IF MISSING

    if (!typeScriptExists) {
        skills.push("TypeScript");
    }


    // CREATE FUNCTION

    function getJobSkills(array) {

        const jobSkills =
            array
                .filter(
                    skill =>
                        skill === "JavaScript" ||
                        skill === "React" ||
                        skill === "TypeScript"
                )
                .map(
                    skill =>
                        `SKILL: ${skill.toUpperCase()}`
                );

        return jobSkills;
    }


    // GET FUNCTION RESULT

    const jobSkills =
        getJobSkills(skills);


    // DISPLAY EVERY JOB SKILL

    for (const skill of jobSkills) {
        console.log(skill);
    }


    // DISPLAY NUMBER OF JOB SKILLS

    console.log(
        `Total job skills: ${jobSkills.length}`
    );


    // FIND REACT IN ORIGINAL ARRAY

    const reactIndex =
        skills.indexOf("React");

    console.log(
        `React index: ${reactIndex}`
    );
}


// ============================================================
// 32. FINAL DAY 2 MENTAL MODEL
// ============================================================

section("32. FINAL DAY 2 MENTAL MODEL");

console.log(`
push()      → ADD TO END

pop()       → REMOVE FROM END

unshift()   → ADD TO START

shift()     → REMOVE FROM START

includes()  → DOES IT EXIST?

indexOf()   → WHERE IS IT?

filter()    → WHICH ELEMENTS STAY?

map()       → HOW SHOULD THEY CHANGE?

forEach()   → DO SOMETHING FOR EACH

for...of    → LOOP THROUGH VALUES

break       → STOP LOOP

continue    → SKIP CURRENT LOOP

return      → SEND VALUE OUT OF FUNCTION
`);


// ============================================================
// 33. MOST IMPORTANT DATA FLOW RULE
// ============================================================

section("33. MOST IMPORTANT DATA FLOW RULE");

console.log(`
ORIGINAL DATA
     ↓
   FILTER
     ↓
FILTERED DATA
     ↓
    MAP
     ↓
FORMATTED DATA
     ↓
   RETURN
     ↓
FINAL RESULT
`);

/*

THE BIGGEST DAY 2 LESSON:

Do not only ask:

"What method do I need?"


Also ask:

"WHICH VARIABLE currently contains
the data I want to work with?"


Example:

const filtered =
    array.filter(...);

const formatted =
    filtered.map(...);


The next step should usually use
the RESULT of the previous step.

*/


// ============================================================
// DAY 2 COMPLETE
// ============================================================

console.log(
    `\n${colors.green}============================================================`
);

console.log(
    "✅ JAVASCRIPT DAY 2 COMPLETE"
);

console.log(
    `============================================================${colors.reset}`
);


console.log(`
✅ Arrays deeper
✅ push()
✅ pop()
✅ shift()
✅ unshift()
✅ includes()
✅ indexOf()
✅ classic for
✅ for...of
✅ while
✅ break
✅ continue
✅ arrays + functions
✅ forEach()
✅ map()
✅ filter()
✅ filter() + map()
✅ function + return
✅ function + filter()
✅ function + filter() + map() + return
✅ data flow
✅ Final Boss
`);

console.log(
    `${colors.magenta}PinkCodes - Frontend Return Journey 🚀${colors.reset}\n`
);