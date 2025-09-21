import JobCard from './cards/JobCard';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getJobs } from '../api/jobs';

type JobListingsProps = {
  isHome?: boolean;
};
const JobListings = ({ isHome = false }: JobListingsProps) => {
  const DEFAULT_HOM_PAGE_JOBS = '3';
  const limit = isHome ? DEFAULT_HOM_PAGE_JOBS : undefined;

  const { data: jobs } = useSuspenseQuery({
    queryKey: ['jobs', limit],
    queryFn: () => getJobs(limit),
  });

  return (
    !!jobs && (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {jobs?.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    )
  );
};

export default JobListings;
