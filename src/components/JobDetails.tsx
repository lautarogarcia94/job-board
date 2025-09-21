import { deleteJob, getJob } from '../api/jobs';
import { toast } from 'react-toastify';
import ActionButton from './ActionButton';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Card from './cards/Card';
import JobLocationMarker from './JobLocationMarker';
import { useState } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { queryClient } from '../query/reactQuery';
import { Job } from '../types/job';

const JobDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { data: job } = useSuspenseQuery<Job>({
    queryKey: ['job', id],
    queryFn: () => {
      if (!id) throw new Error('Job id is required');
      return getJob(id);
    },
  });

  const [loadingDelete, setLoadingDelete] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async (id: string) => {
    try {
      setLoadingDelete(true);
      await deleteJob(id);
      toast.success('Job deleted');

      queryClient.invalidateQueries({ queryKey: ['jobs'] });

      navigate('/jobs');
    } catch (e) {
      toast.error('Something went wrong while deleting the job');
      console.log('Error while deleting a job', e);
    } finally {
      setLoadingDelete(false);
    }
  };

  if (!job) {
    return (
      <section className="container m-auto py-10 px-6">
        <p>Job not found.</p>
      </section>
    );
  }

  return (
    !!job && (
      <section>
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-[70%_30%] w-full gap-6">
            <main>
              <Card className="p-6 text-center md:text-left">
                <div className="text-gray-500 mb-4">{job.type}</div>
                <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
                <JobLocationMarker location={job.location} />
              </Card>

              <Card className="p-6 mt-6">
                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                  Job Description
                </h3>

                <p className="mb-4">{job.description}</p>

                <h3 className="text-indigo-800 text-lg font-bold mb-2">
                  Salary
                </h3>

                <p className="mb-4">{job.salary} / Year</p>
              </Card>
            </main>

            <aside>
              <Card className="p-6 ">
                <h3 className="text-xl font-bold mb-6">Company Info</h3>

                <h2 className="text-2xl">{job.company.name}</h2>

                <p className="my-2">{job.company.description}</p>

                <hr className="my-4" />

                <h3 className="text-xl">Contact Email:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {job.company.contactEmail}
                </p>

                <h3 className="text-xl">Contact Phone:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {job.company.contactPhone ? job.company.contactPhone : '-'}
                </p>
              </Card>
              <Card className="p-6 mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                <Link
                  to={`/edit-job/${job.id}`}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Edit Job
                </Link>
                <ActionButton
                  loading={loadingDelete}
                  normalText="Delete Job"
                  loadingText="Deleting Job..."
                  bg="bg-red-500 hover:bg-red-600"
                  className=" mt-4 block"
                  type="button"
                  onClickMethod={() => handleDelete(job.id)}
                />
              </Card>
            </aside>
          </div>
        </div>
      </section>
    )
  );
};

export default JobDetails;
