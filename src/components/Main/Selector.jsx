export default function Selector(props) {
  return (
    <div className="justify-self-center flex gap-[1em] laptop:col-start-1 laptop:col-end-3">
      <p className="text-main-text">Monthly Billing</p>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          class="sr-only peer duration-check"
          onChange={() => props.setDuration((prev) => !prev)}
        />
        <div className="w-[3.2em] h-[1.75em] bg-empty-slider-bar peer-focus:outline-none rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0.15em] after:left-[0.15em] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[1.45em] after:w-[1.45em] after:transition-all peer-checked:bg-full-slider-bar"></div>
      </label>
      <p className="text-main-text relative after:content-['-25%'] laptop:after:content-['-25%~discount'] after:absolute after:ml-[0.5em] after:bg-discount-background after:rounded-full after:text-discount-text after:pt-[0.5em] after:pb-[0.5em] after:pl-[0.8em] after:pr-[0.8em] after:text-[70%]">
        Yearly Billing
      </p>
    </div>
  );
}
