import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import MainLayout from './layouts/MainLayout';
import NotFoundPage from './pages/NotFoundPage';
import JobPage from './pages/JobPage';
import {
  allJobsLoader,
  customJobsLoader,
  jobLoader,
} from './loaders/jobLoader';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} loader={customJobsLoader} />
      <Route path="/jobs" element={<JobsPage />} loader={allJobsLoader} />
      <Route path="/jobs/:id" element={<JobPage />} loader={jobLoader} />
      <Route path="/add-job" element={<AddJobPage />} />
      <Route
        path="/edit-job/:id"
        element={<EditJobPage />}
        loader={jobLoader}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
