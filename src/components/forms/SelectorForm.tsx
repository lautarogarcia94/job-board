import { UseFormRegisterReturn } from 'react-hook-form';

type TextFormProps = {
  label: string;
  options: string[];
  placeholder: string;
  errors: Record<string, { message: string }>;
  name: string;
  register?: (
    name: string,
    options?: { required?: string }
  ) => UseFormRegisterReturn;
  required: boolean;
};

const SelectorForm = ({
  name,
  label,
  options,
  register,
  required,
  errors,
}: TextFormProps) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700 font-bold mb-2">
        {label}
      </label>
      <select
        id={name}
        className="border rounded w-full py-2 px-3"
        {...(register
          ? register(name, {
              required: required ? `${label} is required` : undefined,
            })
          : {})}
      >
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      {errors?.[name] && (
        <p className="text-red-500 text-sm mt-1">{label} is required</p>
      )}
    </div>
  );
};

export default SelectorForm;
