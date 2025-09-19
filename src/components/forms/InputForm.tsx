import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

type FieldType = {
  name: string;
};

type InputFormProps<T extends FieldValues> = {
  label: string;
  type?: string;
  placeholder: string;
  field?: FieldType;
  name?: Path<T>;
  register?: UseFormRegister<T>;
  errorMessage?: string;
  required?: boolean;
};

function InputForm<T extends FieldValues>({
  label,
  type = 'text',
  placeholder,
  errorMessage,
  field,
  name,
  register,
}: InputFormProps<T>) {
  const inputProps = field
    ? field
    : register && name
    ? register(name, { required: `${label} is required` })
    : {};

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
}

export default InputForm;
