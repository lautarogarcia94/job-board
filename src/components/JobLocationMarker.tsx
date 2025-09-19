import { FaMapMarker } from 'react-icons/fa';

type JobLocationMarkerProps = {
  location: string;
};

const JobLocationMarker = ({ location }: JobLocationMarkerProps) => {
  return (
    <div className="text-orange-700 mb-3 flex items-center">
      <FaMapMarker className="inline text-lg mb-1 mr-1 text-orange-700" />
      {location}
    </div>
  );
};

export default JobLocationMarker;
