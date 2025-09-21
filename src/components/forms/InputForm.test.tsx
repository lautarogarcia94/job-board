import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import InputForm from './InputForm';
import { useForm } from 'react-hook-form';

describe('InputForm', () => {
  const label = 'Input Form Label';
  const name = 'Input Form Name';
  const placeholder = 'Input Form Placeholder';
  const errorMessage = 'This field is required';

  it('renders input with correct label, placeholder and id', () => {
    render(<InputForm label={label} name={name} placeholder={placeholder} />);

    expect(screen.getByText(label)).toBeInTheDocument();

    const input = screen.getByPlaceholderText(placeholder);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('id', name);
    expect(input).toHaveAttribute('type', 'text');
  });

  it('renders input with correct label, placeholder, id and type', () => {
    render(
      <InputForm
        label={label}
        name={name}
        placeholder={placeholder}
        type="email"
      />
    );

    const input = screen.getByPlaceholderText(placeholder);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'email');
  });

  it('renders errorMessage if provided', () => {
    render(
      <InputForm
        label={label}
        name={name}
        placeholder={placeholder}
        errorMessage={errorMessage}
      />
    );
    expect(
      screen.getByText((content) => content.includes('This field is required'))
    ).toBeInTheDocument();
  });

  it('focus on input when label is clicked', async () => {
    render(<InputForm label={label} name={name} placeholder={placeholder} />);

    const input = screen.getByPlaceholderText(placeholder);
    const labelElement = screen.getByText(label);

    await userEvent.click(labelElement);
    expect(input).toHaveFocus();
  });

  it('renders input correctly when using field prop (React Hook Form Controller simulation)', () => {
    const mockField = {
      name,
      value: 'My Job',
    };
    render(
      <InputForm label={label} placeholder={placeholder} field={mockField} />
    );
    const input = screen.getByPlaceholderText(placeholder) as HTMLInputElement;

    expect(input.value).toBe('My Job');
    expect(input.id).toBe(name);
  });

  it('renders input correctly when using register prop (React Hook Form simulation)', () => {
    const TestForm = () => {
      const { register } = useForm();
      return (
        <InputForm
          label={label}
          placeholder={placeholder}
          name={name}
          register={register}
        />
      );
    };
    render(<TestForm />);
    const input = screen.getByPlaceholderText(placeholder);
    expect(input).toBeInTheDocument();
  });
});
