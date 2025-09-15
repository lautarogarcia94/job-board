const TextAreaForm = ({
  label,
  placeholder,
  errors,
  field,
  name,
  register,
}) => {
  const textareaProps = field
    ? field
    : register
    ? register(name, { required: `${label} is required` })
    : {};

  const errorKey = field ? field.name.split('.').pop() : name;

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700 font-bold mb-2">
        {label}
      </label>
      <textarea
        id={name}
        className="border rounded w-full py-2 px-3"
        rows="4"
        placeholder={placeholder}
        {...textareaProps}
      />
      {errors?.[errorKey] && (
        <p className="text-red-500 text-sm mt-1">{errors[errorKey]?.message}</p>
      )}
    </div>
  );
};
export default TextAreaForm;
