import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addJob, getJob, updateJob } from '../api/jobs';
import { toast } from 'react-toastify';
import { useSuspenseQuery } from '@tanstack/react-query';
import JobForm from './forms/JobForm';
import { queryClient } from '../query/reactQuery';
import { Job, NewJob } from '../types/job';

type JobFormContainerProps = { jobId?: string };

const JobFormContainer = ({ jobId }: JobFormContainerProps) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const isUpdate = !!jobId;

  const defaultJob: NewJob = {
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

  const { data: job } = useSuspenseQuery<Job>({
    queryKey: ['job', jobId],
    queryFn: () => getJob(jobId!),
    initialData: !jobId ? (defaultJob as Job) : undefined,
  });

  const submitForm = async (job: Job | NewJob) => {
    try {
      setLoading(true);

      const action = isUpdate ? updateJob : addJob;
      const result = await action(job as Job);

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

  const invalidateCaches = (id: string) => {
    queryClient.invalidateQueries({ queryKey: ['job', id] });
    queryClient.invalidateQueries({ queryKey: ['jobs'] });
  };

  return (
    <JobForm
      actionText={isUpdate ? 'Update Job' : 'Create Job'}
      initialJob={job!}
      onSubmit={submitForm}
      isSubmitting={loading}
      submittingButtonLabel={isUpdate ? 'Updating Job...' : 'Creating Job...'}
    />
  );
};

export default JobFormContainer;
