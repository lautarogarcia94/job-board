import Card from './Card';

const InfoCard = ({ data }) => {
  console.log('informationCard:', data);
  return (
    <Card className="p-6" bg={data.bg}>
      <h2 className="text-2xl font-bold">{data.title}</h2>
      <p className="mt-2 mb-4">{data.description}</p>
      <a
        href={data.link}
        className={`${data.linkClass} inline-block text-white rounded-lg px-4 py-2`}
      >
        {data.linkText}
      </a>
    </Card>
  );
};

export default InfoCard;
