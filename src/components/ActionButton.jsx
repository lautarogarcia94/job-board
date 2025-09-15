import clsx from 'clsx';
import Spinner from './Spinner';

const ActionButton = ({
  loading,
  normalText,
  loadingText,
  className,
  type = 'submit',
  onClickMethod,
}) => {
  return (
    <button
      className={clsx(
        'text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline',
        className || 'bg-indigo-500 hover:bg-indigo-600'
      )}
      type={type}
      onClick={onClickMethod}
    >
      {loading ? (
        <>
          <Spinner
            color="white"
            size={15}
            override={{
              display: 'inline-block',
              margin: 0,
              marginRight: '0.5rem',
            }}
          />
          {loadingText}
        </>
      ) : (
        normalText
      )}
    </button>
  );
};

export default ActionButton;
