import Card from './Card';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import JobLocationMarker from '../JobLocationMarker';
import { Job } from '../../types/job';

type JobCardProps = {
  job: Job;
};

const JobCard = ({ job }: JobCardProps) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const getDescription = (): string =>
    showFullDescription || job.description.length <= 90
      ? job.description
      : job.description.substring(90) + '...';

  const description = getDescription();

  const toggleDescription = (): void => {
    setShowFullDescription((prev) => !prev);
  };

  const renderButtonFullDescription = job.description.length > 90;

  return (
    <Card className="relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>

        <div className="mb-5">{description}</div>
        {renderButtonFullDescription && (
          <button
            className="text-indigo-500 mb-5 hover:text-indigo-600"
            onClick={toggleDescription}
          >
            {showFullDescription ? 'Less' : 'More'}
          </button>
        )}

        <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <JobLocationMarker location={job.location} />
          <Link
            to={`/jobs/${job.id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default JobCard;
