import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

type FieldType = {
  name: string;
};

type TextFormProps<T extends FieldValues> = {
  label: string;
  placeholder: string;
  field?: FieldType;
  name?: Path<T>;
  register?: UseFormRegister<T>;
  errorMessage?: string;
  required?: boolean;
};

function TextAreaForm<T extends FieldValues>({
  label,
  placeholder,
  errorMessage,
  field,
  name,
  register,
}: TextFormProps<T>) {
  const textareaProps = field
    ? field
    : register && name
    ? register(name, { required: `${label} is required` })
    : {};

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
}
export default TextAreaForm;
