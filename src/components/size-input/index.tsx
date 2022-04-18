import Select from '../ui/select';

export default function SizeInput({ sizes, selectedSize, setSize }: any) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center">
        <div>
          <span className="mb-3 text-base font-normal text-[#6B7280]">
            Choose size
          </span>
        </div>
        <div>
          <a
            href="src/components/ProductDetails/AddProductToCartForm/SizeInput.client#"
            className="text-sm font-medium text-[#004633]"
          >
            Size guide
          </a>
        </div>
      </div>
      <Select
        customClassNames={'grid md:grid gap-4 items-start md:pt-0 mt-3'}
        options={sizes}
        id="size"
        selectedOption={selectedSize}
        selectOption={setSize}
      />
    </div>
  );
}
