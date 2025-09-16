import Spinner from '../components/Spinner';
import { Suspense } from 'react';
import JobDetails from '../components/JobDetails';
import BackLink from '../components/BackLink';

const JobPage = () => {
  return (
    <>
      <BackLink linkTo="/jobs" message="Back to Job Listings" />
      <Suspense fallback={<Spinner />}>
        <JobDetails />
      </Suspense>
    </>
  );
};

export default JobPage;
