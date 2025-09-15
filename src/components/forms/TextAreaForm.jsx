const TextAreaForm = ({ textAreaParams }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={textAreaParams.id}
        className="block text-gray-700 font-bold mb-2"
      >
        {textAreaParams.labelTitle}
      </label>
      <textarea
        id={textAreaParams.id}
        name={textAreaParams.id}
        className="border rounded w-full py-2 px-3"
        rows="4"
        placeholder={textAreaParams.placeholder}
        value={textAreaParams.value}
        onChange={textAreaParams.onChangeAction}
        required={textAreaParams.required}
      ></textarea>
    </div>
  );
};

export default TextAreaForm;
