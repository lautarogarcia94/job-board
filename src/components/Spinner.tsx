import { ClipLoader } from 'react-spinners';
import { LengthType } from 'react-spinners/helpers/props';

type CssOverride = {
  display?: string;
  margin?: number;
  marginRight?: string;
};

type SpinnerProps = {
  color?: string;
  size?: LengthType;
  override?: CssOverride;
  dataTestId?: string;
};

const Spinner = ({
  color = '#4338ca',
  size = 150,
  override: customOverride,
  dataTestId: testId,
}: SpinnerProps) => {
  const defaultOverride = {
    display: 'block',
    margin: '100px auto',
  };

  const mergedOverride = { ...defaultOverride, ...customOverride };

  return (
    <ClipLoader
      color={color}
      cssOverride={mergedOverride}
      size={size}
      data-testid={testId}
    />
  );
};

export default Spinner;
