const SelectorForm = ({ selectorParams }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={selectorParams.id}
        className="block text-gray-700 font-bold mb-2"
      >
        {selectorParams.labelTitle}
      </label>
      <select
        id={selectorParams.id}
        name={selectorParams.id}
        className="border rounded w-full py-2 px-3"
        value={selectorParams.value}
        required={selectorParams.required}
        onChange={selectorParams.onChangeAction}
      >
        {selectorParams.options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectorForm;
