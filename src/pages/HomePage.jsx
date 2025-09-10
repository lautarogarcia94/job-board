import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HomeInfoCards from '../components/HomeInfoCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeInfoCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
