import clsx from 'clsx';
import Spinner from './Spinner';

type ActionButtonProps = {
  loading?: boolean;
  normalText: string;
  loadingText?: string;
  className?: string;
  bg?: string;
  shape?: string;
  type?: 'button' | 'submit' | 'reset';
  onClickMethod?: () => void;
};
const ActionButton = ({
  loading,
  normalText,
  loadingText,
  className,
  bg,
  shape,
  type = 'submit',
  onClickMethod,
}: ActionButtonProps) => {
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
            dataTestId="spinner"
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
