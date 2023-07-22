function CheckFood({value, label, defaultChecked, disabled, onChange }) {
    return (
      <label>
        {label}
        <input
          type="checkbox"
          value={value}
          name={label}
          defaultChecked={defaultChecked}
          disabled={disabled}
          onChange={onChange}
        />
      </label>
    );
  }

  export default CheckFood;