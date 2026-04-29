import './TextInput.scss'

interface TextInputProps {
  value: string | undefined;
  onChange: (v: string) => void;
}

const TextInput = ({ value, onChange }: TextInputProps) => (
  <input
    className='text-input-container'
    value={value}
    onChange={(e) => onChange(e?.target?.value)}
  />
)

export default TextInput