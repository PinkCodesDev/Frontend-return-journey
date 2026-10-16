function createSalaryManager(developerName, initialSalary) {
    let currentSalary = initialSalary;
    function addRaise(amount) {
        currentSalary += amount;
        let status = "Regular Salary"
        if(currentSalary > 10000)
            status = "Senior Salary";
        else
            status = "Regular Salary";
        return `${developerName}: ${currentSalary} - ${status}`;
    }
    return addRaise;
}

const alanSalary = createSalaryManager("Alan", 6000);
const annaSalary = createSalaryManager("Anna", 9000);

console.log(alanSalary(2000));
console.log(annaSalary(1500));
console.log(alanSalary(3000));
console.log(annaSalary(500));
console.log(alanSalary(1000));