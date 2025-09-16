import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { FaArrowLeft } from 'react-icons/fa';
import { Suspense } from 'react';
import JobDetails from '../components/JobDetails';

const JobPage = () => {
  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Job Listings
          </Link>
        </div>
      </section>
      <Suspense fallback={<Spinner />}>
        <JobDetails />
      </Suspense>
    </>
  );
};

export default JobPage;
