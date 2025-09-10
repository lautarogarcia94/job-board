import InfoCard from './cards/InfoCard';
const HomeCards = () => {
  const informationCards = [
    {
      title: 'For Developers',
      description: 'Browse our React jobs and start your career today',
      link: '/jobs',
      linkText: 'Browse Jobs',
      bg: 'bg-gray-100',
      linkClass: 'bg-black hover:bg-gray-700',
    },
    {
      title: 'For Employers',
      description: 'List your job to find the perfect developer for the role',
      link: '/add-job',
      linkText: 'Add Job',
      bg: 'bg-indigo-100',
      linkClass: 'bg-indigo-500 hover:bg-indigo-600',
    },
  ];
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          {informationCards.map((informationCard, index) => (
            <InfoCard key={index} data={informationCard} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
