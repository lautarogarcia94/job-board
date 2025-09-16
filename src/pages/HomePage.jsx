import Hero from '../components/Hero';
import HomeInfoCards from '../components/HomeInfoCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';
import { Suspense } from 'react';
import Spinner from '../components/Spinner';

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeInfoCards />
      <section className="px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Recent Jobs
          </h2>
          <Suspense fallback={<Spinner />}>
            <JobListings isHome={true} />
          </Suspense>
        </div>
      </section>
      <section className="bg-white">
        <ViewAllJobs />
      </section>
    </>
  );
};

export default HomePage;
