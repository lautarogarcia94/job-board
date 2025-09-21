import { Suspense } from 'react';
import JobListings from '../components/JobListings';
import Spinner from '../components/Spinner';
import ErrorBoundary from '../components/ErrorBoundary';
import { queryClient } from '../query/reactQuery';

const JobsPage = () => {
  return (
    <section className="px-4 py-6">
      <section className="px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Browse Jobs
          </h2>
          <ErrorBoundary
            errorMessage="Error loading data"
            errorDescription="We couldn't fetch the information. Please try again later."
            actionLabel="Reload"
            action={() => queryClient.resetQueries({ queryKey: ['jobs'] })}
          >
            <Suspense fallback={<Spinner />}>
              <JobListings />
            </Suspense>
          </ErrorBoundary>
        </div>
      </section>
    </section>
  );
};

export default JobsPage;
