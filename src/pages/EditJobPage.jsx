import { useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { useState } from 'react';
import { updateJob } from '../api/jobs';
import { toast } from 'react-toastify';
import JobForm from '../components/forms/JobForm';

const EditJobPage = () => {
  const { jobPromise } = useLoaderData();
  const [defaultJob, setDefaultJob] = useState(null);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    jobPromise.then((loadedJob) => setDefaultJob(loadedJob));
  }, [jobPromise]);

  const submitForm = async (job) => {
    try {
      setLoadingUpdate(true);

      await updateJob(job);
      toast.success('Job updated');
      navigate(`/jobs/${job.id}`);
    } catch (e) {
      toast.error('Something went wrong while updating the job');
      console.log('Error while deleting a job', e);
    } finally {
      setLoadingUpdate(false);
    }
  };

  return (
    <>
      {!defaultJob ? (
        <section>
          <Spinner />
        </section>
      ) : (
        <section>
          <div className="container m-auto max-w-2xl py-24">
            <JobForm
              actionText="Update Job"
              initialJob={defaultJob}
              onSubmit={submitForm}
              isSubmitting={loadingUpdate}
              submittingButtonLabel="Updating Job..."
            />
          </div>
        </section>
      )}
    </>
  );
};

export default EditJobPage;
