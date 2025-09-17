import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addJob, getJob, updateJob } from '../api/jobs';
import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';
import JobForm from './forms/JobForm';
import { queryClient } from '../query/reactQuery';

const JobFormContainer = ({ jobId }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const isUpdate = jobId !== undefined;

  const defaultJob = {
    title: '',
    type: 'Full-Time',
    description: '',
    location: '',
    salary: 'Under $50K / Year',
    company: {
      name: '',
      description: '',
      contactEmail: '',
      contactPhone: '',
    },
  };

  const { data: job } = useQuery({
    queryKey: ['job', jobId],
    queryFn: () => getJob(jobId),
    enabled: !!jobId,
    suspense: !!jobId,
    initialData: !jobId ? defaultJob : undefined,
  });

  const submitForm = async (job) => {
    try {
      setLoading(true);

      const action = isUpdate ? updateJob : addJob;
      const result = await action(job);

      toast.success(isUpdate ? 'Job updated' : 'Job created');

      invalidateCaches(result.id);

      navigate(`/jobs/${result.id}`);
    } catch (e) {
      toast.error('Something went wrong while updating the job');
      console.log('Error while deleting a job', e);
    } finally {
      setLoading(false);
    }
  };

  const invalidateCaches = (id) => {
    queryClient.invalidateQueries(['job', id]);
    queryClient.invalidateQueries(['jobs', 3]);
    queryClient.invalidateQueries(['jobs', undefined]);
  };

  return (
    <JobForm
      actionText={isUpdate ? 'Update Job' : 'Create Job'}
      initialJob={job}
      onSubmit={submitForm}
      isSubmitting={loading}
      submittingButtonLabel={isUpdate ? 'Updating Job...' : 'Creating Job...'}
    />
  );
};

export default JobFormContainer;
