
const campaigns = [
    {
        id: 301,
        name: "Autumn Launch",
        status: "finished",
        adSets: [
            { name: "Prospecting", spend: 2000, revenue: 5500, status: "done" },
            { name: "Retargeting", spend: 800, revenue: 2100, status: "done" },
            { name: "Creative Test", spend: 500, revenue: 1000, status: "pending" }
        ]
    },
    {
        id: 302,
        name: "Brand Awareness",
        status: "finished",
        adSets: [
            { name: "Cold Audience", spend: 1200, revenue: 1800, status: "done" },
            { name: "Warm Audience", spend: 900, revenue: 2000, status: "done" }
        ]
    },
    {
        id: 303,
        name: "Black Friday Teaser",
        status: "in-progress",
        adSets: [
            { name: "Early Traffic", spend: 3000, revenue: 8000, status: "done" }
        ]
    },
    {
        id: 304,
        name: "Holiday Sales",
        status: "finished",
        adSets: [
            { name: "Conversions", spend: 2500, revenue: 6700, status: "done" },
            { name: "Remarketing", spend: 1500, revenue: 3500, status: "done" },
            { name: "New Creatives", spend: 700, revenue: 3000, status: "pending" }
        ]
    },
    {
        id: 305,
        name: "Empty Campaign",
        status: "finished",
        adSets: []
    },
    {
        id: 306,
        name: "Lead Generation",
        status: "finished",
        adSets: [
            { name: "Lead Forms", spend: 800, revenue: 1700, status: "done" },
            { name: "Landing Page", spend: 1000, revenue: 3500, status: "pending" }
        ]
    }
];

// 1. Sprawdzanie kampanii
function isEligibleCampaign(campaign) {
    return campaign.status === "finished" && campaign.adSets.length > 0;
}

// 2. Sprawdzanie zestawów reklam
function isCompletedAdSet(adSet) {
    return adSet.status === "done";
}

// 3. Obliczanie wydatków i przychodu
function calculateCampaignMetrics(campaign) {
    const completedAdSets = campaign.adSets.filter(isCompletedAdSet);

    let totalSpend = 0;
    let totalRevenue = 0;

    for (const adSet of completedAdSets) {
        totalSpend += adSet.spend;
        totalRevenue += adSet.revenue;
    }

    return { totalSpend, totalRevenue };
}

// 4. Obliczanie zysku po prowizji
function calculateCampaignProfit(campaign) {
    const { totalSpend, totalRevenue } = calculateCampaignMetrics(campaign);

    const profit = totalRevenue - totalSpend;

    if (profit >= 2500) {
        return profit * 0.90;
    }

    return profit;
}

// 5. Tworzenie obiektu rozliczenia
function createCampaignEntry(campaign) {
    const { totalSpend, totalRevenue } = calculateCampaignMetrics(campaign);

    const profit = calculateCampaignProfit(campaign);
    const commission = totalRevenue - totalSpend - profit;

    return {
        id: campaign.id,
        name: campaign.name,
        spend: totalSpend,
        revenue: totalRevenue,
        commission: commission,
        profit: profit
    };
}

// 6. Wybór najlepszej kampanii
function chooseTopCampaign(entries) {
    let topCampaign = null;

    for (const entry of entries) {
        if (topCampaign === null || entry.profit > topCampaign.profit) {
            topCampaign = entry;
        }
    }

    return topCampaign;
}

// 7. Generowanie raportu
function generateCampaignReport(campaigns) {
    const eligibleCampaigns = campaigns.filter(isEligibleCampaign);
    const campaignEntries = eligibleCampaigns.map(createCampaignEntry);

    let totalSpend = 0;
    let totalRevenue = 0;
    let totalCommission = 0;
    let totalProfit = 0;

    for (const entry of campaignEntries) {
        totalSpend += entry.spend;
        totalRevenue += entry.revenue;
        totalCommission += entry.commission;
        totalProfit += entry.profit;
    }

    return {
        campaignsCount: campaignEntries.length,
        totalSpend: totalSpend,
        totalRevenue: totalRevenue,
        totalCommission: totalCommission,
        totalProfit: totalProfit,
        topCampaign: chooseTopCampaign(campaignEntries),
        entries: campaignEntries
    };
}

// RAPORT KOŃCOWY
const raport = generateCampaignReport(campaigns);

console.log("=== MARKETING CAMPAIGN ENGINE ===");

for (const entry of raport.entries) {
    console.log(
        `${entry.name}: Spend ${entry.spend} PLN | Revenue ${entry.revenue} PLN | Commission ${entry.commission} PLN | Profit ${entry.profit} PLN`
    );
}

console.log("=== FINAL REPORT ===");
console.log("Campaigns:", raport.campaignsCount);
console.log("Total Spend:", raport.totalSpend);
console.log("Total Revenue:", raport.totalRevenue);
console.log("Total Commission:", raport.totalCommission);
console.log("Total Profit:", raport.totalProfit);
console.log("Top Campaign:", raport.topCampaign.name);
console.log("Top Profit:", raport.topCampaign.profit);