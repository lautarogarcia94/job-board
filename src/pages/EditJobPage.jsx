import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { Suspense } from 'react';
import JobFormContainer from '../components/JobFormContainer';

const EditJobPage = () => {
  const { id } = useParams();

  return (
    <section>
      <div className="container m-auto max-w-2xl py-24">
        <Suspense fallback={<Spinner />}>
          <JobFormContainer jobId={id} />
        </Suspense>
      </div>
    </section>
  );
};

export default EditJobPage;
