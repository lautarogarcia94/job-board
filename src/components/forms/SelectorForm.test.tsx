import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useForm } from 'react-hook-form';
import SelectorForm from './SelectorForm';

describe('SelectorForm', () => {
  type FormValues = {
    mySelect: string;
  };

  const label = 'Selector Label';
  const name: keyof FormValues = 'mySelect';
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  const TestForm = () => {
    const {
      register,
      formState: { errors },
    } = useForm<FormValues>();
    errors[name] = { type: 'required', message: 'This field is required' };
    return (
      <SelectorForm
        label={label}
        name={name}
        options={options}
        register={register}
        errors={errors}
        required
      />
    );
  };

  it('renders label, select, and options correctly', () => {
    render(<TestForm />);

    expect(screen.getByText(label)).toBeInTheDocument();
    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();

    options.forEach((option) => {
      expect(screen.getByRole('option', { name: option })).toBeInTheDocument();
    });
  });

  it('shows error message if errors are provided', () => {
    render(<TestForm />);
    expect(screen.getByText(`${label} is required`)).toBeInTheDocument();
  });

  it('allows selecting an option', async () => {
    render(<TestForm />);
    const select = screen.getByRole('combobox');

    await userEvent.selectOptions(select, 'Option 3');
    expect((select as HTMLSelectElement).value).toBe('Option 3');
  });
});
