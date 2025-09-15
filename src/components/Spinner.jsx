import { ClipLoader } from 'react-spinners';

const Spinner = ({ loading, size = 150, override: customOverride }) => {
  const defaultOverride = {
    display: 'block',
    margin: '100px auto',
  };

  const mergedOverride = { ...defaultOverride, ...customOverride };

  return (
    <ClipLoader
      color="#4338ca"
      loading={loading}
      cssOverride={mergedOverride}
      size={size}
    />
  );
};

export default Spinner;
