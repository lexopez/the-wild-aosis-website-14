function SelectCountry({ name, id, className }) {
  return (
    <select name={name} id={id} className={className}>
      <option value="">Select country...</option>
    </select>
  );
}

export default SelectCountry;
