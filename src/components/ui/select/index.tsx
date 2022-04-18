export default function Select({
  label,
  name,
  options,
  selectedOption,
  selectOption,
  customClassNames,
}: any) {
  return (
    <div className={customClassNames}>
      {label && (
        <label
          htmlFor={name}
          className="block pt-2 mt-px text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <div className="col-span-2">
        <select
          id={name}
          name={name}
          value={selectedOption}
          onChange={selectOption}
          className="block py-3 px-5 w-full text-sm bg-[#F9FAFB] rounded-md border border-[#E5E7EB]"
        >
          {options.map((option: any) => {
            return (
              <option key={option} className="text-base font-normal">
                {option}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
