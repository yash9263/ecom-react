export const Checkbox = ({ name, id, value, checked, onChange, label, className }: CheckboxProps) => {
  return (
    <div className={className}>
      <input
        className="si-checkbox"
        type="checkbox"
        name={name}
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label className="si-checkbox-label" htmlFor={id}>
        {label}
      </label>
    </div>
  )
}

interface CheckboxProps {
  checked: boolean
  id: string
  label: string
  name: string
  onChange: () => undefined
  value: string
  className?: string
}

export const Radio = ({ name, id, label, value, checked, onChange, className }: RadioProps) => {
  return (
    <div className={className}>
      <input
        className="si-radio"
        type="radio"
        name={name}
        id={id}
        checked={checked}
        value={value}
        onChange={onChange}
      />
      <label className="si-radio-label" htmlFor={id}>
        {label}
      </label>
    </div>
  )
}

interface RadioProps {
  checked: boolean
  name: string
  label: string
  id: string
  value: string
  onChange: () => undefined
  className?: string
}
