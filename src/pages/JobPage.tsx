import Spinner from '../components/Spinner';
import { Suspense } from 'react';
import JobDetails from '../components/JobDetails';
import BackLink from '../components/BackLink';
import ErrorBoundary from '../components/ErrorBoundary';
import { queryClient } from '../query/reactQuery';
import { useParams } from 'react-router-dom';

const JobPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <BackLink linkTo="/jobs" message="Back to Job Listings" />
      <ErrorBoundary
        errorMessage="Error loading data"
        errorDescription="We couldn't fetch the information. Please try again later."
        actionLabel="Reload"
        action={() => queryClient.resetQueries({ queryKey: ['job', id] })}
      >
        <Suspense fallback={<Spinner />}>
          <JobDetails />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default JobPage;
