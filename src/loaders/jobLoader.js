import { getJob, getJobs } from '../api/jobs';

const DEFAULT_JOBS_HOME_PAGE = 3;

export const jobLoader = async ({ params }) => {
  if (!params.id) {
    throw new Response('Job ID required', { status: 400 });
  }
  return { jobPromise: getJob(params.id) };
};

export const allJobsLoader = async () => {
  return { jobsPromise: getJobs() };
};

export const customJobsLoader = async () => {
  return { jobsPromise: getJobs(DEFAULT_JOBS_HOME_PAGE) };
};
