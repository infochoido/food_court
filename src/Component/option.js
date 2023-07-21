function CheckFood({value, name, defaultChecked, disabled, onChange }) {
    return (
      <label>
        {value}
        <input
          type="checkbox"
          value={value}
          name={name}
          defaultChecked={defaultChecked}
          disabled={disabled}
          onChange={onChange}
        />
      </label>
    );
  }

  export default CheckFood;