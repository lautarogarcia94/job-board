import { ClipLoader } from 'react-spinners';

const Spinner = ({
  color = '#4338ca',
  size = 150,
  override: customOverride,
}) => {
  const defaultOverride = {
    display: 'block',
    margin: '100px auto',
  };

  const mergedOverride = { ...defaultOverride, ...customOverride };

  return <ClipLoader color={color} cssOverride={mergedOverride} size={size} />;
};

export default Spinner;
