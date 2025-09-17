import { UseFormRegisterReturn } from 'react-hook-form';

type FieldType = {
  name: string;
};

type InputFormProps = {
  label: string;
  type?: string;
  placeholder: string;
  errors: Record<string, { message: string }>;
  field?: FieldType;
  name: string;
  register?: (name: string, options?: any) => UseFormRegisterReturn;
};

const InputForm = ({
  label,
  type = 'text',
  placeholder,
  errors,
  field,
  name,
  register,
}: InputFormProps) => {
  const inputProps = field
    ? field
    : register
    ? register(name, { required: `${label} is required` })
    : {};

  const errorKey = field ? field.name.split('.').pop() : name;
  const errorMessage = errorKey ? errors?.[errorKey]?.message : undefined;

  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        className="border rounded w-full py-2 px-3 mb-2"
        placeholder={placeholder}
        {...inputProps}
      />
      {errorMessage && (
        <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default InputForm;
