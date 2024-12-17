export const calculateWinRate = (wins, totalGames) => {
  if (totalGames === 0) return '0.00%';
  return ((wins / totalGames) * 100).toFixed(2) + '%';
};

export const sortByColumn = (data, column, direction = 'asc') => {
  return [...data].sort((a, b) => {
    if (direction === 'asc') {
      return a[column] > b[column] ? 1 : -1;
    }
    return a[column] < b[column] ? 1 : -1;
  });
};

export const filterDataByTier = (data, tier) => {
  return data.filter(item => item.tier === tier);
};