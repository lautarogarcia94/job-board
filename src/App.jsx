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
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/jobs/:id" element={<JobPage />} />
      <Route path="/add-job" element={<AddJobPage />} />
      <Route path="/edit-job/:id" element={<EditJobPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
