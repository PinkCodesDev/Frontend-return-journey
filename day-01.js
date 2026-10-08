const name ="PinkCodes"
let age = 27;
let experienceYears = 3;
const isLearningReact = true;
const technologies = ["JavaScript", "TypeScript", "React"];

function getDeveloperStatus(age, experienceYears, isLearningReact) {
    if (age >= 18 && experienceYears >= 2) {
        return "Ready to return to tech";}
    else if (isLearningReact === true) {
        return "Learning and building with React";}
    else
        return "Keep learning and improving";}

const developerStatus = getDeveloperStatus(age, experienceYears, isLearningReact);

technologies.push("Next.js");

console.log(`
    My name is ${name}.
    I'm ${age} years old.
    I have ${experienceYears} years of experience.
    I'm learning ${technologies}
    My developer status is: ${developerStatus}.
    `)