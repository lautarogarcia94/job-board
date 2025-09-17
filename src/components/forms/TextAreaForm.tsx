import { UseFormRegisterReturn } from 'react-hook-form';

type FieldType = {
  name: string;
};

type TextFormProps = {
  label: string;
  placeholder: string;
  errors: Record<string, { message: string }>;
  field?: FieldType;
  name: string;
  register?: (name: string, options?: any) => UseFormRegisterReturn;
};

const TextAreaForm = ({
  label,
  placeholder,
  errors,
  field,
  name,
  register,
}: TextFormProps) => {
  const textareaProps = field
    ? field
    : register
    ? register(name, { required: `${label} is required` })
    : {};

  const errorKey = field ? field.name.split('.').pop() : name;
  const errorMessage = errorKey ? errors?.[errorKey]?.message : undefined;

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700 font-bold mb-2">
        {label}
      </label>
      <textarea
        id={name}
        className="border rounded w-full py-2 px-3"
        rows={4}
        placeholder={placeholder}
        {...textareaProps}
      />
      {errorMessage && (
        <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
      )}
    </div>
  );
};
export default TextAreaForm;
