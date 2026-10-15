
const projects = [
    {
        id: 201,
        name: "API Platform",
        status: "done",
        developer: { name: "Anna", hourlyRate: 150 },
        tasks: [
            { name: "Authentication", hours: 20, status: "done" },
            { name: "Endpoints", hours: 15, status: "done" },
            { name: "Documentation", hours: 5, status: "pending" }
        ]
    },
    {
        id: 202,
        name: "CRM Panel",
        status: "done",
        developer: { name: "Kamil", hourlyRate: 120 },
        tasks: [
            { name: "Dashboard", hours: 10, status: "done" },
            { name: "Reports", hours: 20, status: "done" }
        ]
    },
    {
        id: 203,
        name: "E-commerce",
        status: "in-progress",
        developer: { name: "Ola", hourlyRate: 200 },
        tasks: [
            { name: "Checkout", hours: 40, status: "done" }
        ]
    },
    {
        id: 204,
        name: "Mobile UI",
        status: "done",
        developer: { name: "Maja", hourlyRate: 200 },
        tasks: [
            { name: "Navigation", hours: 10, status: "done" },
            { name: "Components", hours: 15, status: "done" },
            { name: "Testing", hours: 15, status: "pending" }
        ]
    },
    {
        id: 205,
        name: "Internal Tools",
        status: "done",
        developer: { name: "Piotr", hourlyRate: 100 },
        tasks: []
    },
    {
        id: 206,
        name: "Support Portal",
        status: "done",
        developer: { name: "Robert", hourlyRate: 110 },
        tasks: [
            { name: "Help Center", hours: 10, status: "done" },
            { name: "Chat", hours: 5, status: "pending" }
        ]
    }
];

function isEligibleProject(project) {
    return project.status === "done" && project.tasks.length > 0;
}

function isCompletedTask(task) {
    return task.status === "done";
}

function calculateCompletedHours(project) {
    const completedTasks = project.tasks.filter(isCompletedTask);
    let totalHours = 0;
    for (const task of completedTasks) {
        totalHours += task.hours;
    }
    return totalHours;
}

function calculateProjectCost(project) {
    const completedHours = calculateCompletedHours(project);
    let defaultCost = completedHours * project.developer.hourlyRate;
    if (defaultCost >= 5000) {
        return defaultCost * 1.1;
    }
    return defaultCost;
}

function createProjectEntry(project) {
    return {
        id: project.id,
        name: project.name,
        developer: project.developer.name,
        completedHours: calculateCompletedHours(project),
        total: calculateProjectCost(project)
    }
}

function chooseTopProject(entries) {
    let topProject = null;

    for (const entry of entries) {
        if (topProject === null || entry.total > topProject.total) {
            topProject = entry;
        }
    }

    return topProject;
}

function generateWorkflowReport(projects) {
    const entries = projects.filter(isEligibleProject).map(createProjectEntry);
    let totalHours = 0;
    let totalRevenue = 0;
    for (const entry of entries) {
        totalHours += entry.completedHours;
        totalRevenue += entry.total;
    }
    return {
        projectsCount: entries.length,
        totalHours: totalHours,
        totalRevenue: totalRevenue,
        topProject: chooseTopProject(entries),
        entries: entries
    };
}

const raport = generateWorkflowReport(projects);
console.log(raport);