import { Suspense } from 'react';
import JobListings from '../components/JobListings';
import Spinner from '../components/Spinner';

const JobsPage = () => {
  return (
    <section className="px-4 py-6">
      <section className="px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Browse Jobs
          </h2>
          <Suspense fallback={<Spinner />}>
            <JobListings />
          </Suspense>
        </div>
      </section>
    </section>
  );
};

export default JobsPage;
