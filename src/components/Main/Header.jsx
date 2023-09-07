export default function Header() {
  return (
    <div className="grid">
      <div className="col-start-1 col-end-1 row-start-1 row-end-1 self-center z-10">
        <h1 className="text-[150%] text-center text-text-cta-background font-extrabold laptop:text-[200%]">
          Simple, traffic-based pricing
        </h1>
        <p className="text-center pt-[1em] text-main-text">
          Sign-up for our 30-day trial. No credit card required.
        </p>
      </div>
      <img
        src="pattern-circles.svg"
        alt=""
        className="col-start-1 col-end-1 row-start-1 row-end-1 justify-self-center z-0 w-[10.5em]"
      />
    </div>
  );
}
