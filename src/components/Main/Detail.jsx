export default function Detail(props) {
  return (
    <div className="flex items-center justify-center gap-[1.5em] laptop:justify-start">
      <div>
        <img src="icon-check.svg" alt="" className="w-[0.6em]" />
      </div>
      <p className="text-main-text">{props.header}</p>
    </div>
  );
}
