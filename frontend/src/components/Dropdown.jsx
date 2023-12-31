export default function Dropdown({label, name, options}) {

  return (
    <div>
      <label htmlFor={name}>{label}: </label>
      <select name={name} required className="p-1">
        {options.map(option => <option key={option.id} value={option.id}>{option.name}</option>)}
      </select>
    </div>
  )
}
