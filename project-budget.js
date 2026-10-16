function createProjectBudget(projectName) {
    let totalSpent = 0;
    function addExpense(amount) {
        totalSpent += amount;
        let status = "Whithin Budget"
            if(totalSpent > 3000)
                status = "Over Budget";
        return `Project: ${projectName} - ${totalSpent} - ${status}`;
    }
    return addExpense;
}

const report = createProjectBudget("Website");
console.log(report(3500))
console.log(report(1000));
console.log(report(500));
console.log(report(250));