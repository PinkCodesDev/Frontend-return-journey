function createCampaignManager(companyName) {
    let campaigns = [];
    let totalProfit = 0;
    function addCampaign(name, spend, revenue) {
        let profit = revenue - spend;
        let status = 0;
        let campaign = {
            name: name,
            spend: spend,
            revenue: revenue,
            profit: profit,
            status: status
        }
        campaigns.push(campaign);
        totalProfit += profit;
        if (profit > 0) {
            status = "Profitable"
        }
        if (profit < 0) {
            status = "Loss"
        }
        if (profit === 0) {
            status = "Break-even"
        }
        campaign.status = status;   
        return `${campaign.name}: ${campaign.profit} PLN - ${campaign.status}`;
}

    function getSuccessfulCampaigns() {
        return campaigns.filter(campaign => campaign.profit >= 2500).map(campaign => `${campaign.name}: ${campaign.profit} PLN`)
    }
    function getSummary() {
        return `${companyName} - Campaigns:${campaigns.length} - Total profit: ${totalProfit} PLN`
    }
return {
    addCampaign,
    getSuccessfulCampaigns,
    getSummary
}
}


const pinkCodes = createCampaignManager("PinkCodes");
const teanorama = createCampaignManager("Teanorama");

console.log(pinkCodes.addCampaign("Google Ads", 2000, 6000));
console.log(pinkCodes.addCampaign("Meta Ads", 1800, 2900));
console.log(pinkCodes.addCampaign("Launch", 2500, 1500));

console.log(teanorama.addCampaign("Black Friday", 3000, 7000));

console.log(pinkCodes.getSuccessfulCampaigns());
console.log(teanorama.getSuccessfulCampaigns());

console.log(pinkCodes.getSummary());
console.log(teanorama.getSummary());
