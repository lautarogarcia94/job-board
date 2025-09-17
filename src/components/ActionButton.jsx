import clsx from 'clsx';
import Spinner from './Spinner';

const ActionButton = ({
  loading,
  normalText,
  loadingText,
  className,
  bg,
  shape,
  type = 'submit',
  onClickMethod,
}) => {
  return (
    <button
      className={clsx(
        'text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline',
        bg || 'bg-indigo-500 hover:bg-indigo-600',
        shape || 'rounded-full w-full',
        className
      )}
      type={type}
      onClick={onClickMethod}
      disabled={loading}
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
