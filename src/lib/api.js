const DOMAIN = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data';
const accessToken = 'Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';

export async function getDataJobs(jobsId) {
  const response = await fetch(DOMAIN, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': accessToken,
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch jobs.');
  }

  const addNumberStarts = data.map(item => Object.assign(item, { rating: Math.floor(Math.random() * 5) + 1 }));

  const sortedJobs = addNumberStarts.sort((job1, job2) => Date.parse(job2.updatedAt) - Date.parse(job1.updatedAt));

  if (jobsId) {
    const loadedJob = sortedJobs.filter(job => job.id === jobsId);

    return loadedJob[0];
  }

  const transformedJobs = [];

  for (const key in sortedJobs) {
    const jobObj = {
      id: key,
      ...sortedJobs[key],
    };

    transformedJobs.push(jobObj);
  }

  return transformedJobs;
}