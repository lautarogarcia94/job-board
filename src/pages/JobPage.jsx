import Spinner from '../components/Spinner';
import { Suspense } from 'react';
import JobDetails from '../components/JobDetails';
import BackLink from '../components/BackLink';
import ErrorBoundary from '../components/ErrorBoundary';

const JobPage = () => {
  return (
    <>
      <BackLink linkTo="/jobs" message="Back to Job Listings" />
      <ErrorBoundary
        errorMessage="Error loading data"
        errorDescription="We couldn't fetch the information. Please try again later."
        action="Reload"
      >
        <Suspense fallback={<Spinner />}>
          <JobDetails />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default JobPage;
