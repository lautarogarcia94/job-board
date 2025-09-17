import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ActionButton from '../components/ActionButton';

const ErrorPage = ({ errorMessage, errorDescription, buttonAction }) => {
  const renderButton = (actionType) => {
    switch (actionType) {
      case 'Go Back':
        return (
          <Link
            to="/"
            className="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
          >
            Go Back
          </Link>
        );
      case 'Reload':
        return (
          <ActionButton
            onClickMethod={() => window.location.reload()}
            type="button"
            normalText="Reload"
            shape="rounded-md w-auto"
          />
        );
      default:
        return null; // No hay botón para errores globales 500
    }
  };

  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
      <FaExclamationTriangle className="text-yellow-400 text-6xl mb-4" />
      <h1 className="text-6xl font-bold mb-4">
        {errorMessage ? errorMessage : '500 Internal Server Error'}
      </h1>
      <p className="text-xl mb-5">
        {errorDescription ? errorDescription : 'Something went wrong'}
      </p>

      {renderButton(buttonAction)}
    </section>
  );
};

export default ErrorPage;
