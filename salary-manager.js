function createDeveloperTeam(teamName){
    let developers = [];

    function addDeveloper(developerName, salary) {
        let developer = {
            name: developerName,
            salary: salary
        };
        developers.push(developer);
        return `${developer.name} added to ${teamName}`;
    }

    function getHighEarners() {
        return developers.filter(developer => developer.salary >= 10000).map(developer => `${developer.name} earns ${developer.salary} PLN`)
    }

        return {
        addDeveloper,
        getHighEarners
    };
}


const frontendTeam = createDeveloperTeam("Frontend Team");
const backendTeam = createDeveloperTeam("Backend Team");

frontendTeam.addDeveloper("Anna", 12000);
frontendTeam.addDeveloper("Kamil", 8000);
frontendTeam.addDeveloper("Robert", 11000);

backendTeam.addDeveloper("Alan", 15000);
backendTeam.addDeveloper("Marta", 9000);

console.log(frontendTeam.getHighEarners());
console.log(backendTeam.getHighEarners());
