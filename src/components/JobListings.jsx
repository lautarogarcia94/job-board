import { Suspense } from 'react';
import JobCard from './cards/JobCard';
import { Await, useLoaderData } from 'react-router-dom';
import Spinner from './Spinner';

const JobListings = ({ isHome }) => {
  const { jobsPromise } = useLoaderData();

  return (
    <section className="px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
        <Suspense fallback={<Spinner />}>
          <Await resolve={jobsPromise}>
            {(jobs) => (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {jobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            )}
          </Await>
        </Suspense>
      </div>
    </section>
  );
};

export default JobListings;
