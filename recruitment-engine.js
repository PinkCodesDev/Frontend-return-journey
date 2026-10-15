
const candidates = [
    { name: "Natalia", experience: 4, stack: "React", expectedSalary: 9000, english: "C1", available: true },
    { name: "Bartek", experience: 2, stack: "React", expectedSalary: 7000, english: "B2", available: true },
    { name: "Karolina", experience: 3, stack: "Vue", expectedSalary: 6500, english: "C1", available: true },
    { name: "Michal", experience: 5, stack: "React", expectedSalary: 11000, english: "C1", available: true },
    { name: "Zosia", experience: 3, stack: "React", expectedSalary: 7800, english: "C1", available: false },
    { name: "Pawel", experience: 3, stack: "React", expectedSalary: 8000, english: "B2", available: true },
    { name: "Ewa", experience: 1, stack: "React", expectedSalary: 6000, english: "B2", available: true },
    { name: "Igor", experience: 3, stack: "React", expectedSalary: 9500, english: "B1", available: true }
];

function isEligible(candidate) {
    if (candidate.experience >= 2 && candidate.stack === "React" && candidate.expectedSalary <= 10000 && candidate.available === true && (candidate.english === "B2" || candidate.english === "C1")) {
        return true;
    }
    return false;
}

function calculateScore(candidate) {
    let score = candidate.experience * 10;

    if (candidate.english === "C1") {
        score += 15;
    }

    if (candidate.expectedSalary <= 8000) {
        score += 10;
    }

    return score;
}


function createCandidateEntry(candidate) {
    return {
        name: candidate.name,
        score: calculateScore(candidate),
        expectedSalary: candidate.expectedSalary
    }
}

function chooseTopCandidate(entries) {
    let topCandidate = null;
    for (const entry of entries) {
        if (!topCandidate || entry.score > topCandidate.score) {
            topCandidate = entry;
        }
    }
    return topCandidate;
}

function generateRecruitmentReport(candidates) {
    const eligibleCandidates = candidates.filter(isEligible);
    const candidateScores = eligibleCandidates.map(createCandidateEntry);
    let totalExpectedSalary = 0;
    for (const entry of candidateScores) {
        totalExpectedSalary += entry.expectedSalary;
    }
    const topCandidate = chooseTopCandidate(candidateScores);
return {
        qualifiedCount: eligibleCandidates.length,
        totalExpectedSalary: totalExpectedSalary,
        topCandidate: topCandidate,
        entries: candidateScores
    }
}

const report = generateRecruitmentReport(candidates);

console.log(report);