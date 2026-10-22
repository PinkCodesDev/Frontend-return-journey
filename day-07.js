
"use strict";

// ======================================================
// DAY 07 — JAVASCRIPT FUNDAMENTALS
// Topics: this, bind, call, apply, Arrow Functions,
//         map, filter, reduce
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
// 1. THIS — OBJECT CONTEXT
// ======================================================

section("1. This");

const company = {
    name: "Mayko",
    revenue: 30000,
    cost: 10000,

    calculateProfit() {
        return this.revenue - this.cost;
    }
};

result("Profit:", company.calculateProfit());

// this refers to the object used to call the method.
// company.calculateProfit() -> this = company


// ======================================================
// 2. LOSING THIS CONTEXT
// ======================================================

section("2. Losing This Context");

const getProfit = company.calculateProfit;

// console.log(getProfit()); // TypeError

// Copying a method reference does not preserve this.
// In strict mode, a standalone function call has
// this = undefined.

// getProfit is a function, not its calculated result.

result("Function type:", typeof getProfit);


// ======================================================
// 3. BIND()
// ======================================================

section("3. Bind");

const boundProfit = company.calculateProfit.bind(company);

result("Bound profit:", boundProfit());

// bind() creates a NEW function.
// It does NOT execute the function immediately.
// It permanently binds this to the given object.

company.revenue = 40000;

result("Updated profit:", boundProfit()); // 30000

// bind() keeps the object reference,
// not a snapshot of its property values.


// ======================================================
// 4. CALL()
// ======================================================

section("4. Call");

const shopA = {
    name: "Teanorama",
    revenue: 25000,
    cost: 7000
};

const shopB = {
    name: "DogStore",
    revenue: 40000,
    cost: 15000
};

function calculateProfit(bonus) {
    return this.revenue - this.cost + bonus;
}

result("Shop A:", calculateProfit.call(shopA, 2000));
result("Shop B:", calculateProfit.call(shopB, 5000));

// call() executes the function immediately.
// First argument = this.
// Remaining arguments = function parameters.


// ======================================================
// 5. APPLY()
// ======================================================

section("5. Apply");

function calculateNetProfit(bonus, fee) {
    return this.revenue - this.cost + bonus - fee;
}

result(
    "Apply result:",
    calculateNetProfit.apply(shopA, [3000, 1000])
);

// apply() executes the function immediately.
// First argument = this.
// Second argument = array of function arguments.


// ======================================================
// 6. BIND VS CALL VS APPLY
// ======================================================

section("6. Bind vs Call vs Apply");

const boundCalculate = calculateNetProfit.bind(
    shopA, 3000, 1000
);

result("Bind:", boundCalculate());

result(
    "Call:",
    calculateNetProfit.call(shopA, 3000, 1000)
);

result(
    "Apply:",
    calculateNetProfit.apply(shopA, [3000, 1000])
);

// bind() -> returns a new function.
// call() -> executes immediately.
// apply() -> executes immediately with array arguments.


// ======================================================
// 7. ARROW FUNCTIONS
// ======================================================

section("7. Arrow Functions");

// Regular function:

function multiply(a, b) {
    return a * b;
}

// Arrow function:

const multiplyArrow = (a, b) => a * b;

result("Regular:", multiply(5, 3));
result("Arrow:", multiplyArrow(5, 3));

// Arrow functions allow shorter syntax.
// A single expression is returned automatically.

// IMPORTANT:
// Arrow functions do not have their own this.
// They inherit this from the surrounding scope.

const store = {
    name: "Teanorama",

    getName() {
        const showName = () => this.name;
        return showName();
    }
};

result("Store:", store.getName());

// Here the arrow function inherits this
// from the surrounding getName() method.


// ======================================================
// 8. MAP()
// ======================================================

section("8. Map");

const campaigns = [
    { name: "Meta Ads", revenue: 15000, cost: 5000 },
    { name: "Google Ads", revenue: 9000, cost: 8000 },
    { name: "TikTok Ads", revenue: 20000, cost: 6000 }
];

const campaignProfits = campaigns.map((campaign) => {
    return {
        name: campaign.name,
        profit: campaign.revenue - campaign.cost
    };
});

result("Campaign profits:", campaignProfits);

// map() transforms each array element.
// It returns a NEW array.
// The original array is not modified.


// ======================================================
// 9. FILTER()
// ======================================================

section("9. Filter");

const bestCampaigns = campaignProfits.filter((campaign) => {
    return campaign.profit > 5000;
});

result("Best campaigns:", bestCampaigns);

// filter() selects elements that meet a condition.
// true  -> element stays.
// false -> element is excluded.
// It returns a NEW array.


// ======================================================
// 10. REDUCE()
// ======================================================

section("10. Reduce");

const totalProfit = campaignProfits.reduce((total, campaign) => {
    return total + campaign.profit;
}, 0);

result("Total profit:", totalProfit); // 25000

// reduce() processes array elements
// using an accumulator.
//
// total    -> accumulator
// campaign -> current element
// 0        -> initial accumulator value


// ======================================================
// 11. ARRAY METHODS COMBINED
// ======================================================

section("11. Map + Filter + Reduce");

// Calculate total profit only for campaigns
// generating more than 5000 PLN profit.

const bestTotalProfit = campaigns
    .map((campaign) => {
        return campaign.revenue - campaign.cost;
    })
    .filter((profit) => {
        return profit > 5000;
    })
    .reduce((total, profit) => {
        return total + profit;
    }, 0);

result("Best campaigns total:", bestTotalProfit);

// map()    -> transform data.
// filter() -> select matching data.
// reduce() -> aggregate data.


// ======================================================
// 12. ARRAY METHODS — SHORT SYNTAX
// ======================================================

section("12. Short Syntax");

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(n => n * 2);

const filtered = numbers.filter(n => n > 2);

const sum = numbers.reduce((total, n) => total + n, 0);

result("Doubled:", doubled);
result("Filtered:", filtered);
result("Sum:", sum);

// Short arrow functions are useful when
// the operation is simple and readable.


// ======================================================
// MENTAL MODEL
// ======================================================

section("MENTAL MODEL");

console.log("1. this depends on how a regular function is called.");
console.log("2. bind() creates a new bound function.");
console.log("3. call() executes a function immediately.");
console.log("4. apply() passes arguments in an array.");
console.log("5. Arrow functions inherit this.");
console.log("6. map() transforms array elements.");
console.log("7. filter() selects array elements.");
console.log("8. reduce() combines elements into a result.");
console.log("9. Array methods can be chained.");
console.log("10. map/filter/reduce do not mutate the source array.");

console.log(green + "\nDAY 07 COMPLETE ✅" + reset);
