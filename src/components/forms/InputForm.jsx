const InputForm = ({ inputParams }) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 font-bold mb-2"
        htmlFor={inputParams.id}
      >
        {inputParams.labelTitle}
      </label>
      <input
        type={inputParams.type ? inputParams.type : 'text'}
        id={inputParams.id}
        name={inputParams.id}
        className="border rounded w-full py-2 px-3 mb-2"
        placeholder={inputParams.placeholder}
        value={inputParams.value}
        required={inputParams.required}
        onChange={inputParams.onChangeAction}
      />
    </div>
  );
};

export default InputForm;
