export const formatMatchDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const isUpcoming = (date) => {
  return new Date(date) > new Date();
};

export const getWeekNumber = (date) => {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
};

export const groupMatchesByWeek = (matches) => {
  return matches.reduce((acc, match) => {
    const week = getWeekNumber(new Date(match.date));
    if (!acc[week]) acc[week] = [];
    acc[week].push(match);
    return acc;
  }, {});
};