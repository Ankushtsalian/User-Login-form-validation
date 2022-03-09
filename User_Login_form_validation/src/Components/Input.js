function Input(props) {
  const { type, placeholder, name, id, label, value, onChange } = props;

  return (
    <>
      <div className="form-inputs">
        <label htmlFor={name} className="from-label">
          {label}
        </label>
        <input
          className="form-input"
          onChange={onChange}
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
        />
      </div>
    </>
  );
}
export default Input;
