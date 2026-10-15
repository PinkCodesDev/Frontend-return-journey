
'use strict';

// ============================================================
// PINKCODES - JAVASCRIPT DAY 4
// FUNCTIONS • PARAMETERS • RETURN • CALLBACKS
// HIGHER-ORDER FUNCTIONS • FILTER • MAP • DATA FLOW
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
// 1. FUNCTION DECLARATION
// ============================================================

section("1. FUNCTION DECLARATION");

{
    function greetDeveloper(name) {
        return `Hello, ${name}!`;
    }

    console.log(greetDeveloper("Alan"));
    console.log(greetDeveloper("Anna"));
}

/*
A FUNCTION is a reusable block of code.

STRUCTURE:

function functionName(parameter) {
    return result;
}

A function does not execute automatically.
We must CALL it.

greetDeveloper("Alan");

BENEFITS:

- Reusable code
- Less repetition
- Easier debugging
- Better organization

MAIN IDEA:

Define a function once.
Call it whenever needed.
*/


// ============================================================
// 2. FUNCTION EXPRESSION
// ============================================================

section("2. FUNCTION EXPRESSION");

{
    const calculateBonus = function(salary) {
        return salary * 0.10;
    };

    console.log("Bonus:", calculateBonus(5000));
    console.log("Bonus:", calculateBonus(8000));
}

/*
A FUNCTION EXPRESSION stores a function in a variable.

DECLARATION:

function calculateBonus(salary) {
    return salary * 0.10;
}

EXPRESSION:

const calculateBonus = function(salary) {
    return salary * 0.10;
};

Both can be called with:

calculateBonus(5000);

IMPORTANT:

A function declaration is hoisted.

A function expression assigned to const
cannot be called before its initialization.

We will explore hoisting in Day 05.
*/


// ============================================================
// 3. PARAMETERS VS ARGUMENTS
// ============================================================

section("3. PARAMETERS VS ARGUMENTS");

{
    function calculateSalary(salary, bonus) {
        return salary + bonus;
    }

    const result = calculateSalary(5000, 1500);

    console.log("Final salary:", result);
}

/*
PARAMETERS:

salary
bonus

These are variables declared when
the function is DEFINED.

ARGUMENTS:

5000
1500

These are actual values provided
when the function is CALLED.

FLOW:

calculateSalary(5000, 1500)
          |
          v
salary = 5000
bonus  = 1500
          |
          v
return 6500

IMPORTANT:

Parameters receive values.
Arguments provide values.
*/


// ============================================================
// 4. DEFAULT PARAMETERS
// ============================================================

section("4. DEFAULT PARAMETERS");

{
    function calculateTotal(salary, bonus = 0) {
        return salary + bonus;
    }

    console.log(calculateTotal(5000));
    console.log(calculateTotal(5000, 1000));
}

/*
DEFAULT PARAMETERS provide fallback values.

bonus = 0

If no second argument is provided,
bonus receives 0.

RESULTS:

calculateTotal(5000)       -> 5000
calculateTotal(5000, 1000) -> 6000

A default parameter is also used when
the provided argument is undefined.

It is NOT used when the argument is null.
*/


// ============================================================
// 5. RETURN VS CONSOLE.LOG
// ============================================================

section("5. RETURN VS CONSOLE.LOG");

{
    function printSalary(salary) {
        console.log("Inside function:", salary);
    }

    function getSalary(salary) {
        return salary;
    }

    const result1 = printSalary(5000);
    const result2 = getSalary(5000);

    console.log("Result 1:", result1);
    console.log("Result 2:", result2);
}

/*
console.log() displays information.

return SENDS a result outside the function.

EXAMPLE:

function example() {
    console.log(5000);
}

Calling example() displays 5000,
but the function itself returns undefined.

WITH RETURN:

function example() {
    return 5000;
}

Now we can store the value:

const salary = example();

MAIN RULE:

console.log() = DISPLAY DATA
return        = PROVIDE DATA

Use return when another part of
the program needs the result.
*/


// ============================================================
// 6. RETURN STOPS FUNCTION EXECUTION
// ============================================================

section("6. RETURN STOPS EXECUTION");

{
    function checkNumber(number) {
        if (number < 0) {
            return "Negative number";
        }

        if (number === 0) {
            return "Zero";
        }

        return "Positive number";
    }

    console.log(checkNumber(-10));
    console.log(checkNumber(0));
    console.log(checkNumber(20));
}

/*
When return executes,
the current function immediately ends.

Example:

if (number < 0) {
    return "Negative number";
}

If the condition is true,
the remaining code is skipped.

IMPORTANT:

Only the executed return matters.

A function without an executed
return statement returns undefined.
*/


// ============================================================
// 7. EARLY RETURN
// ============================================================

section("7. EARLY RETURN");

{
    function checkDeveloperExperience(years) {
        if (years < 0) {
            return "Invalid experience";
        }

        if (years < 2) {
            return "Junior Developer";
        }

        if (years < 5) {
            return "Mid Developer";
        }

        return "Senior Developer";
    }

    console.log(checkDeveloperExperience(-1));
    console.log(checkDeveloperExperience(1));
    console.log(checkDeveloperExperience(3));
    console.log(checkDeveloperExperience(7));
}

/*
EARLY RETURN means ending a function
as soon as a condition is satisfied.

WHY USE IT?

- Cleaner code
- Fewer nested if statements
- Easier debugging
- Easier reading

Example:

if (invalidData) {
    return "Error";
}

The function stops before performing
unnecessary operations.

This is also called a GUARD CLAUSE
when it protects against invalid inputs.
*/


// ============================================================
// 8. FUNCTIONS RETURNING BOOLEANS
// ============================================================

section("8. BOOLEAN FUNCTIONS");

{
    function isAdult(age) {
        return age >= 18;
    }

    function hasEnoughExperience(years) {
        return years >= 2;
    }

    console.log("Adult:", isAdult(27));
    console.log("Adult:", isAdult(16));

    console.log("Experienced:", hasEnoughExperience(3));
    console.log("Experienced:", hasEnoughExperience(1));
}

/*
A function can return true or false.

COMPARISONS:

===  strictly equal
!==  strictly not equal
>    greater than
<    less than
>=   greater than or equal
<=   less than or equal

LOGICAL OPERATORS:

&&   AND
||   OR
!    NOT

Example:

return age >= 18;

The comparison already produces
a BOOLEAN value.

We do not need:

if (age >= 18) {
    return true;
} else {
    return false;
}

Both approaches work,
but the direct return is simpler.
*/


// ============================================================
// 9. FUNCTIONS CALLING OTHER FUNCTIONS
// ============================================================

section("9. FUNCTIONS CALLING FUNCTIONS");

{
    function calculateTax(amount) {
        return amount * 0.23;
    }

    function calculatePriceWithTax(amount) {
        const tax = calculateTax(amount);

        return amount + tax;
    }

    const total = calculatePriceWithTax(1000);

    console.log("Price with tax:", total);
}

/*
A function can call another function.

DATA FLOW:

calculatePriceWithTax(1000)
           |
           v
calculateTax(1000)
           |
           v
return 230
           |
           v
1000 + 230
           |
           v
return 1230

MAIN LESSON:

Each function has one responsibility.

calculateTax() calculates tax.

calculatePriceWithTax() combines
the original amount with the tax.

This makes the code reusable.
*/


// ============================================================
// 10. REUSABLE FUNCTIONS
// ============================================================

section("10. REUSABLE FUNCTIONS");

{
    function calculateHourlyCost(hours, rate) {
        return hours * rate;
    }

    const apiCost = calculateHourlyCost(20, 150);
    const uiCost = calculateHourlyCost(15, 120);
    const testCost = calculateHourlyCost(10, 100);

    console.log("API cost:", apiCost);
    console.log("UI cost:", uiCost);
    console.log("Testing cost:", testCost);
}

/*
WRITE ONCE, USE MANY TIMES.

Instead of repeating:

20 * 150
15 * 120
10 * 100

We create:

calculateHourlyCost(hours, rate)

BENEFITS:

- Less duplicated logic
- Easier code maintenance
- Consistent calculations

IMPORTANT:

A function should ideally perform
one clearly defined task.
*/


// ============================================================
// 11. FUNCTIONS AS VALUES
// ============================================================

section("11. FUNCTIONS AS VALUES");

{
    function doubleNumber(number) {
        return number * 2;
    }

    const operation = doubleNumber;

    console.log(operation(10));
    console.log(doubleNumber(10));
}

/*
In JavaScript, functions are VALUES.

We can:

- Store them in variables
- Pass them as arguments
- Return them from other functions

VERY IMPORTANT DIFFERENCE:

doubleNumber

This refers to the function itself.

doubleNumber(10)

This CALLS the function and returns 20.

COMPARE:

const operation = doubleNumber;

operation is now a reference to the function.

const result = doubleNumber(10);

result is now the NUMBER 20.

This distinction is essential for callbacks.
*/


// ============================================================
// 12. CALLBACK FUNCTIONS
// ============================================================

section("12. CALLBACK FUNCTIONS");

{
    function doubleNumber(number) {
        return number * 2;
    }

    function processNumber(number, callback) {
        return callback(number);
    }

    const result = processNumber(10, doubleNumber);

    console.log("Processed number:", result);
}

/*
A CALLBACK is a function passed
as an argument to another function.

EXAMPLE:

processNumber(10, doubleNumber);

Here:

10            -> normal argument
doubleNumber  -> callback function

Inside processNumber:

callback(number);

This calls doubleNumber(10).

RESULT:

20

IMPORTANT:

processNumber(10, doubleNumber)

CORRECT — passes a function reference.

processNumber(10, doubleNumber(10))

Passes the RESULT of calling doubleNumber,
which is 20, not the function.

Our processNumber expects a function,
so passing 20 would cause a TypeError.
*/


// ============================================================
// 13. NAMED CALLBACKS
// ============================================================

section("13. NAMED CALLBACKS");

{
    const developers = [
        { name: "Alan", experience: 3 },
        { name: "Kamil", experience: 1 },
        { name: "Anna", experience: 4 }
    ];

    function isExperienced(developer) {
        return developer.experience >= 3;
    }

    const experiencedDevelopers =
        developers.filter(isExperienced);

    console.log(experiencedDevelopers);
}

/*
A NAMED CALLBACK is a function
that has its own name.

Here:

function isExperienced(developer) {
    return developer.experience >= 3;
}

We pass it to filter():

developers.filter(isExperienced);

WHY IS THIS USEFUL?

- Easier to read
- Easier to test
- Easier to reuse
- Less duplicated logic

Each developer object is passed
to isExperienced() automatically.

We do not call it manually inside filter().
*/


// ============================================================
// 14. HIGHER-ORDER FUNCTIONS
// ============================================================

section("14. HIGHER-ORDER FUNCTIONS");

{
    function addTen(number) {
        return number + 10;
    }

    function multiplyByThree(number) {
        return number * 3;
    }

    function processNumber(number, operation) {
        return operation(number);
    }

    console.log(processNumber(5, addTen));
    console.log(processNumber(5, multiplyByThree));
}

/*
A HIGHER-ORDER FUNCTION is a function
that does at least one of these:

1. Accepts another function as an argument.

2. Returns another function.

Our processNumber() accepts
the operation callback.

The SAME function can perform
different operations.

JavaScript array methods such as:

filter()
map()
forEach()

are also higher-order functions
because they accept callbacks.

MAIN IDEA:

Functions can control
the behavior of other functions.
*/


// ============================================================
// 15. FILTER() WITH NAMED CALLBACK
// ============================================================

section("15. FILTER WITH CALLBACK");

{
    const employees = [
        { name: "Alan", department: "Frontend", active: true },
        { name: "Anna", department: "Backend", active: true },
        { name: "Kamil", department: "Frontend", active: false },
        { name: "Julia", department: "Frontend", active: true }
    ];

    function isActiveFrontend(employee) {
        return employee.department === "Frontend"
            && employee.active === true;
    }

    const activeFrontend =
        employees.filter(isActiveFrontend);

    console.log(activeFrontend);
}

/*
filter() creates a NEW ARRAY.

It keeps elements for which
the callback returns a truthy value.

FLOW:

employees
    |
    v
filter(isActiveFrontend)
    |
    v
Check every employee
    |
    v
Keep matching employees
    |
    v
NEW ARRAY

IMPORTANT:

filter() does not modify the
original array.

The resulting array may contain:

- All elements
- Some elements
- No elements

If no elements match:

filter() returns [].
*/


// ============================================================
// 16. MAP() WITH NAMED CALLBACK
// ============================================================

section("16. MAP WITH CALLBACK");

{
    const developers = [
        { name: "Alan", stack: "React" },
        { name: "Anna", stack: "Python" },
        { name: "Kamil", stack: "Vue" }
    ];

    function createDeveloperLabel(developer) {
        return {
            label: `${developer.name.toUpperCase()} - ${developer.stack.toUpperCase()}`
        };
    }

    const formattedDevelopers =
        developers.map(createDeveloperLabel);

    console.log(formattedDevelopers);
}

/*
map() transforms every element
and returns a NEW ARRAY.

Original object:

{
    name: "Alan",
    stack: "React"
}

New object:

{
    label: "ALAN - REACT"
}

IMPORTANT:

map() does not automatically
preserve original properties.

After mapping, the new structure
depends on what the callback RETURNS.

Always know which properties exist
in the resulting objects.
*/


// ============================================================
// 17. FOREACH() WITH CALLBACK
// ============================================================

section("17. FOREACH WITH CALLBACK");

{
    const technologies = [
        "JavaScript",
        "React",
        "TypeScript"
    ];

    function printTechnology(technology) {
        console.log(`Technology: ${technology}`);
    }

    technologies.forEach(printTechnology);
}

/*
forEach() executes a callback
for every element of an array.

COMMON USE CASES:

- Printing information
- Logging
- Performing actions for each item

COMPARE:

filter()  -> selects elements
map()     -> transforms elements
forEach() -> performs an action

IMPORTANT:

forEach() returns undefined.

It does NOT create a new array
of callback results.
*/


// ============================================================
// 18. FILTER + MAP + FOREACH
// ============================================================

section("18. FILTER + MAP + FOREACH");

{
    const developers = [
        { name: "Alan", stack: "React", experience: 3 },
        { name: "Kamil", stack: "Vue", experience: 1 },
        { name: "Anna", stack: "React", experience: 4 },
        { name: "Julia", stack: "React", experience: 2 }
    ];

    function isQualified(developer) {
        return developer.stack === "React"
            && developer.experience >= 3;
    }

    function formatDeveloper(developer) {
        return {
            label: developer.name.toUpperCase(),
            experience: developer.experience
        };
    }

    function printDeveloper(developer) {
        console.log(
            `${developer.label} | ${developer.experience} years`
        );
    }

    const qualifiedDevelopers =
        developers.filter(isQualified);

    const formattedDevelopers =
        qualifiedDevelopers.map(formatDeveloper);

    formattedDevelopers.forEach(printDeveloper);
}

/*
FULL DATA FLOW:

ORIGINAL ARRAY
      |
      v
filter(isQualified)
      |
      v
QUALIFIED OBJECTS
      |
      v
map(formatDeveloper)
      |
      v
NEW OBJECT STRUCTURE
      |
      v
forEach(printDeveloper)
      |
      v
CONSOLE OUTPUT

MOST IMPORTANT RULE:

filter() decides WHAT stays.

map() decides HOW it looks.

forEach() decides WHAT action happens.

Always understand what data
each callback receives.
*/


// ============================================================
// 19. FOR...OF AND ACCUMULATORS
// ============================================================

section("19. FOR...OF AND ACCUMULATORS");

{
    const workHours = [8, 6, 7, 5];

    function calculateTotalHours(hoursArray) {
        let total = 0;

        for (const hours of hoursArray) {
            total += hours;
        }

        return total;
    }

    console.log("Total hours:", calculateTotalHours(workHours));
}

/*
An ACCUMULATOR stores a running total.

INITIAL VALUE:

let total = 0;

EVERY ITERATION:

total += hours;

This is equivalent to:

total = total + hours;

EXAMPLE:

Start: total = 0

+ 8 -> 8
+ 6 -> 14
+ 7 -> 21
+ 5 -> 26

return total;

RESULT:

26

IMPORTANT:

Initialize the accumulator
before the loop.

Return the final result
after the loop when you want the total.
*/


// ============================================================
// 20. FUNCTIONS WITH ARRAYS OF OBJECTS
// ============================================================

section("20. FUNCTIONS WITH ARRAY OF OBJECTS");

{
    const tasks = [
        { name: "API", hours: 10, status: "done" },
        { name: "Dashboard", hours: 5, status: "pending" },
        { name: "Testing", hours: 8, status: "done" }
    ];

    function isCompleted(task) {
        return task.status === "done";
    }

    function calculateCompletedHours(tasksArray) {
        const completedTasks =
            tasksArray.filter(isCompleted);

        let totalHours = 0;

        for (const task of completedTasks) {
            totalHours += task.hours;
        }

        return totalHours;
    }

    const completedHours =
        calculateCompletedHours(tasks);

    console.log("Completed hours:", completedHours);
}

/*
We combine:

1. Function parameters
2. Named callbacks
3. filter()
4. for...of
5. Accumulation
6. return

FLOW:

tasks
  |
  v
calculateCompletedHours(tasks)
  |
  v
filter(isCompleted)
  |
  v
Completed tasks only
  |
  v
for...of
  |
  v
Sum task.hours
  |
  v
return 18

IMPORTANT:

The function receives the array
as its argument.

It does not need to depend on
a global variable named tasks.
*/


// ============================================================
// 21. DESTRUCTURING INSIDE FUNCTIONS
// ============================================================

section("21. DESTRUCTURING INSIDE FUNCTIONS");

{
    const developer = {
        name: "Alan",
        hourlyRate: 150,
        hours: 20
    };

    function calculateDeveloperCost(developer) {
        const { hourlyRate, hours } = developer;

        return hourlyRate * hours;
    }

    console.log(
        "Developer cost:",
        calculateDeveloperCost(developer)
    );
}

/*
DESTRUCTURING extracts object properties
into variables.

Instead of:

const hourlyRate = developer.hourlyRate;
const hours = developer.hours;

We can write:

const { hourlyRate, hours } = developer;

IMPORTANT:

Property names must match.

If the object contains:

hourlyRate

but we try to extract:

hourlyCosts

the result is undefined.

Destructuring does NOT rename
properties automatically.
*/


// ============================================================
// 22. FUNCTIONS RETURNING OBJECTS
// ============================================================

section("22. FUNCTIONS RETURNING OBJECTS");

{
    function createDeveloper(name, stack, experience) {
        return {
            name: name,
            stack: stack,
            experience: experience
        };
    }

    const developer =
        createDeveloper("Alan", "JavaScript", 1);

    console.log(developer);
}

/*
Functions can return:

- Numbers
- Strings
- Booleans
- Arrays
- Objects
- Functions
- undefined
- Other JavaScript values

Returning an object is useful when
the function must provide multiple
related values.

EXAMPLE:

return {
    name: name,
    stack: stack,
    experience: experience
};

The returned object can be stored:

const developer = createDeveloper(...);

Then accessed:

developer.name
developer.stack
developer.experience
*/


// ============================================================
// 23. OBJECT PROPERTY SHORTHAND
// ============================================================

section("23. OBJECT PROPERTY SHORTHAND");

{
    function createProjectSummary(project) {
        const name = project.name;
        const hours = project.hours;
        const cost = project.hours * project.rate;

        return {
            name,
            hours,
            cost
        };
    }

    const project = {
        name: "API Platform",
        hours: 20,
        rate: 150
    };

    console.log(createProjectSummary(project));
}

/*
OBJECT PROPERTY SHORTHAND:

return {
    name,
    hours,
    cost
};

MEANS THE SAME AS:

return {
    name: name,
    hours: hours,
    cost: cost
};

IMPORTANT:

Shorthand works when the property name
and variable name are identical.

The variables must already exist.

This is commonly used when returning
multiple values from functions.
*/


// ============================================================
// 24. FUNCTION COMPOSITION
// ============================================================

section("24. FUNCTION COMPOSITION");

{
    function calculateBaseCost(hours, rate) {
        return hours * rate;
    }

    function calculateFee(cost) {
        return cost * 0.10;
    }

    function calculateFinalCost(hours, rate) {
        const baseCost = calculateBaseCost(hours, rate);
        const fee = calculateFee(baseCost);

        return baseCost + fee;
    }

    console.log(
        "Final project cost:",
        calculateFinalCost(20, 150)
    );
}

/*
FUNCTION COMPOSITION means building
larger operations from smaller functions.

FUNCTION 1:

calculateBaseCost()
-> calculates base cost

FUNCTION 2:

calculateFee()
-> calculates an additional fee

FUNCTION 3:

calculateFinalCost()
-> combines results

BENEFITS:

- Better code organization
- Easier testing
- Easier debugging
- Less duplicated logic

MAIN LESSON:

Do not put every calculation
inside one enormous function.

Divide the problem into steps.
*/


// ============================================================
// 25. REUSING FUNCTION RESULTS
// ============================================================

section("25. REUSING FUNCTION RESULTS");

{
    function calculateMetrics(hours, rate) {
        const cost = hours * rate;

        return {
            hours,
            rate,
            cost
        };
    }

    const metrics = calculateMetrics(20, 150);

    const { hours, cost } = metrics;

    console.log("Hours:", hours);
    console.log("Cost:", cost);
}

/*
COMMON MISTAKE:

Calling the same function repeatedly
when its result can be stored.

LESS EFFICIENT:

calculateMetrics(20, 150).hours;

calculateMetrics(20, 150).cost;

BETTER:

const metrics = calculateMetrics(20, 150);

metrics.hours;
metrics.cost;

OR:

const { hours, cost } = metrics;

MAIN RULE:

If the same calculation produces
all the data you need,
perform it once and reuse the result.
*/


// ============================================================
// 26. DEBUGGING - MISSING RETURN
// ============================================================

section("26. DEBUGGING - MISSING RETURN");

{
    function incorrectCalculation(number) {
        number * 2;
    }

    function correctCalculation(number) {
        return number * 2;
    }

    console.log(
        "Incorrect:",
        incorrectCalculation(10)
    );

    console.log(
        "Correct:",
        correctCalculation(10)
    );
}

/*
INCORRECT:

function double(number) {
    number * 2;
}

The calculation happens,
but nothing is returned.

RESULT:

undefined

CORRECT:

function double(number) {
    return number * 2;
}

RESULT:

20

MAIN RULE:

If another function or variable
needs the result, use return.
*/


// ============================================================
// 27. DEBUGGING - WRONG PROPERTY
// ============================================================

section("27. DEBUGGING - WRONG PROPERTY");

{
    const developers = [
        { name: "Alan", experience: 3 }
    ];

    function formatDeveloper(developer) {
        return {
            label: developer.name.toUpperCase(),
            years: developer.experience
        };
    }

    const formatted =
        developers.map(formatDeveloper);

    console.log("Correct:", formatted[0].label);

    console.log("Wrong:", formatted[0].name);
}

/*
ORIGINAL OBJECT:

{
    name: "Alan",
    experience: 3
}

TRANSFORMED OBJECT:

{
    label: "ALAN",
    years: 3
}

After map():

formatted[0].name

returns undefined.

Because the NEW object contains:

label
years

not:

name
experience

MAIN LESSON:

Always inspect the structure
returned by map().

Never assume the old properties
still exist after transformation.
*/


// ============================================================
// 28. DEBUGGING - WRONG CALLBACK
// ============================================================

section("28. DEBUGGING - WRONG CALLBACK");

{
    const numbers = [1, 2, 3, 4, 5];

    function isEven(number) {
        return number % 2 === 0;
    }

    const correct = numbers.filter(isEven);

    console.log("Even numbers:", correct);
}

/*
CORRECT:

numbers.filter(isEven);

filter() receives the function itself.

INCORRECT:

numbers.filter(isEven());

Here isEven() runs immediately
without a number argument.

It returns false, and filter()
receives a boolean instead of a function.

This causes a TypeError.

REMEMBER:

isEven    -> function reference

isEven(4) -> function result

Callback methods expect a function.
*/


// ============================================================
// 29. DEBUGGING - EMPTY ARRAYS
// ============================================================

section("29. DEBUGGING - EMPTY ARRAYS");

{
    const developers = [
        { name: "Alan", experience: 1 },
        { name: "Anna", experience: 2 }
    ];

    function isSenior(developer) {
        return developer.experience >= 5;
    }

    const seniors = developers.filter(isSenior);

    console.log("Senior developers:", seniors);

    if (seniors.length > 0) {
        console.log("First senior:", seniors[0].name);
    } else {
        console.log("No senior developers found.");
    }
}

/*
filter() may return an EMPTY ARRAY:

[]

For an empty array:

array[0] -> undefined

Accessing:

array[0].name

would cause a TypeError.

SAFER APPROACH:

if (array.length > 0) {
    console.log(array[0].name);
}

MAIN RULE:

Check whether data exists
before accessing properties
of a potentially missing element.
*/


// ============================================================
// 30. DEBUGGING - WRONG BUSINESS LOGIC
// ============================================================

section("30. DEBUGGING - BUSINESS LOGIC");

{
    function calculateProfit(revenue, spend) {
        const profit = revenue - spend;

        if (profit >= 2500) {
            return profit * 0.90;
        }

        return profit;
    }

    console.log(
        "Profit with commission:",
        calculateProfit(7600, 2800)
    );

    console.log(
        "Profit without commission:",
        calculateProfit(3800, 2100)
    );
}

/*
CODE CAN RUN WITHOUT ERRORS
AND STILL PRODUCE WRONG RESULTS.

EXAMPLE:

profit * 1.10

INCREASES profit by 10%.

profit * 0.90

DECREASES profit by 10%.

Also remember:

REVENUE != PROFIT

Revenue = all generated income.

Spend = advertising costs.

Profit = revenue - spend.

MAIN LESSON:

Debugging is not only about syntax errors.

Always verify:

- Conditions
- Formulas
- Input values
- Expected outputs
- Business rules
*/


// ============================================================
// 31. DEBUGGING - DATA FLOW
// ============================================================

section("31. DEBUGGING - DATA FLOW");

{
    const numbers = [5, 10, 15, 20];

    function isGreaterThanTen(number) {
        return number > 10;
    }

    function doubleNumber(number) {
        return number * 2;
    }

    const filteredNumbers =
        numbers.filter(isGreaterThanTen);

    console.log("After filter:", filteredNumbers);

    const transformedNumbers =
        filteredNumbers.map(doubleNumber);

    console.log("After map:", transformedNumbers);
}

/*
DEBUG EACH STAGE SEPARATELY.

ORIGINAL:

[5, 10, 15, 20]

AFTER FILTER:

[15, 20]

AFTER MAP:

[30, 40]

If the final result is wrong:

1. Inspect original data.
2. Inspect the filter result.
3. Inspect the map result.
4. Inspect the final output.

Do not try to debug
the entire program at once.

Find the exact step
where the data becomes incorrect.
*/


// ============================================================
// 32. DAY 4 MENTAL MODEL
// ============================================================

section("32. DAY 4 MENTAL MODEL");

console.log(`

FUNCTION             -> REUSABLE BLOCK OF CODE

DECLARATION          -> function name() {}

EXPRESSION           -> const name = function() {}

PARAMETER            -> VARIABLE INSIDE FUNCTION DEFINITION

ARGUMENT             -> VALUE PROVIDED WHEN CALLING

DEFAULT PARAMETER    -> FALLBACK VALUE

return               -> SEND RESULT OUT OF FUNCTION

console.log()        -> DISPLAY INFORMATION

EARLY RETURN         -> STOP FUNCTION WHEN CONDITION MATCHES

BOOLEAN FUNCTION     -> RETURN true OR false

FUNCTION REFERENCE   -> functionName

FUNCTION CALL        -> functionName()

CALLBACK             -> FUNCTION PASSED TO ANOTHER FUNCTION

NAMED CALLBACK       -> CALLBACK WITH ITS OWN NAME

HIGHER-ORDER         -> FUNCTION ACCEPTING OR RETURNING A FUNCTION

filter()             -> WHICH ELEMENTS SHOULD STAY?

map()                -> HOW SHOULD ELEMENTS CHANGE?

forEach()            -> WHAT ACTION TO PERFORM FOR EACH ELEMENT?

for...of             -> ITERATE THROUGH ARRAY VALUES

ACCUMULATOR          -> STORE A RUNNING TOTAL

DESTRUCTURING        -> EXTRACT OBJECT PROPERTIES

OBJECT SHORTHAND     -> RETURN { name, age } INSTEAD OF REPEATING

COMPOSITION          -> COMBINE SMALL FUNCTIONS INTO BIGGER OPERATIONS

DATA FLOW            -> TRACK DATA FROM INPUT TO OUTPUT

DEBUGGING            -> IDENTIFY WHERE LOGIC OR DATA BREAKS

`);


// ============================================================
// 33. MOST IMPORTANT DATA FLOW RULE
// ============================================================

section("33. MOST IMPORTANT DATA FLOW RULE");

console.log(`

ORIGINAL ARRAY
      |
      v
FUNCTION RECEIVES DATA
      |
      v
filter(callback)
      |
      v
FILTERED ARRAY
      |
      v
map(callback)
      |
      v
TRANSFORMED ARRAY
      |
      v
for...of
      |
      v
CALCULATE TOTALS
      |
      v
return {
    count,
    total,
    entries
}
      |
      v
RESULT SAVED TO VARIABLE
      |
      +----> console.log()
      |
      +----> destructuring
      |
      +----> another function
      |
      +----> final report

`);

/*
THE BIGGEST DAY 4 LESSON:

Do not only ask:

"Which function should I write?"

Ask:

1. What data does my function receive?

2. What should this function do?

3. What structure does it return?

4. Which function will use its result?

5. Am I using the correct properties?

6. Am I calculating something twice?

7. Does the final result match the requirements?

THE GOLDEN RULE:

INPUT -> PROCESSING -> RETURN -> NEXT FUNCTION

A large program is simply
a collection of smaller operations
connected through data flow.
*/


// ============================================================
// 34. DAY 4 COMPLETE
// ============================================================

section("34. DAY 4 COMPLETE");

console.log(`

✅ Function declarations

✅ Function expressions

✅ Parameters and arguments

✅ Default parameters

✅ Return vs console.log()

✅ Return stopping execution

✅ Early return

✅ Boolean functions

✅ Functions calling functions

✅ Reusable functions

✅ Functions as values

✅ Callback functions

✅ Named callbacks

✅ Higher-order functions

✅ filter() with callbacks

✅ map() with callbacks

✅ forEach() with callbacks

✅ filter() + map() + forEach()

✅ for...of and accumulators

✅ Functions processing arrays of objects

✅ Destructuring inside functions

✅ Functions returning objects

✅ Object property shorthand

✅ Function composition

✅ Reusing calculated results

✅ Debugging missing returns

✅ Debugging incorrect properties

✅ Debugging callback mistakes

✅ Handling empty arrays

✅ Debugging business logic

✅ Debugging data flow

✅ Function mental model

✅ Input -> Processing -> Return -> Output

`);

console.log(
    `${colors.green}============================================================`
);

console.log("JAVASCRIPT DAY 4 COMPLETE");

console.log(
    `============================================================${colors.reset}`
);

console.log(
    `${colors.magenta}PinkCodes - Frontend Return Journey 🚀${colors.reset}\n`
);
