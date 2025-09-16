import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import ScrollToTop from '../components/ScrollToTop';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-indigo-50">
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
