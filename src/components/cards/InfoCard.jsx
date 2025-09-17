import { Link } from 'react-router-dom';
import Card from './Card';

const InfoCard = ({ data }) => {
  return (
    <Card className="p-6" bg={data.bg}>
      <h2 className="text-2xl font-bold">{data.title}</h2>
      <p className="mt-2 mb-4">{data.description}</p>
      <Link
        to={data.link}
        className={`${data.linkClass} inline-block text-white rounded-md px-4 py-2`}
      >
        {data.linkText}
      </Link>
    </Card>
  );
};

export default InfoCard;
