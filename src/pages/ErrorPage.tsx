import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ActionButton from '../components/ActionButton';
import { ButtonAction } from '../types/ui';

type ErrorPageProps = {
  errorMessage?: string;
  errorDescription?: string;
  buttonAction?: ButtonAction;
};

const ErrorPage = ({
  errorMessage,
  errorDescription,
  buttonAction,
}: ErrorPageProps) => {
  const renderButton = (action?: ErrorPageProps['buttonAction']) => {
    if (!action) return null;

    if (action.linkTo) {
      return (
        <Link
          to={action.linkTo}
          className="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
        >
          {action.label}
        </Link>
      );
    }

    if (action.onClick) {
      return (
        <ActionButton
          onClickMethod={action.onClick}
          type="button"
          normalText={action.label}
          shape="rounded-md w-auto"
        />
      );
    }

    return null;
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
