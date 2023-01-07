interface Props {
  label: string;
  placeholder: string;
}
function Input({ label, placeholder }: Props) {
  return (
    <div>
      <label className="text-xs mb-3 block" htmlFor={label}>
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="bg-[#faf7f0] w-full p-3 px-6 text-lg rounded-full"
      />
    </div>
  );
}

export default Input;
