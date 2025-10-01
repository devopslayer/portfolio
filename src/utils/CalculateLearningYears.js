export function CalculateLearningYears(
  education = [],
  experience = [],
  certifications = [],
  projects = [],
  excludeCurrentYear = false
) {
  const currentYear = excludeCurrentYear
    ? new Date().getFullYear() - 1
    : new Date().getFullYear();

  const parseDuration = (duration) => {
    if (!duration) return null;
    const [start, end] = duration.split(" - ");
    const startYear = new Date(start + " 1").getFullYear();
    const endYear = end ? new Date(end + " 1").getFullYear() : startYear;
    return { startYear, endYear };
  };

  const eduIntervals = education
    .map((e) => parseDuration(e.duration))
    .filter(Boolean);
  eduIntervals.sort((a, b) => a.startYear - b.startYear);

  const eduYears = new Set();
  eduIntervals.forEach(({ startYear, endYear }) => {
    for (let y = startYear; y <= endYear; y++) {
      eduYears.add(y);
    }
  });

  const activeYears = new Set();

  experience.forEach(({ duration }) => {
    const interval = parseDuration(duration);
    if (interval) {
      for (let y = interval.startYear; y <= interval.endYear; y++) {
        activeYears.add(y);
      }
    }
  });

  certifications.forEach(({ date }) => {
    if (date) {
      const year = new Date(date + " 1").getFullYear();
      activeYears.add(year);
    }
  });

  projects.forEach(({ date }) => {
    if (date) {
      const year = new Date(date + " 1").getFullYear();
      activeYears.add(year);
    }
  });

  let gapYearsCount = 0;

  for (let i = 1; i < eduIntervals.length; i++) {
    const prevEnd = eduIntervals[i - 1].endYear;
    const currStart = eduIntervals[i].startYear;

    if (activeYears.has(prevEnd)) {
      gapYearsCount++;
    }

    for (let y = prevEnd + 1; y < currStart; y++) {
      if (activeYears.has(y)) {
        gapYearsCount++;
      }
    }
  }

  const lastEduYear = eduIntervals.length
    ? eduIntervals[eduIntervals.length - 1].endYear
    : null;
  let postEduYearsCount = 0;

  if (lastEduYear !== null) {
    for (let y = lastEduYear + 1; y <= currentYear; y++) {
      if (activeYears.has(y)) {
        postEduYearsCount++;
      }
    }
  }

  const totalGapLearning = gapYearsCount + postEduYearsCount;

  return totalGapLearning;
}
