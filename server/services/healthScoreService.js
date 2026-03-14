const calculateHealthScore = (metrics) => {
  let score = 0;

  // Revenue Growth (Max: 25)
  if (metrics.growthRate >= 20) score += 25;
  else if (metrics.growthRate >= 10) score += 18;
  else if (metrics.growthRate >= 5) score += 10;
  else score += 5;

  // Customer Traction (Max 20)
  if (metrics.customerCount >= 1000) score += 20;
  else if (metrics.customerCount >= 500) score += 15;
  else if (metrics.customerCount >= 100) score += 10;
  else score += 5;

  // Burn Efficiency (Max 20)
  if (metrics.burnRate <= metrics.monthlyRevenue * 0.5) score += 20;
  else if (metrics.burnRate <= metrics.monthlyRevenue) score += 15;
  else score += 5;

  // Market Size (Max 20)
  if (metrics.marketSize >= 1000000000) score += 20;
  else if (metrics.marketSize >= 100000000) score += 15;
  else if (metrics.marketSize >= 10000000) score += 10;
  else score += 5;

  // Team Strength (Max 15)
  // Placeholder for now (later we add team data)
  score += 10;

  return score;
};

module.exports = {
  calculateHealthScore,
};
