import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { Suspense } from 'react';
import JobFormContainer from '../components/JobFormContainer';
import BackLink from '../components/BackLink';

const EditJobPage = () => {
  const { id } = useParams();

  return (
    <>
      <BackLink linkTo={`/jobs/${id}`} message="Back to Job Description" />
      <div className="container m-auto max-w-2xl py-10">
        <Suspense fallback={<Spinner />}>
          <JobFormContainer jobId={id} />
        </Suspense>
      </div>
    </>
  );
};

export default EditJobPage;
