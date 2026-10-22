function calculateProfit(revenue, cost) {
    const profit = revenue - cost;
    return profit;
}

function calculateROI(revenue, cost) {
    const profit = calculateProfit(revenue, cost);
    const roi = (profit / cost) * 100;
    return roi;
}

function generateReport(revenue, cost) {
    const profit = calculateProfit(revenue, cost);
    const roi = calculateROI(revenue, cost);
    return `Profit: ${profit}, Koszt: ${cost}, ROI: ${roi.toFixed(2)}%`;
}

console.log(`=== BLACK FRIDAY 2026 ===`);
console.log(generateReport(15000, 4500));
