import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import MainLayout from './layouts/MainLayout';
import JobPage from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
      <Route index element={<HomePage />} errorElement={<ErrorPage />} />
      <Route path="/jobs" element={<JobsPage />} errorElement={<ErrorPage />} />
      <Route
        path="/jobs/:id"
        element={<JobPage />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="/add-job"
        element={<AddJobPage />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="/edit-job/:id"
        element={<EditJobPage />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="*"
        element={
          <ErrorPage
            errorMessage="404 Not Found"
            errorDescription="This page does not exist"
            buttonAction="Go Back"
          />
        }
      />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
