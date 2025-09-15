import { useState } from 'react';
import { addJob } from '../api/jobs';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import JobForm from '../components/forms/JobForm';

const AddJobPage = () => {
  const navigate = useNavigate();
  const [loadingCreate, setLoadingCreate] = useState(false);

  const defaultJob = {
    title: '',
    type: 'Full-Time',
    description: '',
    location: '',
    salary: 'Under $50K',
    company: {
      name: '',
      description: '',
      contactEmail: '',
      contactPhone: '',
    },
  };

  const submitForm = async (job) => {
    try {
      setLoadingCreate(true);

      await addJob(job);
      toast.success('Job created');
      navigate('/jobs');
    } catch (e) {
      toast.error('Something went wrong while creating the job');
      console.log('Error while deleting a job', e);
    } finally {
      setLoadingCreate(false);
    }
  };

  return (
    <section>
      <div className="container m-auto max-w-2xl py-24">
        <JobForm
          actionText="Add Job"
          initialJob={defaultJob}
          onSubmit={submitForm}
          isSubmitting={loadingCreate}
          submittingButtonLabel="Adding Job..."
        />
      </div>
    </section>
  );
};

export default AddJobPage;
