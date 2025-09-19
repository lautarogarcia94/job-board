import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';

type SelectorFormProps<T extends FieldValues> = {
  label: string;
  options: string[];
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  required?: boolean;
};

function SelectorForm<T extends FieldValues>({
  name,
  label,
  options,
  register,
  required,
  errors,
}: SelectorFormProps<T>) {
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
}

export default SelectorForm;
