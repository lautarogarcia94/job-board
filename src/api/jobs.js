export const getJob = async (id) => {
  const apiUrl = `/api/jobs/${id}`;

  return fetchJobs(apiUrl);
};

export const getJobs = async (limit) => {
  let apiUrl = '/api/jobs';

  if (limit) {
    apiUrl += `?_limit=${limit}`;
  }

  return fetchJobs(apiUrl);
};

const fetchJobs = async (apiUrl) => {
  const res = await fetch(apiUrl);

  if (!res.ok) {
    throw new Error('Failed to fetch jobs');
  }

  return await res.json();
};
