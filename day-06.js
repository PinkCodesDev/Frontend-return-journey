
"use strict";

// ======================================================
// DAY 06 — JAVASCRIPT EXECUTION FUNDAMENTALS
// PinkCodes — Frontend Return Journey
// Topics: Hoisting, TDZ, Execution Context, Call Stack
// ======================================================

const cyan = "\x1b[36m";
const green = "\x1b[32m";
const reset = "\x1b[0m";

function section(title) {
    console.log(cyan + "\n--- " + title + " ---" + reset);
}

function result(label, value) {
    console.log(green + label + reset, value);
}

// ======================================================
// 1. FUNCTION DECLARATION HOISTING
// ======================================================

section("1. Function Declaration Hoisting");

// Function declarations can be called before their definition.

result("Profit:", calculateProfit(10000, 3500));

function calculateProfit(revenue, cost) {
    return revenue - cost;
}

// Output: 6500


// ======================================================
// 2. VAR HOISTING
// ======================================================

section("2. Var Hoisting");

// var is hoisted and initialized with undefined.

console.log(salary); // undefined

var salary = 6000;

console.log(salary); // 6000


// ======================================================
// 3. LET AND TEMPORAL DEAD ZONE
// ======================================================

section("3. Let and TDZ");

// let is hoisted but cannot be accessed before
// its declaration is executed.

// console.log(revenue); // ReferenceError

let revenue = 10000;

result("Revenue:", revenue);

// TDZ = Temporal Dead Zone


// ======================================================
// 4. CONST AND TEMPORAL DEAD ZONE
// ======================================================

section("4. Const and TDZ");

// const also has a Temporal Dead Zone.

// console.log(cost); // ReferenceError

const cost = 3500;

result("Cost:", cost);

// const requires initialization at declaration.
// Reassigning a const variable causes TypeError.


// ======================================================
// 5. UNDEFINED VS REFERENCE ERROR
// ======================================================

section("5. Undefined vs ReferenceError");

console.log(example); // undefined

var example = 100;

console.log(example); // 100

// undefined is a value.
// ReferenceError is an error.

// An uncaught ReferenceError stops execution
// of the current script.

// console.log(missingVariable); // ReferenceError


// ======================================================
// 6. FUNCTION DECLARATION VS EXPRESSION
// ======================================================

section("6. Function Declaration vs Expression");

// Function declaration:
result("Declaration:", add(5, 3));

function add(a, b) {
    return a + b;
}

// Function expression:
const multiply = function(a, b) {
    return a * b;
};

result("Expression:", multiply(5, 3));

// Calling multiply before initialization
// would cause ReferenceError (TDZ).


// ======================================================
// 7. EXECUTION CONTEXT
// ======================================================

section("7. Execution Context");

// Simplified mental model:
//
// Phase 1 — Creation
// JavaScript prepares variable and function bindings.
//
// Phase 2 — Execution
// JavaScript executes statements and assignments.

const projectName = "Marketing Campaign";

function showProject() {
    const status = "Active";
    return projectName + " - " + status;
}

result("Project:", showProject());


// ======================================================
// 8. FUNCTION EXECUTION CONTEXT
// ======================================================

section("8. Function Execution Context");

// Every function call creates a new execution context.

function calculateRevenue(orders, price) {
    const total = orders * price;
    return total;
}

result("Campaign A:", calculateRevenue(10, 200));
result("Campaign B:", calculateRevenue(20, 150));

// Each call has its own parameters and local variables.


// ======================================================
// 9. LOCAL VARIABLES
// ======================================================

section("9. Local Variables");

function calculateNetProfit(revenue, cost) {
    const profit = revenue - cost;
    return profit;
}

const firstProfit = calculateNetProfit(10000, 3000);
const secondProfit = calculateNetProfit(15000, 5000);

result("First profit:", firstProfit);
result("Second profit:", secondProfit);

// The local profit variables are separate
// for each function call.


// ======================================================
// 10. GLOBAL VS LOCAL SCOPE
// ======================================================

section("10. Global vs Local Scope");

const taxRate = 0.23;

function calculateTax(price) {
    const tax = price * taxRate;
    return tax;
}

result("Tax:", calculateTax(1000));

// taxRate is accessible inside the function.
// tax exists only inside calculateTax().

// console.log(tax); // ReferenceError


// ======================================================
// 11. RETURN AND FUNCTION RESULTS
// ======================================================

section("11. Return and Function Results");

function calculateFinalPrice(price, discount) {
    const finalPrice = price - discount;
    return finalPrice;
}

const finalPrice = calculateFinalPrice(500, 100);

result("Final price:", finalPrice);

// return sends a value back to the caller.
// It does not create a global variable.
// Code after return in the same function
// is not executed.


// ======================================================
// 12. CALL STACK
// ======================================================

section("12. Call Stack");

// LIFO = Last In, First Out.
// The most recently called function finishes first.

function first() {
    console.log("A");
    second();
    console.log("B");
}

function second() {
    console.log("C");
    third();
    console.log("D");
}

function third() {
    console.log("E");
}

first();

console.log("F");

// Output order: A C E D B F


// ======================================================
// 13. NESTED FUNCTION CALLS
// ======================================================

section("13. Nested Function Calls");

function getDiscount(price) {
    return price * 0.20;
}

function getFinalPrice(price) {
    const discount = getDiscount(price);
    return price - discount;
}

function checkout() {
    const total = getFinalPrice(500);
    return total;
}

result("Checkout:", checkout());

// Call Stack:
// checkout()
// -> getFinalPrice()
// -> getDiscount()
// -> return to getFinalPrice()
// -> return to checkout()


// ======================================================
// 14. DEBUGGING AND STACK TRACES
// ======================================================

section("14. Debugging and Stack Traces");

// Example error:
//
// ReferenceError: rabat is not defined
//     at calculateFinalPrice
//     at checkout
//
// Stack traces help identify:
// 1. Where an error occurred.
// 2. Which function called another function.
// 3. How the program reached the error.

// IMPORTANT:
// An unhandled error interrupts normal execution.

console.log("Stack traces help us debug errors.");


// ======================================================
// 15. NUMBER FORMATTING — TOFIXED
// ======================================================

section("15. Number Formatting");

const campaignRevenue = 15000;
const campaignCost = 4500;

const campaignProfit = campaignRevenue - campaignCost;
const roi = (campaignProfit / campaignCost) * 100;

result("ROI:", roi.toFixed(2) + "%");
result("Type:", typeof roi.toFixed(2));

// toFixed(2) returns a string, not a number.
// Number(roi.toFixed(2)) converts it back.


// ======================================================
// MENTAL MODEL
// ======================================================

section("MENTAL MODEL");

console.log("1. Function declarations support hoisting.");
console.log("2. var is initialized with undefined.");
console.log("3. let and const have a TDZ.");
console.log("4. Uncaught errors interrupt execution.");
console.log("5. Function calls create execution contexts.");
console.log("6. Local variables belong to their function call.");
console.log("7. Call Stack follows LIFO.");
console.log("8. return passes values back to the caller.");
console.log("9. Stack traces help locate errors.");
console.log("10. toFixed() returns a string.");

console.log(green + "\nDAY 06 COMPLETE ✅" + reset);
