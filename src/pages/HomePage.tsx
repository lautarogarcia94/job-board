import Hero from '../components/Hero';
import HomeInfoCards from '../components/HomeInfoCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';
import { Suspense } from 'react';
import Spinner from '../components/Spinner';
import ErrorBoundary from '../components/ErrorBoundary';
import { queryClient } from '../query/reactQuery';

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeInfoCards />
      <section className="px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Recent Jobs
          </h2>
          <ErrorBoundary
            errorMessage="Error loading data"
            errorDescription="We couldn't fetch the information. Please try again later."
            actionLabel="Reload"
            action={() => queryClient.resetQueries({ queryKey: ['jobs'] })}
          >
            <Suspense fallback={<Spinner />}>
              <JobListings isHome={true} />
            </Suspense>
          </ErrorBoundary>
        </div>
      </section>
      <section className="bg-white">
        <ViewAllJobs />
      </section>
    </>
  );
};

export default HomePage;
