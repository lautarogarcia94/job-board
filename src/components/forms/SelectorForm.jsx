const SelectorForm = ({ name, label, options, register, required, errors }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700 font-bold mb-2">
        {label}
      </label>
      <select
        id={name}
        className="border rounded w-full py-2 px-3"
        {...register(name, { required })}
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
