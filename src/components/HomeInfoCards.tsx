import { informationCards } from '../constants/homeCards';
import InfoCard from './cards/InfoCard';
const HomeCards = () => {
  return (
    <section className="py-4 bg-white">
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
