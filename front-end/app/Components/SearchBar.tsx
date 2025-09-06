export default function SearchaBar({
  inputValue,
  placeHolderValue,
  onChange,
}: {
  inputValue: string;
  placeHolderValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
      value={inputValue}
      onChange={onChange}
      placeholder={placeHolderValue}
    />
  );
}
