import { Job, NewJob } from '../types/job';

const API_URL = '/api/jobs/';

export const updateJob = async (job: Job): Promise<Job> => {
  const res = await fetch(API_URL + job.id, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(job),
  });

  if (!res.ok) {
    throw new Error(`Failed to delete job with id: ${job.id}`);
  }
  return res.json();
};

export const deleteJob = async (id: string): Promise<boolean> => {
  const res = await fetch(API_URL + id, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!res.ok) {
    throw new Error(`Failed to delete job with id: ${id}`);
  }
  return res.json();
};

export const addJob = async (job: NewJob): Promise<Job> => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(job),
  });

  if (!res.ok) {
    throw new Error(`Failed to create job: ${JSON.stringify(job)}`);
  }
  return res.json();
};

export const getJob = async (id: string): Promise<Job[]> => {
  return fetchJobsWithParam(API_URL + id);
};

export const getJobs = async (limit?: string): Promise<Job[]> => {
  let apiUrl = API_URL;

  if (limit) {
    apiUrl += `?_limit=${limit}`;
  }

  return fetchJobsWithParam(apiUrl);
};

export const fetchJobsWithParam = async (apiUrl: string): Promise<Job[]> => {
  const res = await fetch(apiUrl);

  if (!res.ok) {
    throw new Error('Failed to fetch jobs');
  }

  return res.json();
};
