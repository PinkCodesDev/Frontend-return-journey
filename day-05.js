
'use strict';

// ============================================================
// PINKCODES - JAVASCRIPT DAY 5
// SCOPE • BLOCK SCOPE • LEXICAL SCOPE
// SCOPE CHAIN • CLOSURES • PRIVATE STATE
// FUNDAMENTALS • DEBUGGING • MENTAL MODEL
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
    blue: "\x1b[34m"
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
// 1. SCOPE BASICS
// ============================================================

section("1. SCOPE BASICS");

{
    const companyName = "PinkCodes";

    function showCompany() {
        return companyName;
    }

    console.log("Company:", showCompany());
}

/*
SCOPE determines where a variable can be accessed.

A function can access variables from its outer scope.

Variables declared inside a function cannot
normally be accessed outside that function.

MAIN IDEA:

Scope controls variable visibility.
*/


// ============================================================
// 2. FUNCTION SCOPE
// ============================================================

section("2. FUNCTION SCOPE");

{
    function calculateSalary(hours, rate) {
        const salary = hours * rate;

        return salary;
    }

    const result = calculateSalary(40, 120);

    console.log("Salary:", result);

    // console.log(salary);
    // ReferenceError: salary is not defined
}

/*
FUNCTION SCOPE:

A variable declared inside a function
belongs to that function's local scope.

EXAMPLE:

const salary = hours * rate;

salary cannot be accessed directly
outside calculateSalary().

return sends its VALUE outside.

It does not expose the local variable.
*/


// ============================================================
// 3. BLOCK SCOPE
// ============================================================

section("3. BLOCK SCOPE");

{
    let salary = 6000;
    const experience = 3;

    if (experience >= 2) {
        const bonus = 2000;

        salary += bonus;
    }

    console.log("Final salary:", salary);

    // console.log(bonus);
    // ReferenceError: bonus is not defined
}

/*
BLOCK SCOPE refers to variables declared
inside blocks defined by {}.

let and const respect block scope.

EXAMPLE:

if (true) {
    const bonus = 2000;
}

bonus is not accessible outside this block.

IMPORTANT:

salary was declared outside the if block.

Therefore we can modify it inside the block
and access its updated value afterward.
*/


// ============================================================
// 4. CONST VS LET VS VAR
// ============================================================

section("4. CONST VS LET VS VAR");

{
    const developerName = "Alan";

    let developerSalary = 6000;

    developerSalary = 8000;

    console.log("Developer:", developerName);
    console.log("Salary:", developerSalary);

    if (true) {
        var oldVariable = "Old JavaScript";
    }

    console.log("VAR:", oldVariable);
}

/*
CONST:

Cannot be reassigned.
Respects block scope.

LET:

Can be reassigned.
Respects block scope.

VAR:

Can be reassigned.
Does not respect ordinary block scope.
Has function scope when declared in a function.

IMPORTANT:

const does NOT make an object immutable.

EXAMPLE:

const user = { name: "Alan" };

user.name = "Anna";  // Allowed

BEST PRACTICE:

Use const by default.
Use let when reassignment is necessary.
Avoid var in modern JavaScript.
*/


// ============================================================
// 5. LEXICAL SCOPE
// ============================================================

section("5. LEXICAL SCOPE");

{
    const companyName = "PinkCodes";

    function createTeam(managerName) {
        const bonus = 2000;

        function createDeveloper(name, salary) {
            const finalSalary = salary + bonus;

            return `${name} works for ${managerName} at ${companyName} and earns ${finalSalary} PLN`;
        }

        return createDeveloper("Anna", 6000);
    }

    console.log(createTeam("Alan"));
}

/*
LEXICAL SCOPE means a function can access
variables from the place where it was defined.

createDeveloper() can access:

name          -> its own parameter
salary        -> its own parameter
finalSalary   -> its own variable
bonus         -> outer function variable
managerName   -> outer function parameter
companyName   -> surrounding scope

IMPORTANT:

A function's lexical scope depends on
WHERE IT WAS DEFINED.

Not where it was called.
*/


// ============================================================
// 6. SCOPE CHAIN
// ============================================================

section("6. SCOPE CHAIN");

{
    const company = "PinkCodes";

    function outerFunction() {
        const manager = "Alan";

        function innerFunction() {
            const developer = "Anna";

            return `${developer} - ${manager} - ${company}`;
        }

        return innerFunction();
    }

    console.log(outerFunction());
}

/*
SCOPE CHAIN is the process of searching
for variables through surrounding scopes.

SEARCH ORDER:

1. Current function scope
2. Outer function scope
3. Next surrounding scope
4. Continue until the outermost scope

If JavaScript cannot find a variable:

ReferenceError: variable is not defined

IMPORTANT:

Inner functions can access outer variables.

Outer functions cannot directly access
variables declared only inside inner functions.
*/


// ============================================================
// 7. VARIABLE SHADOWING
// ============================================================

section("7. VARIABLE SHADOWING");

{
    const developer = "Alan";

    function showDeveloper() {
        const developer = "Anna";

        return developer;
    }

    console.log("Inside:", showDeveloper());
    console.log("Outside:", developer);
}

/*
VARIABLE SHADOWING occurs when an inner scope
declares a variable with the same name
as a variable in an outer scope.

JavaScript uses the closest available variable.

INSIDE FUNCTION:

developer -> Anna

OUTSIDE FUNCTION:

developer -> Alan

The outer variable is not overwritten.
*/


// ============================================================
// 8. CLOSURE BASICS
// ============================================================

section("8. CLOSURE BASICS");

{
    function createCounter() {
        let count = 0;

        function increment() {
            count += 1;

            return count;
        }

        return increment;
    }

    const counter = createCounter();

    console.log("Counter:", counter());
    console.log("Counter:", counter());
    console.log("Counter:", counter());
}

/*
A CLOSURE allows a function to retain access
to variables from its surrounding lexical scope.

createCounter() is called ONCE.

It creates:

let count = 0;

Then it returns the increment function.

The increment function remembers count
even after createCounter() has finished.

RESULT:

1
2
3

IMPORTANT:

count does NOT reset on every counter() call.

This is one of the main uses of Closures.
*/


// ============================================================
// 9. RETURN FUNCTION VS FUNCTION RESULT
// ============================================================

section("9. RETURN FUNCTION VS RESULT");

{
    function createAdder() {
        function addTen(number) {
            return number + 10;
        }

        return addTen;
    }

    const adder = createAdder();

    console.log("First:", adder(5));
    console.log("Second:", adder(20));
}

/*
VERY IMPORTANT DIFFERENCE:

return addTen;

Returns the FUNCTION itself.

return addTen(5);

CALLS the function immediately
and returns its result.

EXAMPLE:

const adder = createAdder();

adder now stores the addTen function.

adder(5) executes that function.

MAIN RULE:

functionName   -> FUNCTION REFERENCE

functionName() -> FUNCTION CALL

Functions are values in JavaScript.
They can be stored, passed and returned.
*/


// ============================================================
// 10. INDEPENDENT CLOSURES
// ============================================================

section("10. INDEPENDENT CLOSURES");

{
    function createRevenueTracker() {
        let totalRevenue = 0;

        function addRevenue(amount) {
            totalRevenue += amount;

            return totalRevenue;
        }

        return addRevenue;
    }

    const trackerA = createRevenueTracker();
    const trackerB = createRevenueTracker();

    console.log("A:", trackerA(1000));
    console.log("A:", trackerA(2000));
    console.log("B:", trackerB(500));
    console.log("A:", trackerA(1000));
}

/*
RESULT:

A: 1000
A: 3000
B: 500
A: 4000

WHY?

Each call to createRevenueTracker()
creates its OWN totalRevenue variable.

trackerA remembers its own value.

trackerB remembers its own value.

These trackers do NOT share state.

IMPORTANT RULE:

NEW FACTORY CALL -> NEW STATE

SAME RETURNED FUNCTION -> REMEMBERED STATE
*/


// ============================================================
// 11. CLOSURES WITH MULTIPLE METHODS
// ============================================================

section("11. CLOSURES WITH MULTIPLE METHODS");

{
    function createWallet(owner) {
        let balance = 0;

        function deposit(amount) {
            balance += amount;

            return balance;
        }

        function withdraw(amount) {
            balance -= amount;

            return balance;
        }

        function getBalance() {
            return `${owner}: ${balance} PLN`;
        }

        return {
            deposit,
            withdraw,
            getBalance
        };
    }

    const alanWallet = createWallet("Alan");
    const annaWallet = createWallet("Anna");

    alanWallet.deposit(1000);
    alanWallet.deposit(500);
    alanWallet.withdraw(200);

    annaWallet.deposit(3000);

    console.log(alanWallet.getBalance());
    console.log(annaWallet.getBalance());
}

/*
A CLOSURE can be shared by multiple functions.

deposit()
withdraw()
getBalance()

All three functions access the SAME balance
inside their own wallet.

The outer function returns an OBJECT
containing these methods.

IMPORTANT:

balance is not directly exposed
as a property of the returned object.

alanWallet.balance -> undefined

But the methods can access it.

This pattern is useful for PRIVATE STATE.
*/


// ============================================================
// 12. COMMON MISTAKES & DEBUGGING
// ============================================================

section("12. COMMON MISTAKES & DEBUGGING");

{
    function createWrongCounter() {
        function increment() {
            let count = 0;

            count += 1;

            return count;
        }

        return increment;
    }

    const wrongCounter = createWrongCounter();

    console.log("Wrong counter:", wrongCounter());
    console.log("Wrong counter:", wrongCounter());
}

/*
MISTAKE 1 - RESETTING STATE

Output:

1
1

WHY?

count is declared INSIDE increment().

Every call creates a NEW count = 0.

To preserve state, move count
to the outer function.


MISTAKE 2 - MISSING RETURN

function example() {
    const result = 100;
}

example() returns undefined.

The function must return result
if the caller needs that value.


MISTAKE 3 - WRONG RETURN TYPE

return addRevenue;

Returns a function.

return { addRevenue };

Returns an object containing a function.

CALLING:

const tracker = createTracker();

If a function is returned:

tracker(1000);

If an object is returned:

tracker.addRevenue(1000);


MISTAKE 4 - WRONG BLOCK SCOPE

if (true) {
    const bonus = 2000;
}

// console.log(bonus);

ReferenceError because bonus exists
only inside the if block.


MISTAKE 5 - CLOSING FUNCTION TOO EARLY

function example() {
    const salary = 6000;
}

return salary; // WRONG

The return must be INSIDE the function.


DEBUGGING CHECKLIST:

1. Where is the variable declared?

2. Which function owns this variable?

3. Is the variable inside or outside a block?

4. Am I returning a value or a function?

5. Does this function remember its state?

6. Am I creating a new tracker by mistake?

7. Are my curly braces in the correct places?
*/


// ============================================================
// 13. DAY 5 MENTAL MODEL
// ============================================================

section("13. DAY 5 MENTAL MODEL");

console.log(`

SCOPE          -> WHERE CAN I ACCESS A VARIABLE?

FUNCTION SCOPE -> VARIABLE BELONGS TO A FUNCTION

BLOCK SCOPE    -> LET AND CONST RESPECT {}

CONST          -> CANNOT BE REASSIGNED

LET            -> CAN BE REASSIGNED

VAR            -> OLD FUNCTION-SCOPED DECLARATION

LEXICAL SCOPE  -> WHERE WAS THE FUNCTION DEFINED?

SCOPE CHAIN    -> SEARCH CURRENT AND OUTER SCOPES

SHADOWING      -> INNER VARIABLE HIDES OUTER VARIABLE

CLOSURE        -> FUNCTION REMEMBERS OUTER VARIABLES

PRIVATE STATE  -> DATA ACCESSED THROUGH METHODS

RETURN VALUE   -> SEND A VALUE BACK

RETURN FUNCTION -> SEND A FUNCTION BACK

NEW FACTORY CALL -> NEW INDEPENDENT STATE

SAME CLOSURE   -> PREVIOUS STATE IS PRESERVED

`);


// ============================================================
// 14. MOST IMPORTANT CLOSURE RULE
// ============================================================

section("14. MOST IMPORTANT CLOSURE RULE");

console.log(`

createCounter()
      |
      v
CREATE count = 0
      |
      v
CREATE increment()
      |
      v
return increment
      |
      v
STORE FUNCTION IN VARIABLE
      |
      v
counter()
      |
      v
UPDATE REMEMBERED count
      |
      v
return UPDATED VALUE
      |
      v
NEXT counter() CALL
      |
      v
USE PREVIOUS count


THE GOLDEN RULE:

A closure does not copy the current value
and forget everything else.

It retains access to the variables
from its lexical environment.

Each new factory invocation can create
a separate environment with independent state.

`);


// ============================================================
// 15. DAY 5 COMPLETE
// ============================================================

section("15. DAY 5 COMPLETE");

console.log(`

✅ Scope basics

✅ Function Scope

✅ Block Scope

✅ const, let and var

✅ Lexical Scope

✅ Scope Chain

✅ Variable Shadowing

✅ Closure fundamentals

✅ Returning functions

✅ Independent Closures

✅ Private State

✅ Multiple methods sharing state

✅ Common Scope mistakes

✅ Closure debugging

✅ Scope & Closure Mental Model

`);

console.log(
    `${colors.green}============================================================`
);

console.log("JAVASCRIPT DAY 5 COMPLETE");

console.log(
    `============================================================${colors.reset}`
);

console.log(
    `${colors.magenta}PinkCodes - Frontend Return Journey 🚀${colors.reset}\n`
);
