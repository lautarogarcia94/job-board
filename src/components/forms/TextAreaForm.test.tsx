import { render, screen } from '@testing-library/react';
import TextAreaForm from './TextAreaForm';
import { useForm } from 'react-hook-form';
import userEvent from '@testing-library/user-event';

describe('TextAreaForm', () => {
  const label = 'TextAreaForm Label';
  const name = 'TextAreaForm Name';
  const placeholder = 'TextAreaForm Placeholder';
  const errorMessage = 'This field is required';

  it('renders text area with correct label, placeholder and id', () => {
    render(
      <TextAreaForm
        label={label}
        placeholder={placeholder}
        name={name}
        errorMessage={errorMessage}
      />
    );

    expect(screen.getByText(label)).toBeInTheDocument();
    const textArea = screen.getByPlaceholderText(placeholder);
    expect(textArea).toBeInTheDocument();
    expect(textArea).toHaveAttribute('id', name);
  });

  it('renders errorMessage if provided', () => {
    render(
      <TextAreaForm
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

  it('focus on text area when label is clicked', async () => {
    render(
      <TextAreaForm label={label} name={name} placeholder={placeholder} />
    );

    const input = screen.getByPlaceholderText(placeholder);
    const labelElement = screen.getByText(label);

    await userEvent.click(labelElement);
    expect(input).toHaveFocus();
  });

  it('renders text area correctly when using field prop (React Hook Form Controller simulation)', () => {
    const mockField = {
      name,
      value: 'My Job',
    };
    render(
      <TextAreaForm label={label} placeholder={placeholder} field={mockField} />
    );
    const input = screen.getByPlaceholderText(placeholder) as HTMLInputElement;

    expect(input.value).toBe('My Job');
    expect(input.id).toBe(name);
  });

  it('renders text area correctly when using register prop (React Hook Form simulation)', () => {
    const TestForm = () => {
      const { register } = useForm();
      return (
        <TextAreaForm
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
