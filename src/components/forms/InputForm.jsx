const InputForm = ({
  label,
  type = 'text',
  placeholder,
  errors,
  field,
  name,
  register,
}) => {
  const inputProps = field
    ? field // viene de Controller
    : register
    ? register(name, { required: `${label} is required` })
    : {};

  // Determinar el nombre para mostrar errores
  const errorKey = field ? field.name.split('.').pop() : name;

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
      {errors?.[errorKey] && (
        <p className="text-red-500 text-sm mt-1">{errors[errorKey]?.message}</p>
      )}
    </div>
  );
};

export default InputForm;
