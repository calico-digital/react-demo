export default function FormGroup({ label, type, placeholder, value, onInput }) {
    return (
      <div className="flex flex-col space-y-2">
        <label>{label}</label>
        <input onInput={onInput} type={type} placeholder={placeholder} value={value} className="border border-gray-600 text-gray-800 rounded p-2 outline-none" />
      </div>
    )
}