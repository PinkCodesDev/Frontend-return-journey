const developers = [
    { name: "Anna", hours: 40, rate: 150, status: "active" },
    { name: "Kamil", hours: 25, rate: 120, status: "active" },
    { name: "Ola", hours: 15, rate: 200, status: "active" },
    { name: "Robert", hours: 50, rate: 100, status: "inactive" },
    { name: "Maja", hours: 20, rate: 250, status: "active" },
    { name: "Piotr", hours: 30, rate: 100, status: "active" }
];

function isEligible(developer) {
    const eligible = developer.status === "active" && developer.hours >= 20;
    return eligible;
}

function calculateBaseSalary(developer) {
    const baseSalary = developer.hours * developer.rate;
    return baseSalary;
}

function applyBonus(salary) {
    if (salary >= 5000) {
        return salary * 1.10;
    }

    return salary + 300;
}

function createPayrollEntry(developer) {
    const baseSalary = calculateBaseSalary(developer);
    const finalSalary = applyBonus(baseSalary);
    return {
        name: developer.name,
        salary: finalSalary
    }
}

function generatePayroll(developers) {
    const goodDevelopers = developers.filter(isEligible);
    const payroll = goodDevelopers.map(createPayrollEntry);
    let total = 0;
    for (const payrollEntry of payroll) {
        total += payrollEntry.salary;
    }
    return {
        payments: payroll,
        count: goodDevelopers.length,
        total: total
    };
}

const report = generatePayroll(developers);

for (const payment of report.payments) {
    console.log(`${payment.name}: ${payment.salary} PLN`);
}

console.log(`Developers count: ${report.count}`);
console.log(`Total payroll: ${report.total} PLN`);