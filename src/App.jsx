import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeInfoCards from './components/HomeInfoCards';
import JobListings from './components/JobListings';
import ViewAllJobs from './components/ViewAllJobs';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeInfoCards />
      <JobListings />
      <ViewAllJobs />
    </>
  );
};

export default App;
