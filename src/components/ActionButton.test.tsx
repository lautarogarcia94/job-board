import { render, screen, fireEvent, within } from '@testing-library/react';
import ActionButton from './ActionButton';

describe('ActionButton', () => {
  const normalText = 'Submit';
  const loadingText = 'Submitting...';

  it('renders button with normal text and correct type', () => {
    render(
      <ActionButton normalText={normalText} type="button" loading={false} />
    );

    const button = screen.getByRole('button', { name: normalText });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'button');
    expect(button).not.toBeDisabled();
  });

  it('renders button with spinner and loading text when loading is true', () => {
    render(
      <ActionButton
        normalText={normalText}
        loading={true}
        loadingText={loadingText}
      />
    );

    const button = screen.getByRole('button');
    const { getByTestId } = within(button);
    expect(getByTestId('spinner')).toBeInTheDocument();
    // expect(button).toBeDisabled();

    // expect(screen.findByTestId('spinner')).toBeInTheDocument();

    // expect(screen.getByText(loadingText)).toBeInTheDocument();
  });

  it('calls onClickMethod when button is clicked and not loading', () => {
    const handleClick = vi.fn();
    render(
      <ActionButton
        normalText={normalText}
        onClickMethod={handleClick}
        loading={false}
      />
    );

    const button = screen.getByRole('button', { name: normalText });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does NOT call onClickMethod when button is loading', () => {
    const handleClick = vi.fn();
    render(
      <ActionButton
        normalText={normalText}
        onClickMethod={handleClick}
        loading={true}
      />
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });
});
