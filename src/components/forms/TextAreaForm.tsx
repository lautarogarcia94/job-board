import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

type FieldType = {
  name: string;
  ref?: React.LegacyRef<HTMLInputElement>;
  onChange?: (...args: any) => void;
  onBlur?: (...args: any) => void;
  value?: any;
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

  const textAreaId = field?.name || name; // asegúrate de que id coincide con htmlFor

  return (
    <div className="mb-4">
      <label
        htmlFor={textAreaId}
        className="block text-gray-700 font-bold mb-2"
      >
        {label}
      </label>
      <textarea
        id={textAreaId}
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
