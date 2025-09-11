import JobCard from './cards/JobCard';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Spinner from './Spinner';

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await getJobs(isHome);
        setJobs(data);
      } catch (error) {
        console.log(
          'Something went wrong while fetching data from server',
          error
        );
        toast.error('Something went wrong while fetching data from server', {
          toastId: 'fetch-error',
        });
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [isHome]);

  const getJobs = async (isHome) => {
    const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
    const res = await fetch(apiUrl);

    if (!res.ok) {
      throw new Error('Failed to fetch jobs');
    }

    return await res.json();
  };

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
