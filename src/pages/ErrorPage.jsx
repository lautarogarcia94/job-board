import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ErrorPage = ({ errorMessage, errorDescription }) => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
      <FaExclamationTriangle className="text-yellow-400 text-6xl mb-4" />
      <h1 className="text-6xl font-bold mb-4">
        {errorMessage ? errorMessage : '500 Internal Server Error'}
      </h1>
      <p className="text-xl mb-5">
        {errorDescription ? errorDescription : 'Something went wrong'}
      </p>
      <Link
        to="/"
        className="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
      >
        Go Back
      </Link>
    </section>
  );
};

export default ErrorPage;
