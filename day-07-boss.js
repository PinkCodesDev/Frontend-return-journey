const campaigns = [
    { name: "Meta Ads", revenue: 25000, cost: 8000 },
    { name: "Google Ads", revenue: 18000, cost: 10000 },
    { name: "TikTok Ads", revenue: 12000, cost: 15000 },
    { name: "YouTube Ads", revenue: 30000, cost: 12000 },
    { name: "Facebook Ads", revenue: 9000, cost: 7000 }
];

// 1. MAP
const campaignProfits = campaigns.map((campaign) => {
    // Twój kod
    return {
        name: campaign.name,
        profit: campaign.revenue - campaign.cost
    };
});

// 2. FILTER
const bestCampaigns = campaignProfits.filter((campaign) => {
    // Twój kod
    return campaign.profit > 10000;
});

// 3. REDUCE
const totalProfit = campaignProfits.reduce((total, campaign) => {
    // Twój kod
    return total + campaign.profit;
}, 0);

// RAPORT
console.log("=== CAMPAIGN ANALYTICS ===");
console.log("Campaign profits:", campaignProfits);
console.log("Best campaigns:", bestCampaigns);
console.log("Total profit:", totalProfit, "zł");